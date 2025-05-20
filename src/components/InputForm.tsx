import React, { useState } from "react";
import { calculateLifeExpectancy } from "../actions/life_expectancy";
import { LIFE_EXPECTANCY_BY_COUNTRY } from "../data/life_expectancy_by_country"

type Inputs = {
    smokingPerDay: number | ""; // cigarettes per day
    alcoholPerWeek: number | ""; // drinks per week
    exercisePerWeek: number | ""; // days per week
    sleepHoursPerDay: number | "";
    diet: boolean;
    sleep: boolean;
    stressLevel: "low" | "moderate" | "high";
    bmi: boolean;
    checkups: boolean;
    familyHistory: boolean;
    gender: "male" | "female";
    country: string;
};

export default function InputForm() {
    const [inputs, setInputs] = useState<Inputs>({
        smokingPerDay: "",
        alcoholPerWeek: "",
        exercisePerWeek: "",
        sleepHoursPerDay: "",
        diet: false,
        sleep: false,
        stressLevel: "moderate",
        bmi: false,
        checkups: false,
        familyHistory: false,
        gender: "male",
        country: LIFE_EXPECTANCY_BY_COUNTRY[0]?.country || "",
    });
    const [result, setResult] = useState<{ expectancy: number; explanation: string } | null>(null);
    const [showForm, setShowForm] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : type === "number"
                    ? value === "" ? "" : Number(value)
                    : value,
        }));
    };
    function getBaseExpectancy(countryCode: string, gender: "male" | "female") {
        const country = LIFE_EXPECTANCY_BY_COUNTRY.find(c => c.code === countryCode);
        if (!country) return null;
        return country[gender];
    }

    const baseExpectancy = getBaseExpectancy(inputs.country, inputs.gender);
    const calculate = () => {
        const resultObj = calculateLifeExpectancy(inputs, baseExpectancy || 65);
        setResult(resultObj);
        setShowForm(false);
    };


    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            {showForm ? (
                <>
                    {result !== null && (
                        <>
                            <div className="mt-6 p-4 bg-blue-50 rounded shadow text-center">
                                <h3 className="text-lg font-semibold mb-2">Estimated Life Expectancy</h3>
                                <span className="text-3xl font-bold">{result.expectancy} years</span>
                                <div className="mt-4 p-3 bg-yellow-50 rounded shadow text-gray-800 text-sm text-left">
                                    <h4 className="font-semibold mb-2">How your estimate was calculated:</h4>
                                    <p>{result.explanation}</p>
                                </div>
                            </div>
                            <button
                                className="w-full mt-4 mb-4 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
                                onClick={() => setResult(null)}
                            >
                                Restart
                            </button>
                        </>
                    )}
                    <h2 className="text-xl font-bold mb-4">Lifestyle Factors</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            calculate();
                        }}
                        className="space-y-3"
                    >
                        <label className="flex items-center mb-2">
                            <span className="mr-4">Country:</span>
                            <select
                                name="country"
                                value={inputs.country}
                                onChange={handleChange}
                                className="border rounded px-2 py-1 flex-1"
                                required
                            >
                                {LIFE_EXPECTANCY_BY_COUNTRY.map((c) => (
                                    <option key={c.code} value={c.code}>
                                        {c.country}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label className="flex items-center mb-2">
                            <span className="mr-4">Gender:</span>
                            <select
                                name="gender"
                                value={inputs.gender}
                                onChange={handleChange}
                                className="border rounded px-2 py-1"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                        <label className="flex items-center mb-2">
                            <span className="mr-4">Smoking (cigarettes/day):</span>
                            <input
                                type="number"
                                name="smokingPerDay"
                                min={0}
                                max={60}
                                value={inputs.smokingPerDay}
                                onChange={handleChange}
                                placeholder="0"
                                className="border rounded px-2 py-1 w-24"
                            />
                        </label>
                        <label className="flex items-center mb-2">
                            <span className="mr-4">Alcohol (drinks/week):</span>
                            <input
                                type="number"
                                name="alcoholPerWeek"
                                min={0}
                                max={30}
                                value={inputs.alcoholPerWeek}
                                onChange={handleChange}
                                placeholder="0"
                                className="border rounded px-2 py-1 w-24"
                            />
                        </label>
                        <label className="flex items-center mb-2">
                            <span className="mr-4">Exercise (days/week):</span>
                            <input
                                type="number"
                                name="exercisePerWeek"
                                min={0}
                                max={7}
                                value={inputs.exercisePerWeek}
                                onChange={handleChange}
                                placeholder="0"
                                className="border rounded px-2 py-1 w-24"
                            />
                        </label>
                        <label className="flex items-center mb-2">
                            <span className="mr-4">Sleep (hours/day):</span>
                            <input
                                type="number"
                                name="sleepHoursPerDay"
                                min={2}
                                max={18}
                                value={inputs.sleepHoursPerDay}
                                onChange={handleChange}
                                placeholder="2-18"
                                className="border rounded px-2 py-1 w-24"
                            />
                        </label>
                        <label className="flex items-center mb-2">
                            <span className="mr-4">Stress Level:</span>
                            <select
                                name="stressLevel"
                                value={inputs.stressLevel}
                                onChange={handleChange}
                                className="border rounded px-2 py-1"
                            >
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="diet"
                                checked={inputs.diet}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Healthy diet
                        </label>

                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="bmi"
                                checked={inputs.bmi}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Normal BMI
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="checkups"
                                checked={inputs.checkups}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Regular medical checkups
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="familyHistory"
                                checked={inputs.familyHistory}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Family history (negative)
                        </label>
                        <button
                            type="submit"
                            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Calculate Life Expectancy
                        </button>
                    </form>
                </>
            ) : (
                <>
                    {result !== null && (
                        <div className="mt-6 p-4 bg-blue-50 rounded shadow text-center">
                            <h3 className="text-lg font-semibold mb-2">Estimated Life Expectancy</h3>
                            <span className="text-3xl font-bold">{result.expectancy} years</span>
                            <div className="mt-4 p-3 bg-yellow-50 rounded shadow text-gray-800 text-sm text-left">
                                <h4 className="font-semibold mb-2">How your estimate was calculated:</h4>
                                <p>{result.explanation}</p>
                            </div>
                        </div>
                    )}
                    <button
                        className="w-full mt-4 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
                        onClick={() => setShowForm(true)}
                    >
                        Display Form
                    </button>
                </>
            )}
        </div>
    );
}