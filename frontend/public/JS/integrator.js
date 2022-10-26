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
        let zScore = (score - MEAN) / SD
        let sol = numeric.dopri(inteFrom, zScore, 0, f);
        let res = sol.at(zScore)
        return res;
    }
    function pickHex(weight) {
        var color1 = [114, 199, 48]; //green
        var color2 = [234, 234, 234]; //gray
        var w1 = weight / 100;
        var w2 = 1 - w1;
        var rgb = "rgb(" + Math.round(color1[0] * w1 + color2[0] * w2) +
            ", " + Math.round(color1[1] * w1 + color2[1] * w2) + ", " +
            Math.round(color1[2] * w1 + color2[2] * w2) + ")";
        console.log(rgb);
        return rgb;
    }

    input.addEventListener("input", (e) => {
        let score = math.eval(e.target.value);
        if (score > 50 || score < 0) {
            document.getElementById(`getting0Probability`).innerText = "ERR"
            document.getElementById(`motivation`).innerText = "คะแนนไม่ถูกต้อง!!"
            for (let i = 1; i < 6; i++) {
                document.getElementById(`getting${i - 1}Probability`).innerText = "ERR"
                if (i > 1) {
                    document.getElementById(`bg-pred${i - 1}`).style.backgroundColor = "indianred";
                }
            }
        }
        else {

            // F, D, C, B, A
            const grades = [0, 35, 50, 70, 80, 100]
            let sum = computeProbability(0)
            let cscore = [0, 0, 0, 0, 0, 0]
            for (let i = 1; i < grades.length; i++) {
                let leftScore = grades[i] - score;
                let rawProb = computeProbability(leftScore)
                let prob = 0;
                if (sum < rawProb) {
                    prob = ((rawProb - sum) * 100).toFixed(0);
                }
                cscore[i] = prob
                sum += rawProb
                let res = prob + (i > 1 ? " " : "") + "%"
                if (i > 1) {
                    document.getElementById(`bg-pred${i - 1}`).style.backgroundColor = pickHex(prob);
                }
                document.getElementById(`getting${i - 1}Probability`).innerText = res;
            }
            if (cscore[3] >= 50) {
                document.getElementById(`motivation`).innerText = "โอเคอยู่นะ!"
            }
            else if (cscore[4] >= 50) {
                document.getElementById(`motivation`).innerText = "เก่งมาก!!"
            }
            else if (cscore[5] >= 50) {
                document.getElementById(`motivation`).innerText = "คุณคือเทพเจ้า!!"
            }
            else if (cscore[1] == 0) {
                document.getElementById(`motivation`).innerText = "รอด F แล้ว!!"
            }
            else {
                document.getElementById(`motivation`).innerText = "ปุ่มถอนรอคุณอยู่!!"
            }
        }
    })
}, 1000);
