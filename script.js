const curriculum = {
  JSS1: [
    { title: "Whole numbers & numeration", category: "Number", icon: "01", intro: "Read, write, compare and arrange whole numbers. Use place value to understand what each digit is worth, and round numbers when an estimate is more useful than an exact answer.", example: "In 48,306, the 8 is in the thousands place, so its value is 8,000. Rounded to the nearest hundred, 48,306 is 48,300.", questions: [["What is the value of 7 in 572,149?", "70,000 (the ten-thousands place)."], ["Round 36,782 to the nearest thousand.", "37,000. The hundreds digit is 7, so round up."]] },
    { title: "Number bases", category: "Number", icon: "02", intro: "A number base tells you how many digits are used before carrying to the next place. In base two the digits are 0 and 1; in base five the digits are 0 to 4.", example: "Convert 1011₂ to base ten: 1×8 + 0×4 + 1×2 + 1×1 = 11₁₀.", questions: [["Convert 1101₂ to base ten.", "13₁₀ (8 + 4 + 0 + 1)."], ["Convert 14₁₀ to base two.", "1110₂ (8 + 4 + 2)."]] },
    { title: "Fractions", category: "Number", icon: "03", intro: "A fraction represents part of a whole. To add or subtract fractions, use a common denominator; to multiply, multiply across; to divide, multiply by the reciprocal.", example: "1/3 + 1/4 = 4/12 + 3/12 = 7/12.", questions: [["Simplify 18/24.", "3/4. Divide numerator and denominator by 6."], ["Find 2/5 × 15/4.", "3/2 or 1½. Cancel common factors first."]] },
    { title: "Decimals", category: "Number", icon: "04", intro: "Decimal places show tenths, hundredths, thousandths and smaller parts. Line up decimal points when adding or subtracting, and keep track of place value when multiplying or dividing.", example: "2.35 + 0.8 = 2.35 + 0.80 = 3.15.", questions: [["Calculate 6.4 − 2.75.", "3.65."], ["Calculate 0.6 × 0.3.", "0.18. There are two decimal places altogether."]] },
    { title: "Percentages", category: "Number", icon: "05", intro: "Percent means 'out of 100'. Change a percentage to a fraction or decimal by dividing by 100. Find a percentage of an amount by multiplying by the percentage as a decimal.", example: "25% of 80 = 0.25 × 80 = 20.", questions: [["Find 15% of 200.", "30."], ["Express 3/5 as a percentage.", "60%. (3 ÷ 5) × 100 = 60."]] },
    { title: "Ratio & rate", category: "Number", icon: "06", intro: "A ratio compares quantities in the same units. Simplify by dividing every part by the same factor. A rate compares quantities with different units, such as kilometres per hour.", example: "Share 24 sweets in the ratio 1:3. There are 4 parts; each part is 24 ÷ 4 = 6. The shares are 6 and 18.", questions: [["Simplify the ratio 18:30.", "3:5. Divide both parts by 6."], ["A car travels 150 km in 3 hours. What is its average speed?", "50 km/h. Speed = distance ÷ time."]] },
    { title: "Factors, multiples & primes", category: "Number", icon: "07", intro: "Factors divide a number exactly; multiples are found by multiplying. A prime number has exactly two factors: 1 and itself. Use factor lists to find HCF and LCM.", example: "Factors of 12 are 1, 2, 3, 4, 6, 12. The first common multiple of 4 and 6 is 12, so their LCM is 12.", questions: [["Find the HCF of 18 and 30.", "6."], ["Find the LCM of 8 and 12.", "24."]] },
    { title: "Integers & directed numbers", category: "Number", icon: "08", intro: "Integers include positive numbers, negative numbers and zero. On a number line, numbers increase as you move right. When subtracting a negative number, move right.", example: "−3 + 7 = 4. Start at −3 and move 7 steps to the right.", questions: [["Calculate −5 + 2.", "−3."], ["Calculate 4 − (−6).", "10. Subtracting a negative is adding."]] },
    { title: "Estimation & approximation", category: "Number", icon: "09", intro: "Rounding makes a number easier to use. Check the digit immediately to the right of the place you are rounding to: 5 or more rounds up; less than 5 stays down. Estimate to check whether an answer is sensible.", example: "Estimate 49 × 21 by rounding to 50 × 20 = 1,000.", questions: [["Round 8.764 to 2 decimal places.", "8.76. The next digit is 4."], ["Estimate 198 ÷ 4.1 using 1 significant figure.", "About 50 (200 ÷ 4)."]] },
    { title: "Algebraic expressions", category: "Algebra", icon: "10", intro: "Letters stand for numbers. Like terms have the same letter part and can be collected. To evaluate an expression, substitute the given value for each letter.", example: "If a = 3, then 2a + 5 = 2(3) + 5 = 11.", questions: [["Simplify 4x + 3x − 2.", "7x − 2."], ["Find 3p − 4 when p = 5.", "11."]] },
    { title: "Simple equations", category: "Algebra", icon: "11", intro: "An equation says two expressions are equal. Keep it balanced by doing the same operation to both sides. Undo addition or subtraction before multiplication or division.", example: "Solve 3x + 2 = 14: subtract 2 to get 3x = 12; divide by 3, so x = 4.", questions: [["Solve y − 7 = 9.", "y = 16."], ["Solve 5m = 35.", "m = 7."]] },
    { title: "Sets & set notation", category: "Algebra", icon: "12", intro: "A set is a collection of distinct objects. The symbol ∈ means 'belongs to'; ∪ means union (in either set); ∩ means intersection (in both sets).", example: "If A = {1, 2, 3} and B = {3, 4}, then A ∩ B = {3} and A ∪ B = {1, 2, 3, 4}.", questions: [["If P = {a, b, c} and Q = {c, d}, find P ∩ Q.", "{c}."], ["Is 5 ∈ {2, 4, 6}?", "No. 5 is not an element of the set."]] },
    { title: "Lines & angles", category: "Geometry", icon: "13", intro: "An angle measures a turn in degrees. Acute angles are less than 90°, right angles are 90°, obtuse angles are between 90° and 180°, and angles on a straight line add to 180°.", example: "Angles on a straight line add to 180°. If one is 65°, the other is 180° − 65° = 115°.", questions: [["Two angles on a straight line: one is 128°. Find the other.", "52°."], ["Find the complement of 37°.", "53°. Complementary angles add to 90°."]] },
    { title: "Plane shapes & polygons", category: "Geometry", icon: "14", intro: "Polygons are closed shapes with straight sides. A triangle has 3 sides, a quadrilateral 4, a pentagon 5 and a hexagon 6. Classify shapes by their sides, angles and symmetry.", example: "A regular hexagon has 6 equal sides and 6 equal angles. The sum of its interior angles is (6 − 2) × 180° = 720°.", questions: [["How many sides does an octagon have?", "8."], ["What is the sum of the interior angles of a triangle?", "180°."]] },
    { title: "Perimeter & area", category: "Geometry", icon: "15", intro: "Perimeter is the distance around a 2D shape; area is the surface it covers. Write the correct units: units for perimeter and square units for area.", example: "A rectangle 8 cm long and 3 cm wide has perimeter 2(8 + 3) = 22 cm and area 8 × 3 = 24 cm².", questions: [["Find the perimeter of a square with side 6 cm.", "24 cm."], ["Find the area of a triangle with base 10 cm and height 4 cm.", "20 cm². Area = ½ × base × height."]] },
    { title: "Collecting & presenting data", category: "Statistics", icon: "16", intro: "Data can be organised in tables and displayed with bar charts or pictograms. Include a title, labelled axes and a suitable scale. Frequency tells how many times a value occurs.", example: "For scores 2, 3, 3, 4, 4, 4, the frequency of 4 is 3.", questions: [["Find the mode of 2, 5, 5, 7, 8.", "5. It occurs most often."], ["What should the vertical axis of a bar chart show?", "The frequency or number in each category."]] }
  ],
  JSS2: [
    { title: "Number bases & conversion", category: "Number", icon: "01", intro: "Work in bases other than ten by using place values that are powers of the base. Convert to base ten by expanding; convert from base ten by repeated division or grouping.", example: "231₄ = 2×16 + 3×4 + 1 = 45₁₀.", questions: [["Convert 10110₂ to base ten.", "22₁₀ (16 + 4 + 2)."], ["Convert 25₁₀ to base three.", "221₃ (18 + 6 + 1)."]] },
    { title: "Fractions & mixed numbers", category: "Number", icon: "02", intro: "Convert a mixed number to an improper fraction before multiplying or dividing. For addition and subtraction, first find a common denominator, then simplify the result.", example: "2¼ = 9/4. Then 2¼ × 2/3 = 9/4 × 2/3 = 3/2 = 1½.", questions: [["Calculate 2/3 + 5/6.", "1½. (4/6 + 5/6 = 9/6)."], ["Calculate 3¼ − 1½.", "1¾."]] },
    { title: "Decimals & recurring decimals", category: "Number", icon: "03", intro: "Convert a terminating decimal to a fraction using its place value, then simplify. A recurring decimal has a digit or group of digits that repeats forever.", example: "0.375 = 375/1000 = 3/8 after dividing top and bottom by 125.", questions: [["Write 0.45 as a fraction in simplest form.", "9/20."], ["Calculate 4.8 ÷ 0.6.", "8. Move both decimal points one place to get 48 ÷ 6."]] },
    { title: "Percentages, profit & loss", category: "Number", icon: "04", intro: "Percentage change compares the change with the original amount. Profit = selling price − cost price; loss = cost price − selling price. Percentage profit or loss is based on cost price.", example: "Bought for ₦800, sold for ₦1,000: profit = ₦200; percentage profit = 200/800 × 100 = 25%.", questions: [["An item costs ₦2,000 and sells for ₦2,500. Find the percentage profit.", "25%. Profit is ₦500; 500/2,000 × 100."], ["A ₦600 item is sold at a 10% loss. Find its selling price.", "₦540. The loss is ₦60."]] },
    { title: "Ratio, proportion & rates", category: "Number", icon: "05", intro: "Equivalent ratios have the same relationship. Use proportion to scale recipes, maps or quantities. A unit rate compares an amount with one unit, such as price per kilogram.", example: "If 3 notebooks cost ₦450, one costs ₦150, so 5 notebooks cost 5 × ₦150 = ₦750.", questions: [["Share ₦840 in the ratio 3:4.", "₦360 and ₦480. Seven parts; each part is ₦120."], ["A map scale is 1 cm : 5 km. What real distance is 7 cm?", "35 km."]] },
    { title: "Standard form & significant figures", category: "Number", icon: "06", intro: "Standard form is a × 10ⁿ, where 1 ≤ a < 10 and n is an integer. Significant figures start at the first non-zero digit; use the next digit to decide whether to round.", example: "72,500 = 7.25 × 10⁴. The decimal point moved 4 places left.", questions: [["Write 0.00063 in standard form.", "6.3 × 10⁻⁴."], ["Round 58,472 to 2 significant figures.", "58,000."]] },
    { title: "Indices & powers", category: "Number", icon: "07", intro: "An index tells how many times to multiply a base by itself. For the same base, multiply powers by adding indices and divide powers by subtracting indices.", example: "2³ × 2² = 2⁵ = 32.", questions: [["Evaluate 3⁴.", "81."], ["Simplify 5⁶ ÷ 5².", "5⁴ = 625."]] },
    { title: "Directed numbers", category: "Number", icon: "08", intro: "Use a number line and sign rules for positive and negative numbers. Same signs when multiplying or dividing give a positive result; different signs give a negative result.", example: "(−4) × 3 = −12, while (−4) × (−3) = 12.", questions: [["Calculate −9 + 14 − 6.", "−1."], ["Calculate (−7) × (−5).", "35."]] },
    { title: "Algebra: simplify & substitute", category: "Algebra", icon: "09", intro: "Collect like terms and use the order of operations when substituting values. A coefficient is the number multiplying a variable; for example, 5 is the coefficient of 5x.", example: "Simplify 3a + 2b − a + 5b = 2a + 7b.", questions: [["Simplify 8x − 3 + 2x + 9.", "10x + 6."], ["Evaluate 2x² − y when x = 3 and y = 4.", "14. (2 × 9) − 4."]] },
    { title: "Expansion & factorisation", category: "Algebra", icon: "10", intro: "Expand brackets by multiplying every term inside by the term outside. Factorise by taking out the highest common factor shared by all terms.", example: "3(x + 4) = 3x + 12. In reverse, 6x + 18 = 6(x + 3).", questions: [["Expand 4(2y − 3).", "8y − 12."], ["Factorise 10x + 15.", "5(2x + 3)."]] },
    { title: "Linear equations", category: "Algebra", icon: "11", intro: "Solve a linear equation by isolating the unknown while keeping both sides balanced. Check your answer by substituting it into the original equation.", example: "Solve 2x − 5 = 9: add 5 to get 2x = 14; divide by 2, so x = 7.", questions: [["Solve 4y + 3 = 19.", "y = 4."], ["Solve 3(x − 2) = 15.", "x = 7."]] },
    { title: "Inequalities", category: "Algebra", icon: "12", intro: "An inequality compares values using <, >, ≤ or ≥. Solve like an equation, but reverse the inequality sign when multiplying or dividing both sides by a negative number.", example: "Solve x + 3 < 8: subtract 3, so x < 5.", questions: [["Solve 2x ≥ 10.", "x ≥ 5."], ["Solve −3y < 12.", "y > −4. The sign reverses when dividing by −3."]] },
    { title: "Sets & Venn diagrams", category: "Algebra", icon: "13", intro: "A Venn diagram shows how sets relate. The overlap represents the intersection; everything in either set is the union. Place elements in the overlap first, then in the non-overlapping regions.", example: "In a class of 20, 12 like football, 9 like basketball and 5 like both. At least one = 12 + 9 − 5 = 16.", questions: [["If n(A) = 14, n(B) = 11 and n(A ∩ B) = 4, find n(A ∪ B).", "21. Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B)."], ["In a Venn diagram, where do elements in both sets go?", "In the overlapping intersection region."]] },
    { title: "Angles, triangles & polygons", category: "Geometry", icon: "14", intro: "Angles on a straight line total 180° and around a point total 360°. Triangle angles total 180°. For an n-sided polygon, interior angle sum = (n − 2) × 180°.", example: "A quadrilateral has angle sum (4 − 2) × 180° = 360°. If three angles total 270°, the fourth is 90°.", questions: [["Find the third angle in a triangle with angles 48° and 67°.", "65°."], ["Find the interior angle sum of a pentagon.", "540°."]] },
    { title: "Bearings & construction", category: "Geometry", icon: "15", intro: "A bearing is measured clockwise from north and written as a three-digit angle. Use a ruler and protractor for accurate geometric constructions; mark compass arcs clearly.", example: "A direction 45° clockwise from north is bearing 045°. A direction due east is 090°.", questions: [["Write the bearing for due south.", "180°."], ["A bearing is 120°. How many degrees clockwise from north is this?", "120°."]] },
    { title: "Perimeter, area & circles", category: "Geometry", icon: "16", intro: "Use the correct formula and units. Circle circumference C = πd = 2πr; area A = πr². Use π ≈ 22/7 or 3.142 as instructed.", example: "For a circle of radius 7 cm, circumference = 2 × 22/7 × 7 = 44 cm; area = 22/7 × 7² = 154 cm².", questions: [["Find the circumference of a circle with diameter 14 cm (use π = 22/7).", "44 cm."], ["Find the area of a rectangle 9 m by 4 m.", "36 m²."]] },
    { title: "Volume & capacity", category: "Geometry", icon: "17", intro: "Volume measures the space inside a 3D object and is written in cubic units. A cuboid's volume is length × width × height. 1,000 cm³ = 1 litre.", example: "A cuboid 5 cm × 4 cm × 3 cm has volume 5 × 4 × 3 = 60 cm³.", questions: [["Find the volume of a cube with side 4 cm.", "64 cm³."], ["How many litres are 3,000 cm³?", "3 litres."]] },
    { title: "Mean, median, mode & range", category: "Statistics", icon: "18", intro: "Mean = total ÷ number of values. Median is the middle value after sorting. Mode is most frequent; range = maximum − minimum. Choose the measure that best describes the data.", example: "For 2, 3, 3, 8: mean = 4, median = 3, mode = 3 and range = 6.", questions: [["Find the mean of 4, 6, 8, 10.", "7."], ["Find the median of 1, 4, 7, 9, 12.", "7."]] },
    { title: "Probability", category: "Statistics", icon: "19", intro: "Probability measures how likely an event is, from 0 (impossible) to 1 (certain). For equally likely outcomes, probability = favourable outcomes ÷ total outcomes.", example: "A fair die has 3 even numbers (2, 4, 6) out of 6, so P(even) = 3/6 = 1/2.", questions: [["What is the probability of getting a 5 on a fair six-sided die?", "1/6."], ["A bag has 3 red and 2 blue balls. What is P(blue)?", "2/5."]] }
  ]
};

function gcd(a, b) {
  return b ? gcd(b, a % b) : Math.abs(a);
}

function toBase(value, base) {
  return value.toString(base).toUpperCase();
}

function makePracticeQuestions(topic) {
  const topicTitle = topic.title;
  const buildFour = (n) => {
    switch (topicTitle) {
      case "Whole numbers & numeration": {
        const value = n * 10000 + 4 * 1000 + n * 10 + 7;
        const round = n * 137 + 46;
        return [
          [`What is the value of the digit 4 in ${value.toLocaleString()}?`, "4,000."],
          [`Round ${round.toLocaleString()} to the nearest hundred.`, `${Math.round(round / 100) * 100}.`],
          [`What is ${n * 25} more than ${n * 100}?`, `${n * 125}.`],
          [`Arrange ${n * 12}, ${n * 10}, and ${n * 15} in ascending order.`, `${n * 10}, ${n * 12}, ${n * 15}.`]
        ];
      }
      case "Number bases":
      case "Number bases & conversion": {
        const binary = 32 + n;
        const baseFive = 25 + n;
        return [
          [`Convert ${toBase(binary, 2)}₂ to base ten.`, `${binary}₁₀.`],
          [`Convert ${binary}₁₀ to base two.`, `${toBase(binary, 2)}₂.`],
          [`Convert ${toBase(baseFive, 5)}₅ to base ten.`, `${baseFive}₁₀.`],
          [`Convert ${baseFive}₁₀ to base five.`, `${toBase(baseFive, 5)}₅.`]
        ];
      }
      case "Fractions":
      case "Fractions & mixed numbers": {
        const d = n + 2;
        const commonFactor = gcd(n, d);
        return [
          [`Simplify ${2 * n}/${2 * d}.`, `${n / commonFactor}/${d / commonFactor}.`],
          [`Calculate 1/${d} + 1/${d + 1}.`, `${2 * d + 1}/${d * (d + 1)}.`],
          [`Calculate 3/${d} × ${d}/6.`, `1/2.`],
          [`Calculate ${d + 1}/${d} − 1/${d}.`, `1.`]
        ];
      }
      case "Decimals":
      case "Decimals & recurring decimals": {
        const a = n + 0.4;
        const b = n / 10 + 0.2;
        return [
          [`Calculate ${a.toFixed(1)} + ${b.toFixed(1)}.`, `${(a + b).toFixed(2)}.`],
          [`Calculate ${(a + 1).toFixed(1)} − ${b.toFixed(1)}.`, `${(a + 1 - b).toFixed(2)}.`],
          [`Calculate ${(n / 10).toFixed(1)} × 0.5.`, `${(n / 20).toFixed(2)}.`],
          [`Write 0.${n * 7} as a fraction in simplest form.`, `${n * 7 / gcd(n * 7, 100)}/${100 / gcd(n * 7, 100)}.`]
        ];
      }
      case "Percentages": {
        return [
          [`Find 10% of ${n * 40}.`, `${n * 4}.`],
          [`Find 25% of ${n * 20}.`, `${n * 5}.`],
          [`Express ${n}/${n + 1} as a percentage.`, `${(n / (n + 1) * 100).toFixed(2)}%.`],
          [`What percentage of ${n * 100} is ${n * 20}?`, `20%.`]
        ];
      }
      case "Percentages, profit & loss": {
        return [
          [`An item costs ₦${n * 100} and sells for ₦${n * 120}. Find the profit.`, `₦${n * 20}.`],
          [`An item costs ₦${n * 100} and sells for ₦${n * 90}. Find the percentage loss.`, `10%.`],
          [`A trader buys goods for ₦${n * 500} and makes a 10% profit. Find the selling price.`, `₦${n * 550}.`],
          [`An item sells for ₦${n * 120} at a 20% profit. Find its cost price.`, `₦${n * 100}.`]
        ];
      }
      case "Standard form & significant figures": {
        const value = n * 1000 + 500;
        const small = n / 100000;
        const exponent = Math.floor(Math.log10(value));
        const smallExponent = Math.floor(Math.log10(small));
        const rounded = Number(value.toPrecision(2));
        return [
          [`Write ${value.toLocaleString()} in standard form.`, `${(value / 10 ** exponent).toFixed(2)} × 10^${exponent}.`],
          [`Write ${small.toFixed(5)} in standard form.`, `${(small / 10 ** smallExponent).toFixed(2)} × 10^${smallExponent}.`],
          [`Write ${n} × 10⁴ as an ordinary number.`, `${n * 10000}.`],
          [`Round ${value.toLocaleString()} to 2 significant figures.`, `${rounded.toLocaleString()}.`]
        ];
      }
      case "Indices & powers": {
        return [
          [`Evaluate 2^${n}.`, `${2 ** n}.`],
          [`Simplify 3^${n} × 3² using indices.`, `3^${n + 2}.`],
          [`Simplify 5^${n + 3} ÷ 5^${n}.`, `5³ = 125.`],
          [`Write ${n}² as repeated multiplication.`, `${n} × ${n}.`]
        ];
      }
      case "Expansion & factorisation": {
        return [
          [`Expand ${n}(x + 3).`, `${n}x + ${n * 3}.`],
          [`Factorise ${n}x + ${n * 4}.`, `${n}(x + 4).`],
          [`Expand 2(3y + ${n}).`, `6y + ${n * 2}.`],
          [`Factorise ${n * 3}x + ${n * 6}.`, `${n * 3}(x + 2).`]
        ];
      }
      case "Ratio & rate":
      case "Ratio, proportion & rates": {
        return [
          [`Simplify the ratio ${n * 3}:${n * 4}.`, `3:4.`],
          [`Share ${n * 8} mangoes in the ratio 3:5.`, `${n * 3} mangoes and ${n * 5} mangoes.`],
          [`A cyclist travels ${n * 12} km in ${n * 2} hours. Find the average speed.`, `6 km/h.`],
          [`If 2 exercise books cost ₦${n * 100}, what do 6 books cost at the same rate?`, `₦${n * 300}.`]
        ];
      }
      case "Factors, multiples & primes": {
        const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
        const prime = primeNumbers[n - 2];
        return [
          [`Find the HCF of ${n * 6} and ${n * 9}.`, `${n * 3}.`],
          [`Find the LCM of ${n * 2} and ${n * 5}.`, `${n * 10}.`],
          [`Is ${prime} a prime number?`, `Yes. Its only factors are 1 and ${prime}.`],
          [`Write the first three positive multiples of ${n}.`, `${n}, ${n * 2}, ${n * 3}.`]
        ];
      }
      case "Integers & directed numbers":
      case "Directed numbers": {
        return [
          [`Calculate −${n} + ${n * 3}.`, `${n * 2}.`],
          [`Calculate ${n} − ${n * 3}.`, `−${n * 2}.`],
          [`Calculate (−${n}) × 2.`, `−${n * 2}.`],
          [`Calculate (−${n}) × (−3).`, `${n * 3}.`]
        ];
      }
      case "Estimation & approximation": {
        const value = n * 123 + 46;
        return [
          [`Round ${value} to the nearest ten.`, `${Math.round(value / 10) * 10}.`],
          [`Round ${value} to the nearest hundred.`, `${Math.round(value / 100) * 100}.`],
          [`Estimate ${n * 19} × 21 by rounding each factor to the nearest ten.`, `${Math.round(n * 19 / 10) * 10 * 20}.`],
          [`Round ${(n + 0.376).toFixed(3)} to 2 decimal places.`, `${(n + 0.376).toFixed(2)}.`]
        ];
      }
      case "Algebraic expressions":
      case "Algebra: simplify & substitute": {
        return [
          [`Simplify ${n}x + 3x.`, `${n + 3}x.`],
          [`Simplify ${n * 2}a − ${n}a + 4.`, `${n}a + 4.`],
          [`Evaluate 2x + 3 when x = ${n}.`, `${2 * n + 3}.`],
          [`Evaluate y² − 1 when y = ${n}.`, `${n * n - 1}.`]
        ];
      }
      case "Simple equations": {
        return [
          [`Solve x + ${n} = ${n * 3}.`, `x = ${n * 2}.`],
          [`Solve y − ${n} = ${n}.`, `y = ${n * 2}.`],
          [`Solve ${n}a = ${n * 5}.`, `a = 5.`],
          [`Solve 2m + ${n} = ${n * 3}.`, `m = ${n}.`]
        ];
      }
      case "Linear equations": {
        return [
          [`Solve x + ${n} = ${n * 4}.`, `x = ${n * 3}.`],
          [`Solve 2y − ${n} = ${n * 3}.`, `y = ${n * 2}.`],
          [`Solve ${n}a = ${n * 7}.`, `a = 7.`],
          [`Solve 3m + 2 = ${n * 3 + 2}.`, `m = ${n}.`]
        ];
      }
      case "Inequalities": {
        return [
          [`Solve x + ${n} > ${n * 3}.`, `x > ${n * 2}.`],
          [`Solve 2y ≤ ${n * 4}.`, `y ≤ ${n * 2}.`],
          [`Solve −x < ${n}.`, `x > −${n}. The inequality reverses when multiplying by −1.`],
          [`Solve 3a − ${n} ≥ ${n * 2}.`, `a ≥ ${n}.`]
        ];
      }
      case "Sets & set notation": {
        return [
          [`If A = {${n}, ${n + 1}, ${n + 2}} and B = {${n + 2}, ${n + 3}}, find A ∩ B.`, `{${n + 2}}.`],
          [`If A = {${n}, ${n + 1}, ${n + 2}} and B = {${n + 2}, ${n + 3}}, find A ∪ B.`, `{${n}, ${n + 1}, ${n + 2}, ${n + 3}}.`],
          [`Is ${n + 1} ∈ {${n}, ${n + 1}, ${n + 2}}?`, `Yes.`],
          [`How many elements are in {${n}, ${n + 1}, ${n + 2}, ${n + 3}}?`, `4.`]
        ];
      }
      case "Sets & Venn diagrams": {
        return [
          [`If n(A) = ${n + 4}, n(B) = ${n + 3}, and n(A ∩ B) = 2, find n(A ∪ B).`, `${2 * n + 5}.`],
          [`In a class of ${n + 10}, ${n + 4} like football. How many do not like football?`, `6.`],
          [`If ${n} elements are in A ∩ B, how many sets do those elements belong to?`, `Both sets, A and B.`],
          [`There are ${n + 5} elements in A only and 3 in A ∩ B. Find n(A).`, `${n + 8}.`]
        ];
      }
      case "Lines & angles": {
        return [
          [`Find the angle supplementary to ${n + 40}°.`, `${140 - n}°.`],
          [`Find the complement of ${n + 20}°.`, `${70 - n}°.`],
          [`Angles around a point are ${n * 20}°, 90°, and x°. Find x.`, `${270 - n * 20}°.`],
          [`Vertically opposite angles are equal. One is ${n * 7}°. Find the opposite angle.`, `${n * 7}°.`]
        ];
      }
      case "Plane shapes & polygons":
      case "Angles, triangles & polygons": {
        const sides = n + 2;
        const polygonNames = {
          4: "quadrilateral",
          5: "pentagon",
          6: "hexagon",
          7: "heptagon",
          8: "octagon",
          9: "nonagon",
          10: "decagon"
        };
        return [
          [`What is a polygon with ${sides} sides called?`, `${polygonNames[sides] || `${sides}-sided polygon`}.`],
          [`Find the sum of the interior angles of a ${sides}-sided polygon.`, `${n * 180}°.`],
          [`Find each interior angle of a regular ${sides}-sided polygon.`, `${(n * 180 / sides).toFixed(2)}°.`],
          [`A triangle has angles ${n * 5}° and 60°. Find the third angle.`, `${120 - n * 5}°.`]
        ];
      }
      case "Perimeter & area": {
        const side = n + 20;
        return [
          [`Find the perimeter of a square with side ${side} cm.`, `${side * 4} cm.`],
          [`Find the area of a square with side ${side} cm.`, `${side * side} cm².`],
          [`Find the area of a rectangle ${n} cm long and 5 cm wide.`, `${n * 5} cm².`],
          [`Find the perimeter of a rectangle ${n} cm long and 5 cm wide.`, `${2 * n + 10} cm.`]
        ];
      }
      case "Bearings & construction": {
        const bearing = n * 10;
        return [
          [`Write a bearing of ${bearing}° using three digits.`, `${String(bearing).padStart(3, "0")}°.`],
          [`How many degrees clockwise from north is bearing ${String(bearing).padStart(3, "0")}°?`, `${bearing}°.`],
          [`What is the opposite bearing to ${String(bearing).padStart(3, "0")}°?`, `${String(bearing + 180).padStart(3, "0")}°.`],
          [`A direction is ${bearing}° anticlockwise from north. Give its clockwise bearing.`, `${360 - bearing}°.`]
        ];
      }
      case "Perimeter, area & circles": {
        const radius = n;
        return [
          [`Find the circumference of a circle with radius ${radius} cm. Use π = 22/7 and round to 2 decimal places.`, `${(44 * radius / 7).toFixed(2)} cm.`],
          [`Find the area of a circle with radius ${radius} cm. Use π = 3.14 and round to 2 decimal places.`, `${(3.14 * radius * radius).toFixed(2)} cm².`],
          [`Find the circumference of a circle with diameter ${radius * 14} cm. Use π = 22/7.`, `${radius * 44} cm.`],
          [`A rectangle is ${radius} cm long and 4 cm wide. Find its area.`, `${radius * 4} cm².`]
        ];
      }
      case "Volume & capacity": {
        const side = n + 10;
        return [
          [`Find the volume of a cube with side ${side} cm.`, `${side ** 3} cm³.`],
          [`Find the volume of a cuboid ${n} cm × 3 cm × 2 cm.`, `${n * 6} cm³.`],
          [`Convert ${n * 1000} cm³ to litres.`, `${n} litres.`],
          [`A cuboid has volume ${n * 12} cm³, length ${n} cm and width 3 cm. Find its height.`, `4 cm.`]
        ];
      }
      case "Collecting & presenting data":
      {
        return [
          [`The data are ${n}, ${n + 1}, ${n}, ${n + 2}, ${n}. What is the frequency of ${n}?`, `3.`],
          [`A pictogram uses 1 symbol for ${n} pupils. How many pupils do ${n + 2} symbols represent?`, `${n * (n + 2)} pupils.`],
          [`A survey records ${n * 3} votes for football and ${n * 2} for netball. How many votes were recorded altogether?`, `${n * 5} votes.`],
          [`A bar chart has frequencies ${n}, ${n + 4}, and ${n + 2}. Which category has the highest frequency?`, `The second category, with frequency ${n + 4}.`]
        ];
      }
      case "Mean, median, mode & range": {
        return [
          [`Find the mean of ${n}, ${n + 2}, and ${n + 4}.`, `${n + 2}.`],
          [`Find the median of ${n}, ${n + 1}, ${n + 2}, ${n + 3}, ${n + 4}.`, `${n + 2}.`],
          [`Find the mode of ${n}, ${n}, ${n + 1}, ${n + 2}.`, `${n}.`],
          [`Find the range of ${n}, ${n + 3}, ${n + 7}.`, `7.`]
        ];
      }
      case "Probability": {
        return [
          [`A spinner has equal sections numbered 1 to ${n + 1}. What is the probability of landing on 1?`, `1/${n + 1}.`],
          [`A bag has ${n} red and ${n * 2} blue counters. Find P(red).`, `1/3.`],
          [`A fair spinner has numbers 1 to ${n + 2}. What is the probability of landing on an even number?`, `${Math.floor((n + 2) / 2)}/${n + 2}.`],
          [`If P(A) = ${n}/20, what is P(not A)?`, `${20 - n}/20 or ${(20 - n) / 20}.`]
        ];
      }
      default:
        return [
          [`In ${topicTitle}, what is the answer to ${n} + ${n}?`, `${n * 2}.`],
          [`In ${topicTitle}, what is the answer to ${n * 3} − ${n}?`, `${n * 2}.`],
          [`In ${topicTitle}, what is the answer to ${n} × 4?`, `${n * 4}.`],
          [`In ${topicTitle}, what is the answer to ${n * 5} ÷ 5?`, `${n}.`]
        ];
    }
  };
  const questions = [];
  for (let n = 2; n < 14; n += 1) questions.push(...buildFour(n));
  return questions;
}

const grid = document.querySelector("#topic-grid");
const searchInput = document.querySelector("#topic-search");
const filterSelect = document.querySelector("#topic-filter");
const dialog = document.querySelector("#lesson-dialog");
const completedKey = "maths-made-easy-completed";
let activeClass = "JSS1";
let completedTopics = new Set(JSON.parse(localStorage.getItem(completedKey) || "[]"));
let selectedTopic = null;
let selectedQuestions = [];
let questionPage = 0;
const questionsPerPage = 10;

function updateProgress() {
  const total = Object.values(curriculum).flat().length;
  document.querySelector("#progress-count").textContent = `${completedTopics.size} of ${total} topics`;
  document.querySelectorAll(".topic-card").forEach((card) => {
    const done = completedTopics.has(card.dataset.topicId);
    card.classList.toggle("is-complete", done);
    const status = card.querySelector(".card-status");
    status.textContent = done ? "✓" : "↗";
    status.setAttribute("aria-label", done ? "Completed" : "Open lesson");
  });
}

function renderTopics() {
  const query = searchInput.value.trim().toLowerCase();
  const category = filterSelect.value;
  const topics = curriculum[activeClass].filter((topic) =>
    (category === "all" || topic.category === category) &&
    `${topic.title} ${topic.intro} ${topic.category}`.toLowerCase().includes(query)
  );
  grid.replaceChildren();
  document.querySelector("#empty-state").hidden = topics.length > 0;
  document.querySelector("#topic-summary").textContent = `${activeClass} curriculum · ${topics.length} ${topics.length === 1 ? "topic" : "topics"}`;

  topics.forEach((topic) => {
    const id = `${activeClass}:${topic.title}`;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "topic-card";
    card.dataset.topicId = id;
    card.setAttribute("aria-label", `Open ${topic.title} lesson`);
    card.innerHTML = `<span class="card-top"><span class="card-number">${topic.icon}</span><span class="card-status"></span></span><span class="card-category"></span><span class="card-title"></span><span class="card-bottom"><span>Lesson + practice</span><span aria-hidden="true">→</span></span>`;
    card.querySelector(".card-category").textContent = topic.category === "Geometry" ? "GEOMETRY & MEASURE" : topic.category.toUpperCase();
    card.querySelector(".card-title").textContent = topic.title;
    card.addEventListener("click", () => openLesson(topic, id));
    grid.append(card);
  });
  updateProgress();
}

function makeWorking(question, answer, topic) {
  const arithmetic = question.match(/(?:Calculate|evaluate)\s+[−-]?[\d.]+\s*[+−×÷]\s*[−-]?[\d.]+/i);
  if (arithmetic) {
    const expression = arithmetic[0].replace(/^(?:Calculate|evaluate)\s+/i, "").replace(/−/g, "-").replace(/×/g, "*").replace(/÷/g, "/");
    const tokens = expression.match(/-?\d+(?:\.\d+)?|[+*/-]/g);
    if (tokens?.length >= 3) {
      let result = Number(tokens[0]);
      const steps = [];
      for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const next = Number(tokens[i + 1]);
        result = operator === "+" ? result + next : operator === "-" ? result - next : operator === "*" ? result * next : result / next;
        steps.push(`${operator} ${next} = ${Number.isInteger(result) ? result : Number(result.toFixed(4))}`);
      }
      return `Start with ${tokens[0]}. Work through the operations: ${steps.join("; ")}.`;
    }
  }

  let match = question.match(/value of (?:the digit )?(\d) in ([\d,]+)/i);
  if (match) {
    const number = match[2].replace(/,/g, "");
    const position = number.length - number.indexOf(match[1]) - 1;
    const value = Number(match[1]) * 10 ** position;
    return `In ${match[2]}, the digit ${match[1]} is in the ${["ones", "tens", "hundreds", "thousands", "ten-thousands", "hundred-thousands"][position] || `${position}th`} place. Its value is ${match[1]} × 10^${position} = ${value.toLocaleString()}.`;
  }

  match = question.match(/Round ([\d,.]+) to the nearest (ten|hundred|thousand)/i);
  if (match) {
    const value = Number(match[1].replace(/,/g, ""));
    const unit = { ten: 10, hundred: 100, thousand: 1000 }[match[2].toLowerCase()];
    const rounded = Math.round(value / unit) * unit;
    return `Look at the digit to the right of the ${match[2]} place. ${value % unit >= unit / 2 ? "It is 5 or more, so round up" : "It is less than 5, so keep the place digit"}: ${match[1]} rounds to ${rounded.toLocaleString()}.`;
  }

  match = question.match(/Round ([\d,.]+) to the nearest thousand/i);
  if (match) {
    const value = Number(match[1].replace(/,/g, ""));
    return `Check the hundreds digit in ${match[1]}. If it is 5 or more, increase the thousands digit by 1; otherwise keep it. Rounded to the nearest thousand: ${Math.round(value / 1000) * 1000}.`;
  }

  match = question.match(/Convert\s+([0-9A-F]+)([₀-₉]+)\s*to base ten/i);
  if (match) {
    const subscript = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9" };
    const digits = [...match[1]].reverse().map(Number);
    const base = Number([...match[2]].map((digit) => subscript[digit]).join(""));
    const terms = digits.map((digit, index) => `${digit} × ${base}^${index} = ${digit * base ** index}`);
    return `Expand using powers of ${base}: ${terms.reverse().join(" + ")}. Add the place values.`;
  }

  match = question.match(/Convert\s+(\d+)₁₀ to base (\d+)/i);
  if (!match) match = question.match(/Convert\s+(\d+)₁₀ to base (\w+)/i);
  if (match) {
    let value = Number(match[1]);
    const base = { two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }[match[2].toLowerCase()] || Number(match[2]);
    const divisions = [];
    while (value > 0) {
      divisions.push(`${value} ÷ ${base} = ${Math.floor(value / base)} remainder ${value % base}`);
      value = Math.floor(value / base);
    }
    return `Divide repeatedly by ${base}: ${divisions.join("; ")}. Read the remainders from bottom to top.`;
  }

  match = question.match(/(?:Calculate|Find)\s+(\d+)\/(\d+)\s*([+−×÷])\s*(\d+)\/(\d+)/i);
  if (match) {
    const [, a, b, operator, c, d] = match;
    if (operator === "×") return `Multiply numerators and denominators: (${a} × ${c})/(${b} × ${d}) = ${Number(a) * Number(c)}/${Number(b) * Number(d)}. Simplify the resulting fraction.`;
    if (operator === "÷") return `Keep the first fraction and multiply by the reciprocal: ${a}/${b} × ${d}/${c} = ${Number(a) * Number(d)}/${Number(b) * Number(c)}. Simplify.`;
    const common = Number(b) * Number(d);
    const left = Number(a) * Number(d);
    const right = Number(c) * Number(b);
    return `Use the common denominator ${common}: ${left}/${common} ${operator} ${right}/${common}. ${operator === "+" ? "Add" : "Subtract"} the numerators.`;
  }

  match = question.match(/Express\s+(\d+)\/(\d+)\s+as a percentage/i);
  if (match) return `Divide the numerator by the denominator, then multiply by 100: (${match[1]} ÷ ${match[2]}) × 100 = ${(Number(match[1]) / Number(match[2]) * 100).toFixed(2)}%.`;

  match = question.match(/(Simplify|Find the HCF of) the ratio (\d+):(\d+)|Simplify(?: the ratio)?\s+(\d+):(\d+)/i);
  if (match) {
    const a = Number(match[2] || match[4]);
    const b = Number(match[3] || match[5]);
    const factor = gcd(a, b);
    return `Find the common factor ${factor}. Divide both terms by it: ${a} ÷ ${factor}:${b} ÷ ${factor}.`;
  }

  match = question.match(/Share (?:₦)?([\d,]+) (?:mangoes|sweets)? in the ratio (\d+):(\d+)/i);
  if (match) {
    const total = Number(match[1].replace(/,/g, ""));
    const first = Number(match[2]);
    const second = Number(match[3]);
    const part = total / (first + second);
    return `Add the ratio parts: ${first} + ${second} = ${first + second}. One part is ${total} ÷ ${first + second} = ${part}. Multiply by each ratio term: ${first} × ${part} and ${second} × ${part}.`;
  }

  match = question.match(/(?:travels|travels a distance of) ([\d.]+) km in ([\d.]+) hours/i);
  if (match) return `Average speed = distance ÷ time. Substitute: ${match[1]} km ÷ ${match[2]} h = ${(Number(match[1]) / Number(match[2])).toFixed(2)} km/h.`;

  match = question.match(/Find the (HCF|LCM) of (\d+) and (\d+)/i);
  if (match) {
    const a = Number(match[2]);
    const b = Number(match[3]);
    if (match[1] === "HCF") {
      const factors = Array.from({ length: Math.min(a, b) }, (_, i) => i + 1).filter((n) => a % n === 0 && b % n === 0);
      return `List the common factors of ${a} and ${b}: ${factors.join(", ")}. The greatest one is the HCF.`;
    }
    const common = Array.from({ length: a * b }, (_, i) => i + 1).find((n) => n % a === 0 && n % b === 0);
    return `List multiples until they match: multiples of ${a} include ${a}, ${2 * a}, ${3 * a}, …; multiples of ${b} include ${b}, ${2 * b}, ${3 * b}, …. The first common multiple is ${common}.`;
  }

  match = question.match(/Is (\d+) a prime number/i);
  if (match) {
    const value = Number(match[1]);
    const divisors = Array.from({ length: Math.max(0, value - 1) }, (_, i) => i + 2).filter((n) => value % n === 0);
    return divisors.length ? `Check divisibility by integers greater than 1 and less than ${value}. It is divisible by ${divisors.join(", ")}, so it has factors other than 1 and itself.` : `Check integers from 2 up to √${value}. None divide it exactly, so its only factors are 1 and ${value}.`;
  }

  match = question.match(/first three positive multiples of (\d+)/i);
  if (match) return `Multiply ${match[1]} by 1, 2, and 3: ${match[1]} × 1, ${match[1]} × 2, and ${match[1]} × 3.`;

  match = question.match(/Simplify\s+(\d+)([a-z])\s*([+−-])\s*(\d+)\s*([+−-])\s*(\d+)([a-z])\s*([+−-])\s*(\d+)/i);
  if (match) {
    const firstCoefficient = Number(match[1]);
    const secondCoefficient = Number(match[6]) * (match[5] === "+" ? 1 : -1);
    const firstConstant = Number(match[4]) * (match[3] === "+" ? 1 : -1);
    const secondConstant = Number(match[9]) * (match[8] === "+" ? 1 : -1);
    const coefficient = firstCoefficient + secondCoefficient;
    const constant = firstConstant + secondConstant;
    return `Group the x-terms: ${match[1]}${match[2]} ${match[5]} ${match[6]}${match[7]} = ${coefficient}${match[2]}. Group the numbers: ${match[3]}${match[4]} ${match[8]} ${match[9]} = ${constant}. Put the two results together.`;
  }

  match = question.match(/Simplify\s+(\d+)([a-z])\s*([+−-])\s*(\d+)\2/i);
  if (match) {
    const first = Number(match[1]);
    const second = Number(match[4]);
    return `These are like terms because both contain ${match[2]}. Combine the coefficients: ${first} ${match[3]} ${second} = ${match[3] === "+" ? first + second : first - second}, then keep the variable.`;
  }

  match = question.match(/Evaluate\s+([a-z])²\s*([+−-])\s*(\d+) when ([a-z]) = (\d+)/i);
  if (match) {
    const value = Number(match[5]);
    const square = value ** 2;
    const constant = Number(match[3]);
    const result = match[2] === "+" ? square + constant : square - constant;
    return `Replace ${match[1]} with ${value}: ${value}² ${match[2]} ${constant}. Square first: ${square} ${match[2]} ${constant} = ${result}.`;
  }

  match = question.match(/Evaluate\s+(\d+)([a-z])²\s*([+−-])\s*([a-z]) when ([a-z]) = (\d+) and ([a-z]) = (\d+)/i);
  if (match) {
    const coefficient = Number(match[1]);
    const firstValue = Number(match[6]);
    const secondValue = Number(match[8]);
    const squaredTerm = coefficient * firstValue ** 2;
    return `Replace x with ${firstValue} and y with ${secondValue}: ${coefficient} × ${firstValue}² − ${secondValue}. Square first, then multiply: ${coefficient} × ${firstValue ** 2} − ${secondValue} = ${squaredTerm} − ${secondValue} = ${squaredTerm - secondValue}.`;
  }

  match = question.match(/Evaluate\s+(\d+)([a-z])\s*([+−-])\s*(\d+) when ([a-z]) = (\d+)/i);
  if (match) {
    const coefficient = Number(match[1]);
    const constant = Number(match[4]);
    const value = Number(match[6]);
    return `Substitute ${match[6]} = ${value}: ${coefficient}(${value}) ${match[3]} ${constant}. Multiply first, then ${match[3] === "+" ? "add" : "subtract"}: ${coefficient * value} ${match[3]} ${constant}.`;
  }

  match = question.match(/What is the sum of the interior angles of a triangle/i);
  if (match) return `A triangle has 3 interior angles. Use (3 − 2) × 180° = 180°.`;

  match = question.match(/Find the third angle in a triangle with angles ([\d.]+)° and ([\d.]+)°/i);
  if (match) return `Triangle angles add to 180°. Add the known angles: ${match[1]}° + ${match[2]}° = ${Number(match[1]) + Number(match[2])}°. Subtract from 180°: 180° − ${Number(match[1]) + Number(match[2])}°.`;

  match = question.match(/Find the interior angle sum of a (pentagon|hexagon|heptagon|octagon|nonagon|decagon)/i);
  if (match) {
    const sides = { pentagon: 5, hexagon: 6, heptagon: 7, octagon: 8, nonagon: 9, decagon: 10 }[match[1].toLowerCase()];
    return `Use (n − 2) × 180°. For ${sides} sides: (${sides} − 2) × 180° = ${(sides - 2) * 180}°.`;
  }

  match = question.match(/Find the mode of ([\d,\s]+)/i);
  if (match) return `Count how often each value appears in ${match[1].trim()}. The value with the greatest frequency is the mode.`;

  match = question.match(/A bag has (\d+) red and (\d+) blue (?:balls|counters)\. What is P\((red|blue)\)/i);
  if (!match) match = question.match(/A bag has (\d+) red and (\d+) blue counters\. Find P\((red|blue)\)/i);
  if (match) {
    const red = Number(match[1]);
    const blue = Number(match[2]);
    const favorable = match[3].toLowerCase() === "red" ? red : blue;
    const total = red + blue;
    const factor = gcd(favorable, total);
    return `Count the favourable counters and all counters: ${favorable} out of ${red} + ${blue} = ${total}. Probability = ${favorable}/${total}${factor > 1 ? ` = ${favorable / factor}/${total / factor}` : ""}.`;
  }

  match = question.match(/If P\(A\) = (\d+)\/(\d+), what is P\(not A\)/i);
  if (match) return `An event and its complement have probabilities that add to 1. Subtract: 1 − ${match[1]}/${match[2]} = ${Number(match[2]) - Number(match[1])}/${match[2]}.`;

  match = question.match(/What is the bearing for due (north|east|south|west)/i);
  if (match) {
    const bearings = { north: "000°", east: "090°", south: "180°", west: "270°" };
    return `Bearings start at north and are measured clockwise. Due ${match[1].toLowerCase()} is ${bearings[match[1].toLowerCase()]}.`;
  }

  match = question.match(/How many degrees clockwise from north is bearing (\d{3})°?/i);
  if (match) return `A bearing is measured clockwise from north. The bearing is ${match[1]}°, so the clockwise turn from north is ${Number(match[1])}°.`;

  match = question.match(/What is the opposite bearing to (\d{3})°?/i);
  if (match) {
    const opposite = (Number(match[1]) + 180) % 360;
    return `Opposite directions are 180° apart. Add 180° to ${match[1]}°: ${Number(match[1])}° + 180° = ${opposite}°.`;
  }

  match = question.match(/A direction is (\d+)° anticlockwise from north/i);
  if (match) return `A full turn is 360°. To change anticlockwise to clockwise, subtract from 360°: 360° − ${match[1]}° = ${360 - Number(match[1])}°.`;

  match = question.match(/Vertically opposite angles are equal\. One is (\d+)°\. Find the opposite angle/i);
  if (match) return `Vertically opposite angles are always equal. The opposite angle has the same measure: ${match[1]}°.`;

  match = question.match(/How many sides does a polygon called an? (octagon|heptagon|pentagon|hexagon|nonagon|decagon) have/i);
  if (match) {
    const sides = { pentagon: 5, hexagon: 6, heptagon: 7, octagon: 8, nonagon: 9, decagon: 10 }[match[1].toLowerCase()];
    return `Remember the polygon name: a ${match[1].toLowerCase()} has ${sides} sides.`;
  }

  match = question.match(/How many sides does an? (octagon|heptagon|pentagon|hexagon|nonagon|decagon) have/i);
  if (match) {
    const sides = { pentagon: 5, hexagon: 6, heptagon: 7, octagon: 8, nonagon: 9, decagon: 10 }[match[1].toLowerCase()];
    return `A ${match[1].toLowerCase()} has ${sides} sides.`;
  }

  match = question.match(/Share ₦([\d,]+) in the ratio (\d+):(\d+)/i);
  if (match) {
    const total = Number(match[1].replace(/,/g, ""));
    const first = Number(match[2]);
    const second = Number(match[3]);
    const onePart = total / (first + second);
    return `Add the ratio parts: ${first} + ${second} = ${first + second}. Find one part: ₦${total} ÷ ${first + second} = ₦${onePart}. Multiply by ${first} and ${second} to find the two shares.`;
  }

  match = question.match(/Simplify (\d+)\^(\d+) × (\d+)² using indices/i);
  if (match) return `The bases are the same, so add the powers: ${match[1]}^${match[2]} × ${match[1]}² = ${match[1]}^(${match[2]} + 2) = ${match[1]}^${Number(match[2]) + 2}.`;

  match = question.match(/Write (\d+)² as repeated multiplication/i);
  if (match) return `The small 2 means multiply the number by itself: ${match[1]} × ${match[1]} = ${Number(match[1]) ** 2}.`;

  match = question.match(/A triangle has angles ([\d.]+)° and ([\d.]+)°\. Find the third angle/i);
  if (match) {
    const knownTotal = Number(match[1]) + Number(match[2]);
    return `The three angles in a triangle add to 180°. Add the two known angles: ${match[1]}° + ${match[2]}° = ${knownTotal}°. Subtract from 180°: 180° − ${knownTotal}° = ${180 - knownTotal}°.`;
  }

  match = question.match(/Calculate\s+(\d+)¼\s*−\s*(\d+)½/i);
  if (match) {
    const first = Number(match[1]) * 4 + 1;
    const second = Number(match[2]) * 2 + 1;
    return `Change the mixed numbers to fractions: ${match[1]}¼ = ${first}/4 and ${match[2]}½ = ${second}/2 = ${second * 2}/4. Subtract: ${first}/4 − ${second * 2}/4 = ${first - second * 2}/4.`;
  }

  match = question.match(/Round ([\d,]+) to (\d+) significant figures/i);
  if (match) {
    const value = Number(match[1].replace(/,/g, ""));
    const figures = Number(match[2]);
    const rounded = Number(value.toPrecision(figures));
    return `Keep the first ${figures} significant digits: ${match[1]}. Look at the next digit to decide whether to round up. The rounded value is ${rounded.toLocaleString()}.`;
  }

  match = question.match(/Write ([\d,]+) in standard form/i);
  if (match) {
    const value = Number(match[1].replace(/,/g, ""));
    const exponent = Math.floor(Math.log10(value));
    const coefficient = value / 10 ** exponent;
    return `Move the decimal point until one non-zero digit is before it: ${match[1]} = ${coefficient} × 10^${exponent}.`;
  }

  match = question.match(/Write (\d+) × 10⁴ as an ordinary number/i);
  if (match) return `The power 4 means move the decimal point 4 places to the right: ${match[1]} × 10,000 = ${Number(match[1]) * 10000}.`;

  match = question.match(/Simplify (\d+)\^(\d+) × (\d+)\^(\d+) using indices/i);
  if (match && match[1] === match[3]) return `The bases are the same, so add the powers: ${match[1]}^${match[2]} × ${match[1]}^${match[4]} = ${match[1]}^(${match[2]} + ${match[4]}) = ${match[1]}^${Number(match[2]) + Number(match[4])}.`;

  match = question.match(/Expand (\d+)\(([a-z])\s*\+\s*(\d+)\)/i);
  if (match) return `Multiply ${match[1]} by each term inside the brackets: ${match[1]} × ${match[2]} = ${match[1]}${match[2]}, and ${match[1]} × ${match[3]} = ${Number(match[1]) * Number(match[3])}. Put the terms together.`;

  match = question.match(/Solve\s+−(\d+)([a-z])\s*<\s*(\d+)/i);
  if (match) return `Divide both sides by −${match[1]} to get ${match[2]} < ${Number(match[3]) / -Number(match[1])}. Because we divided by a negative number, reverse the sign: ${match[2]} > ${Number(match[3]) / -Number(match[1])}.`;

  match = question.match(/Solve\s+−([a-z])\s*<\s*(\d+)/i);
  if (match) return `Divide both sides by −1: ${match[1]} > −${match[2]}. The inequality sign flips when dividing by a negative number.`;

  match = question.match(/Solve\s+(\d+)([a-z])\s*−\s*(\d+)\s*≥\s*(\d+)/i);
  if (match) {
    const total = Number(match[4]) + Number(match[3]);
    return `Add ${match[3]} to both sides: ${match[1]}${match[2]} ≥ ${total}. Divide both sides by ${match[1]}: ${match[2]} ≥ ${total / Number(match[1])}.`;
  }

  match = question.match(/Solve\s+(\d+)([a-z])\s*<\s*(\d+)/i);
  if (match) return `Divide both sides by ${match[1]} to get ${match[2]} < ${Number(match[3]) / Number(match[1])}.`;

  match = question.match(/If n\(A\) = (\d+), n\(B\) = (\d+), and n\(A ∩ B\) = (\d+), find n\(A ∪ B\)/i);
  if (!match) match = question.match(/If n\(A\) = (\d+), n\(B\) = (\d+) and n\(A ∩ B\) = (\d+), find n\(A ∪ B\)/i);
  if (match) {
    const a = Number(match[1]);
    const b = Number(match[2]);
    const overlap = Number(match[3]);
    return `Add the sizes of both sets: ${a} + ${b} = ${a + b}. The shared ${overlap} elements were counted twice, so subtract them once: ${a + b} − ${overlap} = ${a + b - overlap}.`;
  }

  match = question.match(/In a class of (\d+), (\d+) like football\. How many do not like football/i);
  if (match) return `Subtract the pupils who like football from the class total: ${match[1]} − ${match[2]} = ${Number(match[1]) - Number(match[2])}.`;

  match = question.match(/There are (\d+) elements in A only and (\d+) in A ∩ B\. Find n\(A\)/i);
  if (match) return `Set A includes the elements in A only and the shared elements. Add them: ${match[1]} + ${match[2]} = ${Number(match[1]) + Number(match[2])}.`;

  match = question.match(/If (\d+) elements are in A ∩ B, how many sets do these elements belong to/i);
  if (match) return `The intersection A ∩ B contains elements shared by both sets. So each of these elements belongs to A and B: 2 sets.`;

  match = question.match(/A rectangle is ([\d.]+) cm long and ([\d.]+) cm wide\. Find its area/i);
  if (match) return `Use area = length × width. Put in the measurements: ${match[1]} × ${match[2]} = ${Number(match[1]) * Number(match[2])} cm².`;

  match = question.match(/Write a bearing of (\d+)° using three digits/i);
  if (match) return `Bearings are written as three digits. Add a leading zero if needed: ${match[1]}° becomes ${String(Number(match[1])).padStart(3, "0")}°.`;

  match = question.match(/An item sells for ₦([\d,]+) at a (\d+)% profit\. Find its cost price/i);
  if (match) {
    const selling = Number(match[1].replace(/,/g, ""));
    const multiplier = 1 + Number(match[2]) / 100;
    return `Selling price = cost price × (1 + profit rate). Divide by ${multiplier}: ₦${selling} ÷ ${multiplier}.`;
  }

  match = question.match(/Solve\s+(\d+)\(([a-z])\s*([+−-])\s*(\d+)\)\s*=\s*(-?\d+)/i);
  if (match) return `First divide both sides by ${match[1]}: ${match[2]} ${match[3]} ${match[4]} = ${Number(match[5]) / Number(match[1])}. Then undo the ${match[3] === "+" ? "addition" : "subtraction"} inside the brackets to isolate ${match[2]}.`;

  match = question.match(/Simplify\s+(\d+)([a-z])\s*([+−-])\s*(\d+)\2\s*([+−-])\s*(\d+)\s*([+−-])\s*(\d+)/i);
  if (match) {
    const variableTotal = Number(match[1]) + (match[3] === "+" ? Number(match[4]) : -Number(match[4]));
    const constantTotal = match[6] === "+" ? Number(match[8]) - Number(match[6]) : -Number(match[8]) - Number(match[6]);
    return `Collect like terms: ${match[1]}${match[2]} ${match[3]} ${match[4]}${match[2]} = ${variableTotal}${match[2]}. Combine the constants ${match[6]} ${match[7]} ${match[8]}.`;
  }

  match = question.match(/Evaluate\s+(\d+)([a-z])²?\s*([+−-])\s*(\d+) when ([a-z]) = (\d+)/i);
  if (match) {
    const coefficient = Number(match[1]);
    const value = Number(match[6]);
    const first = match[0].includes("²") ? coefficient * value ** 2 : coefficient * value;
    const constant = Number(match[4]);
    const result = match[3] === "+" ? first + constant : first - constant;
    return `Substitute ${match[5]} = ${value}: ${coefficient} × ${match[5]}${match[0].includes("²") ? "²" : ""} ${match[3]} ${constant} = ${coefficient} × ${value}${match[0].includes("²") ? "²" : ""} ${match[3]} ${constant} = ${result}.`;
  }

  match = question.match(/Evaluate (\d+)([a-z])²\s*([+−-]) ([a-z]) when ([a-z]) = (\d+) and ([a-z]) = (\d+)/i);
  if (match) {
    const valueA = Number(match[6]);
    const valueB = Number(match[8]);
    return `Substitute ${match[5]} = ${valueA} and ${match[7]} = ${valueB}: ${match[1]} × ${valueA}² ${match[3]} ${valueB}. Square first, then multiply and subtract: ${Number(match[1]) * valueA ** 2} ${match[3]} ${valueB}.`;
  }

  match = question.match(/Find (\d+)([a-z])\s*([+−-])\s*(\d+) when ([a-z]) = (\d+)/i);
  if (match) {
    const first = Number(match[1]) * Number(match[6]);
    const second = Number(match[4]);
    const result = match[3] === "+" ? first + second : first - second;
    return `Substitute ${match[5]} = ${match[6]}: ${match[1]} × ${match[6]} ${match[3]} ${second} = ${first} ${match[3]} ${second} = ${result}.`;
  }

  match = question.match(/Simplify\s+([\d]+[a-z]\s*[+−-]\s*\d+\s*[+−-]\s*\d+[a-z]\s*[+−-]\s*\d+)/i);
  if (match) {
    const expression = match[1];
    const terms = expression.match(/[+−-]?\s*\d*[a-z]|[+−-]?\s*\d+/g) || [];
    const variableTerms = terms.filter((term) => /[a-z]/i.test(term));
    const constants = terms.filter((term) => !/[a-z]/i.test(term));
    const coefficientTotal = variableTerms.reduce((sum, term) => {
      const sign = term.includes("−") || /^-\s*/.test(term.trim()) ? -1 : 1;
      const coefficient = Number((term.match(/\d+/) || ["1"])[0]);
      return sum + sign * coefficient;
    }, 0);
    const constantTotal = constants.reduce((sum, term) => sum + Number(term.replace("−", "-").replace(/\s/g, "")), 0);
    const variable = (variableTerms[0].match(/[a-z]/i) || ["x"])[0];
    return `Group the like terms in ${expression}: add the coefficients of ${variable} to get ${coefficientTotal}${variable}, and combine the constants to get ${constantTotal}.`;
  }

  match = question.match(/Find the angle supplementary to (\d+)°/i);
  if (match) return `Angles on a straight line total 180°. Subtract the given angle: 180° − ${match[1]}° = ${180 - Number(match[1])}°.`;

  match = question.match(/Angles around a point are (\d+)°, 90°, and x°\. Find x/i);
  if (match) return `Angles around a point total 360°. Subtract the known angles: 360° − ${match[1]}° − 90° = ${270 - Number(match[1])}°.`;

  match = question.match(/Find the area of a rectangle ([\d.]+) cm by ([\d.]+) cm/i);
  if (match) return `Area = length × width. Substitute: ${match[1]} × ${match[2]} = ${Number(match[1]) * Number(match[2])} cm².`;

  match = question.match(/A fair spinner has numbers 1 to (\d+)\. What is the probability of landing on an even number/i);
  if (match) {
    const total = Number(match[1]);
    const favorable = Math.floor(total / 2);
    const factor = gcd(favorable, total);
    return `Count the even numbers from 1 to ${total}: there are ${favorable} favourable outcomes out of ${total}. Probability = ${favorable}/${total}${factor > 1 ? ` = ${favorable / factor}/${total / factor}` : ""}.`;
  }

  match = question.match(/An event is certain/i);
  if (match) return `A certain event always occurs. Probability = favourable outcomes ÷ total outcomes = 1.`;

  match = question.match(/What is the probability of getting a (\d+) on a fair six-sided die/i);
  if (match) return `There is 1 favourable face out of 6 equally likely faces. Probability = 1 ÷ 6 = 1/6.`;

  match = question.match(/Find the bearing for due (north|east|south|west)/i);
  if (match) {
    const bearings = { north: "000°", east: "090°", south: "180°", west: "270°" };
    return `Bearings start at north and are measured clockwise. Due ${match[1].toLowerCase()} is ${bearings[match[1].toLowerCase()]}.`;
  }

  match = question.match(/A bearing is (\d+)°.*clockwise from north/i);
  if (match) return `Bearings are measured clockwise from north. Write the angle as a three-digit bearing: ${String(Number(match[1])).padStart(3, "0")}°.`;

  match = question.match(/Find the circumference of a circle with radius ([\d.]+) cm.*π = ([\d.]+)/i);
  if (match) return `Circumference = 2πr. Substitute: 2 × ${match[2]} × ${match[1]} = ${(2 * Number(match[2]) * Number(match[1])).toFixed(2)} cm.`;

  match = question.match(/Find the area of a circle with radius ([\d.]+) cm.*π = ([\d.]+)/i);
  if (match) return `Area = πr². Substitute: ${match[2]} × ${match[1]}² = ${(Number(match[2]) * Number(match[1]) ** 2).toFixed(2)} cm².`;

  match = question.match(/Find the area of a rectangle ([\d.]+) m by ([\d.]+) m/i);
  if (match) return `Area = length × width. Substitute: ${match[1]} × ${match[2]} = ${Number(match[1]) * Number(match[2])} m².`;

  match = question.match(/Find the perimeter of a rectangle ([\d.]+) cm long and ([\d.]+) cm wide/i);
  if (match) return `A rectangle has two lengths and two widths. Perimeter = 2 × (${match[1]} + ${match[2]}) = ${2 * (Number(match[1]) + Number(match[2]))} cm.`;

  match = question.match(/A cuboid has volume ([\d.]+) cm³, length ([\d.]+) cm and width ([\d.]+) cm/i);
  if (match) {
    const height = Number(match[1]) / (Number(match[2]) * Number(match[3]));
    return `Volume = length × width × height. Rearrange: height = volume ÷ (length × width) = ${match[1]} ÷ (${match[2]} × ${match[3]}) = ${height} cm.`;
  }

  match = question.match(/A survey records (\d+) votes for football and (\d+) for netball/i);
  if (match) return `Add the votes from both categories: ${match[1]} + ${match[2]} = ${Number(match[1]) + Number(match[2])} votes altogether.`;

  match = question.match(/The data are ([\d,\s]+)\. What is the frequency of (\d+)/i);
  if (match) {
    const values = match[1].split(",").map((value) => value.trim());
    const frequency = values.filter((value) => value === match[2]).length;
    return `Count each occurrence of ${match[2]} in the data: ${values.join(", ")}. It appears ${frequency} times.`;
  }

  match = question.match(/A pictogram uses 1 symbol for (\d+) pupils\. How many pupils do (\d+) symbols represent/i);
  if (match) return `Multiply the number represented by one symbol by the number of symbols: ${match[1]} × ${match[2]} = ${Number(match[1]) * Number(match[2])} pupils.`;

  match = question.match(/A bar chart has frequencies ([\d,]+), ([\d,]+), and ([\d,]+)/i);
  if (match) return `Compare the frequencies: ${match[1]}, ${match[2]}, and ${match[3]}. The largest frequency is ${Math.max(Number(match[1]), Number(match[2]), Number(match[3]))}.`;

  match = question.match(/How many elements are in \{([^}]+)\}/i);
  if (match) {
    const elements = match[1].split(",").map((element) => element.trim());
    return `Count the distinct elements inside the braces: ${elements.join(", ")}. There are ${new Set(elements).size} elements.`;
  }

  match = question.match(/Find the third angle in a triangle with angles ([\d.]+)° and ([\d.]+)°/i);
  if (match) {
    const knownTotal = Number(match[1]) + Number(match[2]);
    return `Triangle angles add to 180°. Add the known angles: ${match[1]}° + ${match[2]}° = ${knownTotal}°. Subtract from 180°: 180° − ${knownTotal}° = ${180 - knownTotal}°.`;
  }

  match = question.match(/How many sides does a polygon called a (\w+) have/i);
  if (match) {
    const sides = { triangle: 3, quadrilateral: 4, pentagon: 5, hexagon: 6, heptagon: 7, octagon: 8, nonagon: 9, decagon: 10 }[match[1].toLowerCase()];
    if (sides) return `Recall the polygon names: a ${match[1].toLowerCase()} has ${sides} sides.`;
  }

  match = question.match(/What is a polygon with (\d+) sides called/i);
  if (match) {
    const names = { 3: "triangle", 4: "quadrilateral", 5: "pentagon", 6: "hexagon", 7: "heptagon", 8: "octagon", 9: "nonagon", 10: "decagon" };
    return `A polygon with ${match[1]} sides is named by its number of sides: ${names[Number(match[1])] || `${match[1]}-sided polygon`}.`;
  }

  match = question.match(/Find each interior angle of a regular (\d+)-sided polygon/i);
  if (match) {
    const sides = Number(match[1]);
    const total = (sides - 2) * 180;
    return `First find the interior-angle sum: (${sides} − 2) × 180° = ${total}°. Divide by ${sides} equal angles: ${total}° ÷ ${sides}.`;
  }

  match = question.match(/Two angles on a straight line: one is (\d+)°\. Find the other/i);
  if (match) return `Angles on a straight line total 180°. Subtract the known angle: 180° − ${match[1]}° = ${180 - Number(match[1])}°.`;

  match = question.match(/Find the (mean|median|mode|range) of ([\d,\s]+)/i);
  if (match) {
    const values = match[2].split(",").map((value) => Number(value.trim())).sort((a, b) => a - b);
    if (match[1] === "mean") return `Add the values (${values.join(" + ")}) and divide the total by ${values.length}.`;
    if (match[1] === "median") return `The values are already in order: ${values.join(", ")}. With ${values.length} values, choose the middle one.`;
    if (match[1] === "range") return `Subtract the smallest value from the largest: ${values[values.length - 1]} − ${values[0]} = ${values[values.length - 1] - values[0]}.`;
  }

  match = question.match(/What is the probability of getting a (\d+) on a fair six-sided die/i);
  if (match) return `There is 1 favourable face and 6 equally likely faces. Probability = favourable outcomes ÷ total outcomes = 1 ÷ 6.`;

  match = question.match(/probability of landing on (\d+)/i);
  if (match) {
    const total = Number(question.match(/numbered 1 to (\d+)/i)?.[1]);
    if (total) return `There is 1 favourable section out of ${total} equal sections. Probability = 1/${total}.`;
  }

  match = question.match(/What is (\d+) more than (\d+)/i);
  if (match) return `Add the amount to the starting number: ${match[2]} + ${match[1]} = ${Number(match[2]) + Number(match[1])}.`;

  match = question.match(/Estimate ([\d.]+) ÷ ([\d.]+) using 1 significant figure/i);
  if (match) {
    const first = Number(match[1]);
    const second = Number(match[2]);
    const roundedFirst = Number(first.toPrecision(1));
    const roundedSecond = Number(second.toPrecision(1));
    return `Round each number to 1 significant figure: ${first} ≈ ${roundedFirst} and ${second} ≈ ${roundedSecond}. Estimate ${roundedFirst} ÷ ${roundedSecond} = ${roundedFirst / roundedSecond}.`;
  }

  match = question.match(/Estimate ([\d.]+) × ([\d.]+) by rounding each factor to the nearest ten/i);
  if (match) {
    const first = Math.round(Number(match[1]) / 10) * 10;
    const second = Math.round(Number(match[2]) / 10) * 10;
    return `Round each factor to the nearest ten: ${match[1]} ≈ ${first} and ${match[2]} ≈ ${second}. Multiply: ${first} × ${second} = ${first * second}.`;
  }

  match = question.match(/Arrange ([\d,]+), ([\d,]+), and ([\d,]+) in ascending order/i);
  if (match) {
    const values = match.slice(1).map(Number);
    return `Compare the hundreds, tens, and ones, then write the values from smallest to largest: ${values.sort((a, b) => a - b).join(", ")}.`;
  }

  match = question.match(/(?:Calculate|Find)\s+\(?([−-]?\d+)\)?\s*([+−×÷])\s*\(?([−-]?\d+)\)?/i);
  if (match) {
    const left = Number(match[1].replace("−", "-"));
    const right = Number(match[3].replace("−", "-"));
    const operator = match[2];
    const result = operator === "+" ? left + right : operator === "−" ? left - right : operator === "×" ? left * right : left / right;
    return `Keep track of the signs, then ${operator === "+" ? "add" : operator === "−" ? "subtract" : operator === "×" ? "multiply" : "divide"}: ${left} ${operator} ${right} = ${result}.`;
  }

  match = question.match(/Write (0\.\d+) as a fraction in simplest form/i);
  if (match) {
    const digits = match[1].split(".")[1];
    const denominator = 10 ** digits.length;
    const numerator = Number(digits);
    const factor = gcd(numerator, denominator);
    return `Write the decimal digits over ${denominator}: ${numerator}/${denominator}. Divide top and bottom by ${factor} to simplify.`;
  }

  match = question.match(/What percentage of ([\d,]+) is ([\d,]+)/i);
  if (match) return `Percentage = (part ÷ whole) × 100. Substitute: (${match[2]} ÷ ${match[1]}) × 100 = ${(Number(match[2].replace(/,/g, "")) / Number(match[1].replace(/,/g, "")) * 100).toFixed(2)}%.`;

  match = question.match(/A trader buys goods for ₦([\d,]+) and makes a (\d+)% profit/i);
  if (match) {
    const cost = Number(match[1].replace(/,/g, ""));
    const percent = Number(match[2]);
    return `Profit = ${percent}% of ₦${cost}: ${percent}/100 × ${cost} = ₦${cost * percent / 100}. Add the profit to the cost price.`;
  }

  match = question.match(/An item costs ₦([\d,]+) and sells for ₦([\d,]+)\. Find the percentage profit/i);
  if (match) {
    const cost = Number(match[1].replace(/,/g, ""));
    const selling = Number(match[2].replace(/,/g, ""));
    return `Profit = selling price − cost price = ₦${selling} − ₦${cost} = ₦${selling - cost}. Percentage profit = (profit ÷ cost price) × 100 = (${selling - cost} ÷ ${cost}) × 100.`;
  }

  match = question.match(/An item costs ₦([\d,]+) and sells for ₦([\d,]+)\. Find the profit/i);
  if (match) return `Profit = selling price − cost price. Subtract: ₦${match[2]} − ₦${match[1]} = ₦${Number(match[2].replace(/,/g, "")) - Number(match[1].replace(/,/g, ""))}.`;

  match = question.match(/An item costs ₦([\d,]+) and sells for ₦([\d,]+)\. Find the percentage loss/i);
  if (match) {
    const cost = Number(match[1].replace(/,/g, ""));
    const selling = Number(match[2].replace(/,/g, ""));
    const loss = cost - selling;
    return `Loss = cost price − selling price = ₦${cost} − ₦${selling} = ₦${loss}. Percentage loss = (loss ÷ cost price) × 100 = (${loss} ÷ ${cost}) × 100.`;
  }

  match = question.match(/A ₦([\d,]+) item is sold at a (\d+)% loss/i);
  if (match) {
    const cost = Number(match[1].replace(/,/g, ""));
    const loss = Number(match[2]);
    return `Loss = ${loss}% of ₦${cost} = ${loss}/100 × ${cost} = ₦${cost * loss / 100}. Subtract the loss from the cost price.`;
  }

  match = question.match(/If 2 exercise books cost ₦([\d,]+), what do 6 books cost/i);
  if (match) {
    const cost = Number(match[1].replace(/,/g, ""));
    return `Find the price of one book: ₦${cost} ÷ 2 = ₦${cost / 2}. Multiply by 6 books: ₦${cost / 2} × 6 = ₦${cost * 3}.`;
  }

  match = question.match(/A map scale is 1 cm : ([\d.]+) km\. What real distance is ([\d.]+) cm/i);
  if (match) return `Each centimetre represents ${match[1]} km. Multiply by the map distance: ${match[1]} × ${match[2]} = ${Number(match[1]) * Number(match[2])} km.`;

  match = question.match(/Write ([\d.]+) in standard form/i);
  if (match) {
    const value = Number(match[1]);
    const exponent = Math.floor(Math.log10(Math.abs(value)));
    const coefficient = value / 10 ** exponent;
    return `Move the decimal point until one non-zero digit remains before it: ${value} = ${coefficient} × 10^${exponent}.`;
  }

  match = question.match(/Write ([\d.]+) × 10([⁻-]?\d+) as an ordinary number/i);
  if (match) return `The power is ${match[2]}. Move the decimal point ${Math.abs(Number(match[2]))} place${Math.abs(Number(match[2])) === 1 ? "" : "s"} ${Number(match[2]) < 0 ? "left" : "right"}: ${match[1]} × 10^${match[2]}.`;

  match = question.match(/Evaluate (\d+)⁴/i);
  if (match) return `An index of 4 means multiply the base by itself four times: ${match[1]} × ${match[1]} × ${match[1]} × ${match[1]} = ${Number(match[1]) ** 4}.`;

  match = question.match(/Simplify (\d+)⁶ ÷ (\d+)²/i);
  if (match) return `When dividing powers with the same base, subtract the indices: ${match[1]}^(6 − 2) = ${match[1]}^4 = ${Number(match[1]) ** 4}.`;

  match = question.match(/Evaluate (\d+)\^(\d+)/i);
  if (match) return `An exponent of ${match[2]} means multiply ${match[1]} by itself ${match[2]} times: ${Array(Number(match[2])).fill(match[1]).join(" × ")} = ${Number(match[1]) ** Number(match[2])}.`;

  match = question.match(/Simplify (\d+)\^(\d+) × \d+\^(\d+) using indices/i);
  if (match) return `For multiplication with the same base, add the exponents: ${match[1]}^(${match[2]} + ${match[3]}) = ${match[1]}^${Number(match[2]) + Number(match[3])}.`;

  match = question.match(/Simplify (\d+)\^(\d+) ÷ \d+\^(\d+)/i);
  if (match) return `For division with the same base, subtract the exponents: ${match[1]}^(${match[2]} − ${match[3]}) = ${match[1]}^${Number(match[2]) - Number(match[3])}.`;

  match = question.match(/Expand (\d+)\((\d+)([a-z])\s*([+−-])\s*(\d+)\)/i);
  if (match) {
    const outside = Number(match[1]);
    const coefficient = Number(match[2]);
    const constant = Number(match[5]);
    return `Multiply each term inside the brackets by ${outside}: ${outside} × ${coefficient}${match[3]} ${match[4]} ${outside} × ${constant} = ${outside * coefficient}${match[3]} ${match[4]} ${outside * constant}.`;
  }

  match = question.match(/Factorise (\d+)([a-z]) \+ (\d+)/i);
  if (match) {
    const factor = gcd(Number(match[1]), Number(match[3]));
    return `The highest common factor of ${match[1]} and ${match[3]} is ${factor}. Take it outside the brackets and divide both terms by ${factor}.`;
  }

  match = question.match(/Solve\s+(-?\d+)([a-z])\s*([<≥≤>])\s*(-?\d+)/i);
  if (match) {
    const coefficient = Number(match[1]);
    const variable = match[2];
    const right = Number(match[4]);
    const result = right / coefficient;
    return `Divide both sides by ${coefficient}. ${coefficient < 0 ? "Because you divide by a negative number, reverse the inequality sign. " : ""}This isolates ${variable}: ${right} ÷ ${coefficient} = ${result}.`;
  }

  match = question.match(/Find n\(A ∪ B\).*n\(A\) = (\d+).*n\(B\) = (\d+).*n\(A ∩ B\) = (\d+)/i);
  if (match) {
    const a = Number(match[1]);
    const b = Number(match[2]);
    const overlap = Number(match[3]);
    return `Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Substitute: ${a} + ${b} − ${overlap} = ${a + b - overlap}.`;
  }

  match = question.match(/If ([A-Z]) = \{([^}]+)\} and ([A-Z]) = \{([^}]+)\}, find ([A-Z]) ([∩∪])/i);
  if (match) {
    const firstSet = match[2].split(",").map((item) => item.trim());
    const secondSet = match[4].split(",").map((item) => item.trim());
    const operation = match[6];
    const result = operation === "∩" ? firstSet.filter((item) => secondSet.includes(item)) : [...new Set([...firstSet, ...secondSet])];
    return `${operation === "∩" ? "Keep only elements that appear in both sets" : "Combine all elements and list each only once"}: ${result.join(", ")}.`;
  }

  match = question.match(/Is (\d+) ∈ \{([^}]+)\}/i);
  if (match) return `Check whether ${match[1]} appears in the set {${match[2]}}. ${match[2].split(",").map((value) => value.trim()).includes(match[1]) ? "It does, so it belongs to the set." : "It does not, so it is not an element of the set."}`;

  match = question.match(/What is the bearing for due (north|east|south|west)/i);
  if (match) {
    const bearings = { north: "000°", east: "090°", south: "180°", west: "270°" };
    return `Bearings start at north and are measured clockwise. Due ${match[1].toLowerCase()} is ${bearings[match[1].toLowerCase()]}.`;
  }

  match = question.match(/A bearing is (\d+)°.*clockwise from north/i);
  if (match) return `Bearings are measured clockwise from north. The bearing is already given, so write it as a three-digit angle: ${String(Number(match[1])).padStart(3, "0")}°.`;

  match = question.match(/Find the circumference of a circle with radius ([\d.]+) cm.*π = ([\d.]+)/i);
  if (match) return `Circumference = 2πr. Substitute: 2 × ${match[2]} × ${match[1]} = ${(2 * Number(match[2]) * Number(match[1])).toFixed(2)} cm.`;

  match = question.match(/Find the area of a circle with radius ([\d.]+) cm.*π = ([\d.]+)/i);
  if (match) return `Area = πr². Substitute: ${match[2]} × ${match[1]}² = ${(Number(match[2]) * Number(match[1]) ** 2).toFixed(2)} cm².`;

  match = question.match(/Find the mode of ([\d,\s]+)/i);
  if (match) return `Count how often each value appears in ${match[1].trim()}. The value with the greatest frequency is the mode.`;

  match = question.match(/The data are ([\d,\s]+)\. What is the frequency of (\d+)/i);
  if (match) {
    const values = match[1].split(",").map((value) => value.trim());
    const frequency = values.filter((value) => value === match[2]).length;
    return `Count each occurrence of ${match[2]} in the data: ${values.join(", ")}. It appears ${frequency} times.`;
  }

  match = question.match(/A pictogram uses 1 symbol for (\d+) pupils\. How many pupils do (\d+) symbols represent/i);
  if (match) return `Multiply the number represented by one symbol by the number of symbols: ${match[1]} × ${match[2]} = ${Number(match[1]) * Number(match[2])} pupils.`;

  match = question.match(/A bar chart has frequencies ([\d,]+), ([\d,]+), and ([\d,]+)/i);
  if (match) return `Compare the bar heights (frequencies): ${match[1]}, ${match[2]}, and ${match[3]}. The largest frequency is ${Math.max(Number(match[1]), Number(match[2]), Number(match[3]))}.`;

  match = question.match(/A bag has (\d+) red and (\d+) blue (?:balls|counters)\. What is P\((red|blue)\)/i);
  if (match) {
    const red = Number(match[1]);
    const blue = Number(match[2]);
    const favorable = match[3].toLowerCase() === "red" ? red : blue;
    const total = red + blue;
    const factor = gcd(favorable, total);
    return `Count the favourable counters and all counters: ${favorable} out of ${red} + ${blue} = ${total}. Probability = ${favorable}/${total}${factor > 1 ? ` = ${favorable / factor}/${total / factor}` : ""}.`;
  }

  match = question.match(/Find the area of a triangle with base ([\d.]+) cm and height ([\d.]+) cm/i);
  if (match) return `Area of a triangle = ½ × base × height. Substitute: ½ × ${match[1]} × ${match[2]} = ${Number(match[1]) * Number(match[2]) / 2} cm².`;

  match = question.match(/Find the perimeter of a rectangle ([\d.]+) cm long and ([\d.]+) cm wide/i);
  if (match) return `A rectangle has two lengths and two widths. Perimeter = 2 × (${match[1]} + ${match[2]}) = ${2 * (Number(match[1]) + Number(match[2]))} cm.`;

  match = question.match(/Simplify\s+(\d+)([a-z])\s*([+−-])\s*(\d+)\2\s*([+−-])\s*(\d+)/i);
  if (match) return `Collect like terms and constants separately: ${match[1]}${match[2]} ${match[3]} ${match[4]}${match[2]} = ${match[1]} ${match[3]} ${match[4]}${match[2]}, and the constants are ${match[5]}.`;

  match = question.match(/How many litres are ([\d,]+) cm³/i);
  if (match) return `1,000 cm³ = 1 litre. Divide by 1,000: ${match[1]} ÷ 1,000 = ${Number(match[1].replace(/,/g, "")) / 1000} litres.`;

  match = question.match(/bearing of (\d+)°.*clockwise from north/i);
  if (match) return `A bearing is measured clockwise from north. Write the given angle with three digits: ${String(Number(match[1])).padStart(3, "0")}°.`;

  match = question.match(/Find the bearing for due (north|east|south|west)/i);
  if (match) {
    const bearings = { north: "000°", east: "090°", south: "180°", west: "270°" };
    return `Bearings start at north and are measured clockwise. ${match[1].toLowerCase()} corresponds to ${bearings[match[1].toLowerCase()]}.`;
  }

  match = question.match(/circumference of a circle with diameter ([\d.]+) cm.*π = ([\d/]+)/i);
  if (match) return `Circumference = π × diameter. Substitute the given values: ${match[2]} × ${match[1]} = ${answer.replace(/\.$/, "")}.`;

  match = question.match(/area of a rectangle ([\d.]+) m by ([\d.]+) m/i);
  if (match) return `Area = length × width. Substitute: ${match[1]} × ${match[2]} = ${Number(match[1]) * Number(match[2])} m².`;

  match = question.match(/How many litres are ([\d,]+) cm³/i);
  if (match) return `1,000 cm³ = 1 litre. Divide by 1,000: ${match[1]} ÷ 1,000 = ${Number(match[1].replace(/,/g, "")) / 1000} litres.`;

  match = question.match(/What should the vertical axis of a bar chart show/i);
  if (match) return `A bar chart uses categories along one axis and their counts along the other. The vertical axis should have a labelled scale for frequency.`;

  match = question.match(/What is the probability of getting a (\d+) on a fair six-sided die/i);
  if (match) return `A fair die has 6 equally likely outcomes and only one face showing ${match[1]}. Probability = 1 favourable outcome ÷ 6 total outcomes.`;

  match = question.match(/Find (\d+(?:\.\d+)?)% of (?:₦)?([\d,]+(?:\.\d+)?)/i);
  if (match) {
    const percentage = Number(match[1]);
    const amount = Number(match[2].replace(/,/g, ""));
    return `${percentage}% = ${percentage}/100 = ${(percentage / 100).toFixed(2)}. Multiply by the amount: ${(percentage / 100).toFixed(2)} × ${amount} = ${amount * percentage / 100}.`;
  }

  match = question.match(/Simplify(?: the ratio)?\s+(\d+)\s*[:/]\s*(\d+)/i);
  if (match) {
    const a = Number(match[1]);
    const b = Number(match[2]);
    const factor = gcd(a, b);
    return `Find the highest common factor of ${a} and ${b}: ${factor}. Divide both terms by ${factor}: ${a} ÷ ${factor}:${b} ÷ ${factor}.`;
  }

  match = question.match(/Simplify\s+(\d+)\/(\d+)/i);
  if (match) {
    const a = Number(match[1]);
    const b = Number(match[2]);
    const factor = gcd(a, b);
    return `The highest common factor of ${a} and ${b} is ${factor}. Divide the numerator and denominator by ${factor}: ${a} ÷ ${factor} over ${b} ÷ ${factor}.`;
  }

  match = question.match(/Find the HCF of (\d+) and (\d+)/i);
  if (match) {
    const a = Number(match[1]);
    const b = Number(match[2]);
    const commonFactors = Array.from({ length: Math.min(a, b) }, (_, i) => i + 1).filter((n) => a % n === 0 && b % n === 0);
    return `List the common factors of ${a} and ${b}: ${commonFactors.join(", ")}. Choose the greatest common factor.`;
  }

  match = question.match(/Find the LCM of (\d+) and (\d+)/i);
  if (match) {
    const a = Number(match[1]);
    const b = Number(match[2]);
    const multiples = Array.from({ length: 20 }, (_, i) => (i + 1) * a);
    const lcm = multiples.find((n) => n % b === 0);
    return `List multiples of ${a} until one is also a multiple of ${b}: ${multiples.filter((n) => n <= lcm).join(", ")}. Choose the first common multiple.`;
  }

  match = question.match(/Find the (?:complement|angle supplementary) of (\d+(?:\.\d+)?)°?/i);
  if (match) {
    const angle = Number(match[1]);
    const total = /supplementary/i.test(question) ? 180 : 90;
    return `${/supplementary/i.test(question) ? "Angles on a straight line add to 180°" : "Complementary angles add to 90°"}. Subtract the given angle: ${total}° − ${angle}° = ${total - angle}°.`;
  }

  match = question.match(/Find the area of a rectangle\s+(\d+(?:\.\d+)?)\s*(?:cm|m)?\s*(?:long and|×)\s*(\d+(?:\.\d+)?)/i);
  if (match) return `Area of a rectangle = length × width. Substitute: ${match[1]} × ${match[2]} = ${Number(match[1]) * Number(match[2])} square units.`;

  match = question.match(/Find the perimeter of a square with side\s+(\d+(?:\.\d+)?)/i);
  if (match) return `A square has four equal sides. Perimeter = 4 × side = 4 × ${match[1]} = ${4 * Number(match[1])} units.`;

  match = question.match(/Find the area of a square with side\s+(\d+(?:\.\d+)?)/i);
  if (match) return `Area of a square = side × side. Substitute: ${match[1]} × ${match[1]} = ${Number(match[1]) ** 2} square units.`;

  match = question.match(/Find the volume of a cuboid\s+(\d+)\s*(?:cm)?\s*[×x]\s*(\d+)\s*(?:cm)?\s*[×x]\s*(\d+)/i);
  if (match) return `Volume of a cuboid = length × width × height. Substitute: ${match[1]} × ${match[2]} × ${match[3]} = ${Number(match[1]) * Number(match[2]) * Number(match[3])} cubic units.`;

  match = question.match(/Find the volume of a cube with side\s+(\d+)/i);
  if (match) return `A cube has three equal dimensions. Volume = side³ = ${match[1]} × ${match[1]} × ${match[1]} = ${Number(match[1]) ** 3} cubic units.`;

  match = question.match(/Find the mean of ([\d,\s]+)(?:, and)?\s*(\d+)/i);
  if (match) {
    const values = `${match[1]},${match[2]}`.split(",").map(Number);
    return `Add the values: ${values.join(" + ")} = ${values.reduce((sum, value) => sum + value, 0)}. Divide by the ${values.length} values: ${values.reduce((sum, value) => sum + value, 0)} ÷ ${values.length}.`;
  }

  match = question.match(/Round ([\d,.]+) to (?:the nearest (\w+)|(\d+) decimal places?)/i);
  if (match) {
    const value = Number(match[1].replace(/,/g, ""));
    if (match[3]) {
      const places = Number(match[3]);
      return `Keep ${places} digits after the decimal point in ${match[1]}. Check the next digit (${value.toFixed(places + 1).at(-1)}); round the last kept digit up if it is 5 or more.`;
    }
    const place = match[2].toLowerCase();
    const placeValues = { ten: 10, tens: 10, hundred: 100, hundreds: 100, thousand: 1000, thousands: 1000 };
    const unit = placeValues[place];
    if (unit) return `Look at the digit immediately to the right of the ${place} place. Round ${match[1]} to the nearest ${place}: ${Math.round(value / unit) * unit}.`;
  }

  match = question.match(/Solve\s+(-?\d*)\s*([a-z])\s*([+−-])\s*(\d+)\s*=\s*(-?\d+)/i);
  if (match) {
    const coefficient = Number(match[1] || 1);
    const variable = match[2];
    const operation = match[3];
    const constant = Number(match[4]);
    const total = Number(match[5]);
    const adjusted = operation === "+" ? total - constant : total + constant;
    return `${operation === "+" ? `Subtract ${constant} from both sides` : `Add ${constant} to both sides`} to get ${coefficient}${variable} = ${adjusted}. Divide both sides by ${coefficient}.`;
  }

  match = question.match(/Solve\s+([a-z])\s*([+−-])\s*(\d+)\s*=\s*(-?\d+)/i);
  if (match) {
    const variable = match[1];
    const constant = Number(match[3]);
    const total = Number(match[4]);
    return `${match[2] === "+" ? `Subtract ${constant} from both sides` : `Add ${constant} to both sides`} to isolate ${variable}.`;
  }

  match = question.match(/Solve\s+(-?\d+)\s*([a-z])\s*=\s*(-?\d+)/i);
  if (match) return `Divide both sides by ${match[1]} to isolate ${match[2]}: ${match[3]} ÷ ${match[1]}.`;

  match = question.match(/Simplify\s+(\d+)([a-z])\s*([+−-])\s*(\d+)\2/i);
  if (match) {
    const first = Number(match[1]);
    const second = Number(match[4]);
    return `These are like terms because both contain ${match[2]}. Combine the coefficients: ${first} ${match[3]} ${second} = ${match[3] === "+" ? first + second : first - second}, then keep the variable.`;
  }

  match = question.match(/A polygon has (\d+) sides/i);
  if (match) return `Count the sides given in the question. A polygon with ${match[1]} sides has that many straight edges and vertices.`;

  match = question.match(/Find the sum of the interior angles of a (\d+)-sided polygon/i);
  if (match) return `Use the interior-angle sum formula: (number of sides − 2) × 180°. Substitute: (${match[1]} − 2) × 180° = ${(Number(match[1]) - 2) * 180}°.`;

  match = question.match(/Convert\s+(\d+)\s*cm³ to litres/i);
  if (match) return `1,000 cm³ = 1 litre. Divide by 1,000: ${Number(match[1]).toLocaleString()} ÷ 1,000.`;

  match = question.match(/Convert\s+([\d.]+)\s*cm³ to litres/i);
  if (match) return `1,000 cm³ = 1 litre. Divide the volume by 1,000 to convert cubic centimetres to litres: ${match[1]} ÷ 1,000.`;

  const rules = {
    "Whole numbers & numeration": "Use the place-value chart. Identify the digit or place asked for, then apply the rounding or ordering rule.",
    "Number bases": "Use place values that are powers of the base. Expand each digit by its place value; for a conversion from base ten, divide by the new base and read the remainders in reverse.",
    "Number bases & conversion": "Use place values that are powers of the base. Expand each digit by its place value; for a conversion from base ten, divide by the new base and read the remainders in reverse.",
    "Fractions": "For addition and subtraction, use a common denominator. For multiplication, multiply numerators and denominators, then simplify by a common factor.",
    "Fractions & mixed numbers": "Convert mixed numbers to improper fractions first. Use a common denominator for addition or subtraction, or multiply across and simplify.",
    "Decimals": "Line up decimal points for addition and subtraction. For multiplication, multiply first and then place the decimal point using the total decimal places.",
    "Decimals & recurring decimals": "Use place value to align decimal points, then calculate. To write a decimal as a fraction, use its place value as the denominator and simplify.",
    "Percentages": "Change the percentage to a fraction over 100 or a decimal. Multiply by the amount, or divide the part by the whole and multiply by 100.",
    "Percentages, profit & loss": "Find the difference between selling price and cost price. Divide profit or loss by the cost price and multiply by 100 for the percentage.",
    "Ratio & rate": "For a ratio, divide every term by the same common factor. For a rate, divide the measured quantity by the time or number of units.",
    "Ratio, proportion & rates": "Add the ratio parts, divide the total by that sum to find one part, then scale each share. For a rate, divide the total by the number of units.",
    "Factors, multiples & primes": "List factor pairs or multiples for each number. The greatest shared factor gives the HCF; the first shared multiple gives the LCM.",
    "Integers & directed numbers": "Use the number line or sign rules. Rewrite subtraction of a negative as addition, then calculate carefully.",
    "Directed numbers": "Use the number line or sign rules. Rewrite subtraction of a negative as addition; for multiplication or division, equal signs give positive and different signs give negative.",
    "Estimation & approximation": "Identify the required place value or significant figures. Check the next digit: 5 or more rounds up; otherwise keep the digit unchanged.",
    "Algebraic expressions": "Collect like terms by adding or subtracting their coefficients. For substitution, replace each variable with its value and follow the order of operations.",
    "Algebra: simplify & substitute": "Collect like terms by adding or subtracting their coefficients. For substitution, replace each variable with its value and follow the order of operations.",
    "Simple equations": "Keep the equation balanced. Undo addition or subtraction first, then undo multiplication or division to isolate the unknown.",
    "Linear equations": "Keep both sides balanced. Undo addition or subtraction first, then divide by the coefficient of the unknown.",
    "Inequalities": "Undo operations on both sides as with an equation. Reverse the inequality sign whenever you multiply or divide by a negative number.",
    "Sets & set notation": "The intersection contains elements in both sets; the union contains every distinct element in either set. Compare the listed elements.",
    "Sets & Venn diagrams": "Place the shared elements in the overlap first. Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B) to avoid counting the overlap twice.",
    "Lines & angles": "Use the angle facts: a straight line is 180°, a full turn is 360°, complementary angles total 90°, and vertically opposite angles are equal.",
    "Plane shapes & polygons": "Count the sides for the polygon name. Use (number of sides − 2) × 180° for the interior-angle sum; divide by the number of sides if it is regular.",
    "Angles, triangles & polygons": "Triangle angles total 180°. For other polygons, use (number of sides − 2) × 180°; divide by the number of sides for a regular polygon.",
    "Perimeter & area": "Perimeter is the total distance around the shape. Use the appropriate area formula and include linear or square units as required.",
    "Bearings & construction": "Bearings are measured clockwise from north and written with three digits. An opposite bearing differs by 180°.",
    "Perimeter, area & circles": "For a circle, circumference = π × diameter and area = π × radius². Substitute the given radius or diameter and use the stated value of π.",
    "Volume & capacity": "Volume of a cuboid = length × width × height; volume of a cube = side³. Remember that 1,000 cm³ equals 1 litre.",
    "Collecting & presenting data": "Read the frequency from the data or chart. A frequency counts occurrences; for pictograms, multiply the symbol count by the key.",
    "Mean, median, mode & range": "Mean = total ÷ number of values; median is the middle after sorting; mode is most frequent; range = maximum − minimum.",
    "Probability": "For equally likely outcomes, probability = favourable outcomes ÷ total outcomes. The probability of an event and its complement add to 1."
  };
  return `Method: ${rules[topic.title] || "Identify the relevant rule, substitute the values given, and simplify one step at a time."}\nCheck: compare your result with the question before revealing the answer.`;
}

function makeAnswerOptions(answer, question, index) {
  const correct = answer
    .replace(/\s*\([^)]*\)/g, "")
    .split(/(?<=[.!?])\s+/)[0]
    .replace(/[.!?]+$/, "")
    .trim();
  const numericMatch = correct.match(/[−-]?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?/);
  let distractors = [];

  if (numericMatch) {
    const raw = numericMatch[0];
    const value = Number(raw.replace(/,/g, "").replace("−", "-"));
    const offsets = [1, -1, 2, -2, 10, -10];
    distractors = offsets.map((offset) => {
      const alternative = value + offset;
      const formatted = raw.includes(",") ? Math.abs(alternative).toLocaleString("en-US") : String(Math.abs(alternative));
      const signed = alternative < 0 ? (raw.startsWith("−") ? "−" : "-") : "";
      return correct.replace(raw, `${signed}${formatted}`);
    });
  } else if (/^(yes|no)$/i.test(correct)) {
    distractors = ["Yes", "No", "Both yes and no", "Neither yes nor no"];
  } else if (/^\{.*\}$/.test(correct)) {
    distractors = ["{}", "{a}", "{b}", "{a, b}"];
  } else if (/^(triangle|quadrilateral|pentagon|hexagon|heptagon|octagon|nonagon|decagon)$/i.test(correct)) {
    distractors = ["pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon", "triangle", "quadrilateral"];
  } else {
    distractors = ["Cannot be determined", "None of these", "All of these", "Not enough information"];
  }

  const options = [correct];
  for (const distractor of distractors) {
    if (distractor && !options.some((option) => option.toLowerCase() === distractor.toLowerCase())) options.push(distractor);
    if (options.length === 4) break;
  }
  while (options.length < 4) options.push(`Option ${options.length + 1}`);
  const correctPosition = (index * 7 + 2) % options.length;
  const correctOption = options.shift();
  options.splice(correctPosition, 0, correctOption);
  return options.map((text, optionIndex) => ({ text, isCorrect: optionIndex === correctPosition }));
}

function renderQuestionPage() {
  const questionList = document.querySelector("#question-list");
  questionList.replaceChildren();
  const start = questionPage * questionsPerPage;
  const pageQuestions = selectedQuestions.slice(start, start + questionsPerPage);
  pageQuestions.forEach(([question, answer], pageIndex) => {
    const index = start + pageIndex;
    const item = document.createElement("article");
    item.className = "question-item";
    const questionText = document.createElement("p");
    questionText.className = "question-text";
    questionText.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span>`;
    questionText.append(document.createTextNode(question));
    const options = document.createElement("div");
    options.className = "answer-options";
    options.setAttribute("role", "group");
    options.setAttribute("aria-label", `Answer options for question ${index + 1}`);
    const feedback = document.createElement("p");
    feedback.className = "option-feedback";
    feedback.setAttribute("aria-live", "polite");
    makeAnswerOptions(answer, question, index).forEach((option, optionIndex) => {
      const optionButton = document.createElement("button");
      optionButton.type = "button";
      optionButton.className = "answer-option";
      optionButton.setAttribute("aria-pressed", "false");
      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = String.fromCharCode(65 + optionIndex);
      const text = document.createElement("span");
      text.className = "option-text";
      text.textContent = option.text;
      optionButton.append(letter, text);
      optionButton.addEventListener("click", () => {
        options.querySelectorAll(".answer-option").forEach((button) => {
          button.classList.remove("is-selected", "is-correct", "is-incorrect");
          button.setAttribute("aria-pressed", "false");
        });
        optionButton.classList.add("is-selected", option.isCorrect ? "is-correct" : "is-incorrect");
        optionButton.setAttribute("aria-pressed", "true");
        feedback.className = `option-feedback ${option.isCorrect ? "is-correct" : "is-incorrect"}`;
        feedback.textContent = option.isCorrect
          ? "Correct! Review the working, then reveal the final answer."
          : "Not quite. Try another option, or use the working to help.";
      });
      options.append(optionButton);
    });

    const revealButton = document.createElement("button");
    revealButton.type = "button";
    revealButton.className = "answer-toggle";
    revealButton.setAttribute("aria-expanded", "false");
    revealButton.textContent = "Show working +";
    const workingText = document.createElement("div");
    workingText.className = "working-text";
    workingText.hidden = true;
    const workingLabel = document.createElement("span");
    workingLabel.className = "working-label";
    workingLabel.textContent = "LET'S SOLVE IT STEP BY STEP";
    const workingSteps = document.createElement("ol");
    makeWorking(question, answer, selectedTopic.topic.title)
      .split(/\n|;\s+|(?<=[.!?])\s+(?=[A-Z])/)
      .map((step) => step.trim().replace(/[.!?]+$/, ""))
      .filter(Boolean)
      .forEach((step) => {
        const listItem = document.createElement("li");
        listItem.textContent = step;
        workingSteps.append(listItem);
      });
    workingText.append(workingLabel, workingSteps);
    const answerText = document.createElement("p");
    answerText.className = "answer-text";
    answerText.hidden = true;
    answerText.textContent = answer;
    revealButton.addEventListener("click", () => {
      if (workingText.hidden) {
        workingText.hidden = false;
        revealButton.textContent = "Show final answer +";
        revealButton.setAttribute("aria-expanded", "true");
        return;
      }
      answerText.hidden = !answerText.hidden;
      revealButton.textContent = answerText.hidden ? "Show final answer +" : "Hide final answer −";
    });
    item.append(questionText, options, feedback, revealButton, workingText, answerText);
    questionList.append(item);
  });
  document.querySelector("#practice-count").textContent = `${selectedQuestions.length} QUESTIONS`;
  document.querySelector("#questions-page").textContent = `${start + 1}–${Math.min(start + questionsPerPage, selectedQuestions.length)} of ${selectedQuestions.length}`;
  document.querySelector("#questions-previous").disabled = questionPage === 0;
  document.querySelector("#questions-next").disabled = start + questionsPerPage >= selectedQuestions.length;
}

function openLesson(topic, id) {
  selectedTopic = { topic, id };
  selectedQuestions = [...topic.questions, ...makePracticeQuestions(topic)].slice(0, 50);
  questionPage = 0;
  document.querySelector("#dialog-tag").textContent = `${activeClass} · ${topic.category}`;
  document.querySelector("#dialog-title").textContent = topic.title;
  document.querySelector("#dialog-intro").textContent = topic.intro;
  document.querySelector("#dialog-example").textContent = topic.example;
  renderQuestionPage();
  const completeButton = document.querySelector("#complete-button");
  completeButton.classList.toggle("is-done", completedTopics.has(id));
  completeButton.innerHTML = completedTopics.has(id) ? "Topic completed <span aria-hidden=\"true\">✓</span>" : "Mark topic as complete <span aria-hidden=\"true\">✓</span>";
  dialog.showModal();
}

document.querySelectorAll(".class-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeClass = tab.dataset.class;
    document.querySelectorAll(".class-tab").forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    document.querySelector("#topic-panel").setAttribute("aria-labelledby", tab.id);
    renderTopics();
  });
});

document.querySelectorAll(".class-tab").forEach((tab) => {
  document.querySelector(`#count-${tab.dataset.class.toLowerCase()}`).textContent = `${curriculum[tab.dataset.class].length} topics`;
});

searchInput.addEventListener("input", renderTopics);
filterSelect.addEventListener("change", renderTopics);
document.querySelector("#questions-previous").addEventListener("click", () => {
  if (questionPage === 0) return;
  questionPage -= 1;
  renderQuestionPage();
});
document.querySelector("#questions-next").addEventListener("click", () => {
  if ((questionPage + 1) * questionsPerPage >= selectedQuestions.length) return;
  questionPage += 1;
  renderQuestionPage();
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
document.querySelector("#complete-button").addEventListener("click", () => {
  if (!selectedTopic) return;
  completedTopics.add(selectedTopic.id);
  localStorage.setItem(completedKey, JSON.stringify([...completedTopics]));
  updateProgress();
  const button = document.querySelector("#complete-button");
  button.classList.add("is-done");
  button.innerHTML = "Topic completed <span aria-hidden=\"true\">✓</span>";
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchInput.value = "";
    renderTopics();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) && !dialog.open) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderTopics();