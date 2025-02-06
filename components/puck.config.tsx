import type { Config } from "@measured/puck";

// Define component types
type Components = {
    HeroSection: {
      headline: string;
      subHeadline: string;
      ctaText: string;
    };
  };
  
// Create the Puck configuration
export const config: Config<Components> = {
    components: {
        HeroSection: {
        fields: {
            headline: {
            type: "textarea",
            label: "Headline"
            },
            subHeadline: {
            type: "textarea",
            label: "Sub-Headline"
            },
            ctaText: {
            type: "text",
            label: "Call-To-Action Button Text"
            }
        },
        defaultProps: { 
            headline: "Unlock Your Path to Success — Free eBook Inside!",
            subHeadline: 'Discover actionable strategies to set goals, overcome challenges, and achieve lasting success with our exclusive guide, <b>"10 Proven Strategies for Success."</b>Sign up now and get instant access!',
            ctaText: "YES... Give Me Access Now!"
        },
        render: ({ headline, subHeadline, ctaText } : any) => (
            <section className="relative bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                {headline}
                </h1>
                <p className="text-2xl text-gray-600 mb-6">{subHeadline}</p>

                <form
                // onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto lg:mx-0"
            >
                <div className="flex flex-col space-y-4">
                {/* Input Row */}
                <div className="flex space-x-4">
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    // value={formData.name}
                    // onChange={handleChange}
                    className="w-1/2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="w-1/2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                    {ctaText}
                </button>
                <p className="text-sm text-gray-600 text-center">We&apos;ll never share your info with anyone.</p>
                </div>
            </form>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                <img
                src={"/empty-state.png"}
                alt={"imageAlt"}
                className="rounded-xl shadow-lg w-full max-w-md lg:max-w-lg"
                />
            </div>
            </div>
        </section>
        ),
        },
    },
    // root: {
    //   render: ({ children }) => {
    //     return <div className="p-4">{children}</div>
    //   }
    // }
};