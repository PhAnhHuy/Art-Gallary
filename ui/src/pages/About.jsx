import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    return (
        <div className="h-full flex flex-col justify-start items-start">
            <div className="flex flex-row w-full items-center justify-start gap-5 py-5 px-40">
                <div className="flex flex-row justify-center items-center gap-10">
                    <IoMdArrowRoundBack
                        className="text-3xl cursor-pointer"
                        onClick={() => navigate('/artworks')}
                    />
                </div>
                <div className="flex flex-row justify-center items-center gap-10">
                    <div className="text-2xl font-semibold">About</div>
                </div>
            </div>

            <div className="h-[calc(100vh-72px)] w-screen px-40 py-10">
                <div className="flex items-center space-x-6">
                    <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROEO2DAlnN7Qt22We1SH7l7T7WB_8ySC7YeEssDizCWs_mnoUdqLzzXaK-BWhzrz4dPnqdnUVe6fbX3j69EJRSmA"
                        alt="Takashi Murakami"
                        className="w-36 h-36 rounded-full object-cover shadow-md"
                    />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Takashi Murakami</h1>
                        <p className="text-lg text-gray-600 italic">Contemporary Artist & Innovator</p>
                    </div>
                </div>

                <div className="mt-8 text-gray-800 text-justify leading-relaxed">
                    <p className="mb-6">
                        Takashi Murakami, born on February 1, 1962, in Tokyo, Japan, is a globally renowned contemporary artist and cultural icon. Known for blending traditional Japanese aesthetics with modern pop culture, he is the founder of the "Superflat" movement, which critiques consumer culture while celebrating its colorful and playful aspects.
                    </p>
                    <p className="mb-6">
                        Murakami’s early life was influenced by his love of anime and manga, which later shaped his signature style. He studied traditional Japanese painting (Nihonga) at the Tokyo University of the Arts, but his innovative vision led him to explore contemporary art. His breakthrough came in the late 1990s with the development of his unique visual language, characterized by vibrant colors, bold patterns, and recurring motifs like smiling flowers and Mr. DOB.
                    </p>
                    <p className="mb-6">
                        A prolific collaborator, Murakami worked with brands like Louis Vuitton and celebrities such as Kanye West, Pharrell Williams, and Billie Eilish, bridging the gap between high art and popular culture. His studio, Kaikai Kiki Co., nurtures emerging talent and organizes international art fairs, further cementing his legacy.
                    </p>
                    <p>
                        Through his art, Murakami continues to explore themes of post-war Japanese identity, tradition, and modernity, inspiring audiences worldwide with his joyful yet thought-provoking works.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
