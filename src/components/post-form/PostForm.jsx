import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues, formState } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });
    const { errors } = formState;
    const [error, seterror] = useState("");
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        seterror("");
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
            if (file) {
                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                });
                if (dbPost) {
                    await appwriteService.deleteFile(post.featuredImage);
                    navigate(`/post/${dbPost.$id}`);
                } else {
                    await appwriteService.deleteFile(file.$id);
                }
            } else {
                seterror("Post updation failed.")
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.userData.$id });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                } else {
                    await appwriteService.deleteFile(file.$id);
                    seterror("slug already present, try diffrent slug value.")
                }
            } else {
                seterror("Post creation failed.")
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    // const isDuplicateSlug = async (slugValue) => {
    //     try {
    //         const posts = await appwriteService.getPosts([]);
    //         return Object.values(posts).some(post => post.slug === slugValue);
    //     } catch (error) {
    //         console.error("Error fetching posts", error);
    //         // Handle the error as needed, e.g., return false or throw an exception
    //         return false;
    //     }
    // };

    return (
        <>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
                <div className="w-2/3 px-2">
                    <Input
                        label="Title :"
                        placeholder="Title"
                        className="mb-4"
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Title can not be empty'
                            }
                        })}
                    />
                    {errors.title?.message && <p className="text-red-600 mt-8 text-center">{errors.title.message}</p>}
                    <Input
                        label="Slug :"
                        placeholder="Slug"
                        className="mb-4"
                        {...register("slug", {
                            required: {
                                value: true,
                                message: 'Slug can not be empty'
                            },
                            // validate: (slugValue) => {
                            //     return isDuplicateSlug(slugValue) === true || 'slug already present, use different slug value'
                            //     }
                        })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    {errors.slug?.message && <p className="text-red-600 mt-8 text-center">{errors.slug.message}</p>}
                    <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                </div>
                <div className="w-1/3 px-2">
                    <Input
                        label="Featured Image :"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", {
                            required: {
                                value: !post,
                                message: 'Featured Image can not be empty'
                            }
                        })}
                    />
                    {errors.image?.message && <p className="text-red-600 mt-8 text-center">{errors.image.message}</p>}
                    {post && (
                        <div className="w-full mb-4">
                            <img
                                src={appwriteService.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="rounded-lg"
                            />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-4"
                        {...register("status", {
                            required: {
                                value: true,
                                message: 'Status can not be empty'
                            }
                        })}
                    />
                    {errors.status?.message && <p className="text-red-600 mt-8 text-center">{errors.status.message}</p>}
                    <Button type="submit" bgColor={post ? "bg-green-500" : "bg-blue-600"} className="w-full">
                        {post ? "Update" : "Submit"}
                    </Button>
                </div>
            </form>
        </>
    );
}