type Inputs = {
    smokingPerDay: number;
    alcoholPerWeek: number;
    exercisePerWeek: number;
    sleepHoursPerDay: number;
    diet: boolean;
    sleep: boolean;
    stressLevel: "low" | "moderate" | "high";
    bmi: boolean;
    checkups: boolean;
    familyHistory: boolean;
    gender: "male" | "female";
    country: string;
};

export function calculateLifeExpectancy(
    inputs: Inputs,
    base_life_expectancy: number
): { expectancy: number; explanation: string } {
    let expectancy = base_life_expectancy;
    const reasons: string[] = [];

    // Smoking
    if (inputs.smokingPerDay > 0) {
        expectancy += Math.max(-10, -1 * Math.floor(inputs.smokingPerDay / 3));
        reasons.push(`you smoke ${inputs.smokingPerDay} cigarette(s) per day`);
    } else {
        reasons.push("you do not smoke");
    }

    // Alcohol
    if (inputs.alcoholPerWeek >= 14) {
        expectancy -= 5;
        reasons.push(`you drink ${inputs.alcoholPerWeek} alcoholic drinks per week (heavy use)`);
    } else if (inputs.alcoholPerWeek >= 7) {
        expectancy -= 2;
        reasons.push(`you drink ${inputs.alcoholPerWeek} alcoholic drinks per week`);
    } else if (inputs.alcoholPerWeek > 0) {
        reasons.push(`you drink ${inputs.alcoholPerWeek} alcoholic drinks per week`);
    } else {
        reasons.push("you do not drink alcohol");
    }

    // Exercise
    if (inputs.exercisePerWeek >= 3) {
        expectancy += 3;
        reasons.push(`you exercise ${inputs.exercisePerWeek} days per week (regular exercise)`);
    } else if (inputs.exercisePerWeek >= 1) {
        expectancy += 1;
        reasons.push(`you exercise ${inputs.exercisePerWeek} days per week`);
    } else {
        reasons.push("you do not exercise regularly");
    }

    // Diet
    if (inputs.diet) {
        expectancy += 2;
        reasons.push("you have a healthy diet");
    } else {
        reasons.push("your diet could be improved");
    }

    // Sleep
    if (inputs.sleepHoursPerDay >= 7 && inputs.sleepHoursPerDay <= 9) {
        expectancy += 2;
        reasons.push(`you sleep ${inputs.sleepHoursPerDay} hours per day (optimal)`);
    } else if (
        inputs.sleepHoursPerDay === 6 ||
        inputs.sleepHoursPerDay === 10
    ) {
        expectancy -= 1;
        reasons.push(`you sleep ${inputs.sleepHoursPerDay} hours per day (slightly suboptimal)`);
    } else if (
        inputs.sleepHoursPerDay < 6 ||
        inputs.sleepHoursPerDay > 10
    ) {
        expectancy -= 2;
        reasons.push(`you sleep ${inputs.sleepHoursPerDay} hours per day (unhealthy)`);
    }

    // BMI
    if (inputs.bmi) {
        expectancy += 1;
        reasons.push("you have a normal BMI");
    } else {
        reasons.push("your BMI is not in the normal range");
    }

    // Checkups
    if (inputs.checkups) {
        expectancy += 2;
        reasons.push("you attend regular medical checkups");
    } else {
        reasons.push("you do not attend regular medical checkups");
    }

    // Family History
    if (inputs.familyHistory) {
        expectancy -= 3;
        reasons.push("you have a negative family health history");
    } else {
        reasons.push("your family health history is not negative");
    }

    // Stress
    if (inputs.stressLevel === "high") {
        expectancy -= 2;
        reasons.push("you have high chronic stress");
    } else if (inputs.stressLevel === "moderate") {
        expectancy -= 1;
        reasons.push("you have moderate stress");
    } else {
        reasons.push("you have low stress");
    }

    const explanation = `Life expectancy for a ${inputs.gender} in ${inputs.country} is ${base_life_expectancy} years. Because ${reasons.join(
        ", "
    )}, your estimated life expectancy is ${expectancy} years.`;

    return { expectancy, explanation };
}