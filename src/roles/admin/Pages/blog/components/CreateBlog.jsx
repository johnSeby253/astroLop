import FormFields from '@/common/components/FormFields'
import { ChevronDown, Plus, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import BlogEditor from './BlogRichEditor';
import TagsInput from './TagInputs';
import Button from '@/common/components/Button';

const CreateBlog = () => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        blogTitle: "",
        blogCategory: "",
        blogImages: [],
        blogAuthor: "",
        blogContent: "",
        blogTags: [],
        blogStatus: false
    });

    const categories = [
        "Puja (Vedic)",
        "Tarot",
        "Astrology",
        "Numerology",
        "Vastu",
        "Spiritual",
    ];

    const tags = [...categories];

    // ✅ Reusable change handler
    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);

        const updatedImages = [
            ...images,
            ...files.map(file => ({
                preview: URL.createObjectURL(file),
                file: file
            }))
        ];

        setImages(updatedImages);
    };

    // ✅ FIXED: sync with formData
    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);

        setImages(updatedImages);

        setFormData(prev => ({
            ...prev,
            blogImages: updatedImages
        }));
    };

    // ✅ Professional logging on button click
    const handleSaveBlog = (status) => {
        const data = new FormData();

        // text fields
        data.append("blogTitle", formData.blogTitle);
        data.append("blogCategory", formData.blogCategory);
        data.append("blogAuthor", formData.blogAuthor);
        data.append("blogContent", formData.blogContent);
        data.append("blogStatus", status);

        // tags
        formData.blogTags.forEach(tag => {
            data.append("blogTags", tag);
        });

        // images 
        images.forEach(img => {
            data.append("blogImages", img.file);
        });

        // check payload
        // for (let pair of data.entries()) {
        //     console.log(pair[0], pair[1]);
        // }
    };

    return (
        <div className="w-full flex flex-col gap-10">
            <div className=" w-full flex flex-col 2xl:flex-row gap-10 ">
                <div className=" w-full 2xl:w-[50%] flex items-start 2xl:justify-center ">

                    <div className="w-full flex 2xl:w-fit flex-col gap-5 ">
                        {/* Blog Title */}
                        <div>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold">
                                Blog Title
                            </p>
                            <FormFields
                                type="text"
                                placeholder="Blog Title"
                                inputClassName="py-0 h-10 text-sm 2xl:w-[500px]"
                                onChange={(e) =>
                                    handleChange("blogTitle", e.target.value)
                                }
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold">
                                Add Category
                            </p>

                            <div className="relative 2xl:w-[500px] py-2 ">
                                <div
                                    onClick={() => setOpen(!open)}
                                    className="h-10 px-3 border border-border-line rounded-lg flex items-center justify-between cursor-pointer "
                                >
                                    <span className="text-sm text-[#8A8888]">
                                        {selectedCategory || "Select Category"}
                                    </span>
                                    <ChevronDown size={18} />
                                </div>

                                {open && (
                                    <div className="absolute top-11 w-full bg-white border border-[#CDCBCB] rounded-lg shadow-md z-50">
                                        {categories.map((cat, index) => (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    setSelectedCategory(cat);
                                                    handleChange("blogCategory", cat);
                                                    setOpen(false);
                                                }}
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                            >
                                                {cat}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Images */}
                        <div>
                            <input
                                type="file"
                                multiple
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                className="hidden"
                            />

                            <div className="flex gap-4 flex-wrap mt-3">
                                <div
                                    onClick={() => fileInputRef.current.click()}
                                    className="bg-gray-200 p-5 2xl:w-[100px] 2xl:h-[100px] flex items-center justify-center rounded-lg cursor-pointer"
                                >
                                    <Plus size={40} />
                                </div>

                                {images.map((img, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={img.preview}
                                            className="w-[100px] h-[100px] object-cover rounded-lg"
                                            alt=""
                                        />
                                        <button
                                            onClick={() => removeImage(index)}
                                            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Author */}
                        <div>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold">
                                Add Author
                            </p>
                            <FormFields
                                type="text"
                                placeholder="Author"
                                inputClassName="py-0 h-10 text-sm 2xl:w-[500px]"
                                onChange={(e) =>
                                    handleChange("blogAuthor", e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full 2xl:w-[50%] flex flex-col items-center justify-start">
                    <div className="flex flex-col gap-5">
                        <BlogEditor
                            setContent={(value) =>
                                handleChange("blogContent", value)
                            }
                        />

                        <TagsInput
                            tagsList={tags}
                            selectedTags={formData.blogTags}
                            setSelectedTags={(tags) =>
                                handleChange("blogTags", tags)
                            }
                        />
                    </div>
                </div>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center justify-end gap-3">
                {/* <Button onClick={() => handleSaveBlog(false)}>
                    Save as Draft
                </Button>
                <Button onClick={() => handleSaveBlog(true)}>
                    Publish blog
                </Button> */}
                <Button
                    size='md'
                    variant='lite_secondary'
                    onClick={() => handleSaveBlog(false)}
                >
                    Save as Draft
                </Button>
                <Button
                    className="flex items-center justify-center gap-3"
                    size='md'
                    variant='primary'
                    onClick={() => handleSaveBlog(true)}
                >
                    Publish blog
                </Button>
            </div>
        </div>
    );
};

export default CreateBlog;