import Link from 'next/link';
import React from 'react';

const Navitems = async () => {
    let newsItems: any[] = [];

    try {
        const res = await fetch('https://news-api-v2.vercel.app/api/categories');
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const text = await res.text();

        try {
            const data = JSON.parse(text);
            newsItems = data.data || [];
            console.log(data);
        } catch (jsonError) {
            console.error("Server returned non-JSON response:", text);
        }

    } catch (error) {
        console.error("Failed to fetch categories:", error);
    }
    
    const filtermenu = newsItems.filter(menu => menu.scrapable)
    return (
        <div className="flex gap-4 overflow-x-auto py-2">
            {filtermenu.map((menu: any, index: any) => (
                <Link key={index} href={`/category/${menu.slug}`} className="hover:text-red-700 font-medium">
                    {menu.title}
                </Link>
            ))}
        </div>
    );
};

export default Navitems;