//number of milliseconds to wait before updating the explanation text
const delay = 5000;
const vizContainer = document.querySelector("#vizContainer");
const explanationContainer = document.querySelector("#explanationContainer");
const explanationText = document.querySelector("#explanationText");
const explanationAmount = document.querySelector("explanationAmount");
const dataset = [
    {
        "title": "live within 50mi of a nuclear plant for a year",
        "measurement": 0.09,
        "multiplier": 2180,
        "color": "#80ffff"
    }, //cyan
    {
        "title": "eat a single banana",
        "measurement": 0.1, 
        "multiplier": 1965, 
        "color": "#8095ff"
    }, //blue
    {
        "title": "receive a dental x-ray", 
        "measurement": 5, 
        "multiplier": 39, 
        "color": "#d480ff"
    }, //purple
    {
        "title": "be on one airline flight from NY to LA", 
        "measurement": 40, 
        "multiplier": 4.9, "color": "#ff80bf"
    }, //pink
    {
        "title": "sleep directly on a nuclear plant for a year", 
        "measurement": 250, 
        "multiplier": 0.78, 
        "color": "#ffaa80"
    }, //orange
    {
        "title": "receive a single mamogram", 
        "measurement": 400, 
        "multiplier": 0.49, "color": "#eaff80"
    }, //yellow
    {
        "title": "receive a single chest CT scan", 
        "measurement": 7000, 
        "multiplier": 0.028, 
        "color": "#80ff80"
    }, //green
];


const defaultMultiplier = dataset[0].multiplier; //2180, keeps a reference 
// of the multiplier value of the first entry

dataset.forEach((dataLine, index)=>{
    let newCircle = document.createElement("div");
    newCircle.style.width = (dataLine.measurement * defaultMultiplier) + "vw";
    newCircle.style.height = (dataLine.measurement * defaultMultiplier) + "vw";
    newCircle.style.backgroundColor = dataLine.color;
    newCircle.style.borderRadius = "50%";
    newCircle.style.position = "absolute";
    newCircle.style.zIndex = dataset.length - index;
    newCircle.style.top = ((dataLine.measurement*defaultMultiplier)/2*-1) + "vw";
    newCircle.style.left = ((dataLine.measurement*defaultMultiplier)/2*-1) + "vw";
    vizContainer.append(newCircle);



    let updateText = () => {
        explanationText.innerHTML = dataset[index].title;
        explanationContainer.style.backgroundColor = dataset[index].color;
        explanationAmount = "(" + dataset[index].measurement + " micro-sieverts)";
    }
    window.setTimeout(updateText, index*delay);
})
