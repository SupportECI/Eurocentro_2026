import React from 'react';
import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";

// 1. Agregamos datos a faqs para que se rendericen en el .map()
const faqs = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try it for 30 days free. Our friendly team will help you get set up in minutes.",
        icon: Heart
    },
    {
        question: "Can I change my plan later?",
        answer: "Of course! You can upgrade or downgrade your plan at any time from your dashboard.",
        icon: CreditCardRefresh
    },
    {
        question: "What is your cancellation policy?",
        answer: "We understand that things change. You can cancel your subscription at any time with one click.",
        icon: SlashCircle01
    }
];

const FAQ = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                {/* Header */}
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Preguntas Frecuentes</h2>
                    <p className="mt-4 text-lg text-gray-600 md:mt-5 md:text-xl">Todo lo que necesitas saber antes de decidir.</p>
                </div>

                {/* FAQ Grid */}
                <div className="mt-12 md:mt-16">
                    <dl className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {faqs.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col items-center text-center">
                                    {/* Reemplazo de FeaturedIcon con un div circular */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700">
                                        <item.icon size={24} />
                                    </div>

                                    <dt className="mt-4 text-lg font-semibold text-gray-900">{item.question}</dt>
                                    <dd className="mt-1 text-base text-gray-600">{item.answer}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>

                    <dl className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3 mt-10">
                        {faqs.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col items-center text-center">
                                    {/* Reemplazo de FeaturedIcon con un div circular */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700">
                                        <item.icon size={24} />
                                    </div>

                                    <dt className="mt-4 text-lg font-semibold text-gray-900">{item.question}</dt>
                                    <dd className="mt-1 text-base text-gray-600">{item.answer}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>

            </div>
        </section>
    );
};

export default FAQ;