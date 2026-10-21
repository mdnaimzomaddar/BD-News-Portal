"use client";
import React from 'react';
import { Form } from "@heroui/react";
import { authClient } from '@/lib/auth-client';

const Page = () => {

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // ফর্ম থেকে ডেটা সংগ্রহ
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const image = formData.get("image") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        // Better Auth দিয়ে সাইন আপ হ্যান্ডেল করা
        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image,
            callbackURL: "/"
        });

        if (error) {
            console.error("Sign up error:", error);
            alert(`ত্রুটি: ${error.message || "সাইন আপ ব্যর্থ হয়েছে"}`);
        } else {
            console.log("Sign up successful:", data);
            alert("সাইন আপ সফল হয়েছে!");
            window.location.href = "/";
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <Form onSubmit={onSubmit}>
                <h2 className="text-[20px] text-white font-bold text-center">সাইন আপ</h2>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                
                    <label className="label">Name</label>
                    <input name="name" type="text" className="input" placeholder="e.g. Md Naim ..." required />

                    <label className="label">Image URL</label>
                    <input name="image" type="url" className="input" placeholder="Image URL here" />

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" required />
            
                    <label className="label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" required />
            
                    <button type="submit" className="btn btn-neutral mt-4 bg-red-600 text-white">
                        সাইন আপ করুন
                    </button>
                </fieldset>
            </Form>
        </div>
    );
};

export default Page;