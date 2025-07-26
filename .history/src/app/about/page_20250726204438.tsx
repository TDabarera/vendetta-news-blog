import React from "react";

function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between p-24">
                <h1 className="text-4xl font-bold mb-4"> About Vendetta News Blog</h1>
                <p className="text-lg text-gray-700"> Vendetta is a platform dedicated to fostering diverse perspectives
                    and engaging discussions on current events.
                    We believe in providing a space where writers can express their views and readers can engage with challenging ideas.
                    Our unique color-coding system helps readers quickly identify the ideological leaning of an article, promoting transparency and informed consumption of news.
                    </p>
                <p className="text-lg text-gray-700 mt-4">Our Mission is to empower informed debate and critical thinking, offering a robust platform for both creators and consumers of news  </p>    
            </div>
        </main>
    );
}

export default AboutPage;