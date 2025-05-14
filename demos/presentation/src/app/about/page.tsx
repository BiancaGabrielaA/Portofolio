import Image from 'next/image';

export default function AboutPage () {
    return (
       <div>
           <div className="px-6 py-12 bg-white">
                {/* Home Contact Image */}
                <div className="relative w-full h-96 mb-10 rounded-lg overflow-hidden shadow-lg">
                    <Image
                    src={"/demo/presentation/catering-images/home-contact.jpg"}
                    alt="Home Contact"
                    fill
                    className="object-cover"
                    />
                </div>

                {/* ABOUT US Section */}
                <div className="max-w-7xl mx-auto space-y-6">
                    <h4 className="text-center text-2xl font-semibold text-[var(--light-brown)] border-b border-[var(--light-brown)] pb-4 mb-8">
                    ABOUT US
                    </h4>
                    <h2 className="text-center text-3xl font-bold text-[var(--light-brown)]">Stylish meets Delicious</h2>
                    <p className="px-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
                    Jasmine Catering was born out of a passion for gathering people around beautifully prepared meals. What started as a family tradition quickly turned into a thriving catering service that celebrates the joy of shared food. We believe food is more than nourishment — it’s an experience, an emotion, and a connection to the people and moments that matter most.
                    </p>
                    <p className="px-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
                    Our mission is to create elegant, heartfelt culinary experiences that feel both personal and unforgettable. Every menu is crafted with intention, using fresh, seasonal ingredients, and plated with an artistic touch. Whether it`s a cozy brunch, a wedding banquet, or a corporate soirée, we aim to impress not just your palate, but your heart.
                    </p>
                    <p className="px-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
                    Behind every dish is a team that loves what they do. From our chefs to our servers, we bring professionalism, warmth, and a bit of sparkle to every event. We listen to your vision, tailor the menu to suit your story, and execute everything with precision and care. Because at Jasmine Catering, your moments are our mission.
                    </p>
                    <p className="px-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
                    Let us help you celebrate life — beautifully. With a perfect blend of style and comfort, Jasmine Catering turns your ideas into full-sensory experiences. Taste the difference, feel the connection, and savor the memories we create together.
                    </p>
                </div>

                {/* MEET THE TEAM Section */}
                <div className="max-w-7xl mx-auto mt-20 space-y-6">
                    <h4 className="text-center text-2xl font-semibold text-[var(--light-brown)] border-b border-[var(--light-brown)] pb-4 mb-8">
                    MEET THE TEAM
                    </h4>
                    <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={"/demo/presentation/catering-images/team.jpg"}
                        alt="Team"
                        fill
                        className="object-cover"
                    />
                    </div>
                    <p className="px-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
                    At the core of Jasmine Catering is a small, passionate team that believes in the magic of bringing people together through food. Our chefs, event planners, and service staff all share one goal: to create memorable moments that feel both thoughtful and effortless. Each team member brings a unique touch to the table, blending creativity with expertise.
                    </p>
                    <p className="px-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
                    Our head chef leads the kitchen with a deep respect for tradition and an eye for detail, crafting dishes that are as beautiful as they are flavorful. Meanwhile, our event coordinators work closely with clients to ensure every aspect — from setup to service — flows seamlessly. Behind the scenes, our friendly support crew keeps everything running with care and grace.
                    </p>
                    <p className="px-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
                    What sets our team apart is the genuine joy we take in our work. We`re more than just colleagues — we`re a family that supports one another and pours love into every plate. Whether you`re hosting an intimate dinner or a grand celebration, the Jasmine team is here to bring warmth, professionalism, and a sprinkle of magic to your event.
                    </p>
                </div>
            </div>

           <div className="px-6 py-12 bg-white">
                <h4 className="text-center text-2xl font-semibold text-[var(--light-brown)] border-b border-[var(--light-brown)] pb-4 mb-10">
                    OUR SERVICES
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Private Catering */}
                    <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
                        <Image
                        src="/demo/presentation/catering-images/private-catering.jpg"
                        alt="Private Catering"
                        fill
                        className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--light-brown)]">Private Catering</h3>
                    <h5 className="text-gray-600 text-sm px-4">
                        Elegant and personalized experiences for birthdays, dinners, and intimate gatherings.
                    </h5>
                    </div>

                    {/* Special Events */}
                    <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
                        <Image
                        src="/demo/presentation/catering-images/special-events.jpg"
                        alt="Special Events"
                        fill
                        className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--light-brown)]">Special Events</h3>
                    <h5 className="text-gray-600 text-sm px-4">
                        Memorable moments, from weddings to anniversaries, styled with taste and flair.
                    </h5>
                    </div>

                    {/* Corporate Events */}
                    <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
                        <Image
                        src={"/demo/presentation/catering-images/corporate-events.jpg"}
                        alt="Corporate Events"
                        fill
                        className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--light-brown)]">Corporate Events</h3>
                    <h5 className="text-gray-600 text-sm px-4">
                        Professional catering solutions for meetings, launches, and conferences.
                    </h5>
                    </div>
                </div>
            </div>
       </div>
    )
}