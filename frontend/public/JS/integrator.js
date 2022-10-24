setTimeout(() => {
    const input = document.getElementById("midtermScore");
    
    // console.log("Integrator is running!")
    // console.log(input);
    // const url = window.location.href;
    // console.log(url);
    // const len = "ScorePrediction".length
    // console.log(url.slice(url.length-len, url.length));
    // if (url && url.length > len && url.slice(url.length-len, url.length) == "ScorePrediction") {
        
    // }
    
    const SD = 4
    const MEAN = 35
    const inteFrom = -100
    const function_input = `1/sqrt(2pi)*e^((-(x)^2)/2)`
    const code = math.compile(function_input);
    const f = function (x) { return code.eval({ x: x }) };
    
    function computeProbability(score) {
        let zScore = (score - MEAN)/SD
        let sol = numeric.dopri(inteFrom, zScore, 0, f);
        let res = sol.at(zScore)
        return res;
    }

    input.addEventListener("input", (e) => {
        let score = math.eval(e.target.value);
    
        // F, D, C, B, A
        const grades = [0, 35, 50, 70, 80, 100]
        let sum = computeProbability(0)
        for (let i = 1; i < grades.length; i++) {
            let leftScore = grades[i]-score;
            let rawProb = computeProbability(leftScore)
            
            let prob = 0;
            if (sum < rawProb) {
                prob = ((rawProb - sum)* 100).toFixed(0);
            }

            sum += rawProb             
            let res = prob + (i > 1 ? " " : "") + "%"
            document.getElementById(`getting${i-1}Probability`).innerText = res
        }
    })
}, 1000);
