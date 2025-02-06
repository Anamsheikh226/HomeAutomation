


// let voiceButton = document.getElementById("start-voice-command");
// let lightStatus = document.getElementById("light-status");
// let temperatureStatus = document.getElementById("temperature-status");
// let securityStatus = document.getElementById("security-status");
// let cameraStatus = document.getElementById("camera-status");
// let doorLockStatus = document.getElementById("door-lock-status");
// let alarmStatus = document.getElementById("alarm-status");

// let isLightOn = false;
// let temperature = 22;
// let isSecurityOn = false;
// let areCamerasOn = false;
// let areDoorsLocked = false;
// let isAlarmOn = false;

// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// voiceButton.addEventListener("click", () => {
//     recognition.start();
//     console.log('Listening for voice commands...');
// });

// recognition.onresult = (event) => {
//     const command = event.results[0][0].transcript.toLowerCase();
//     console.log('You said: ' + command);

//     if (command.includes('light')) {
//         toggleLight();
//     } else if (command.includes('temperature')) {
//         changeTemperature(command);
//     } else if (command.includes('security')) {
//         toggleSecurity();
//     } else if (command.includes('camera')) {
//         toggleCameras();
//     } else if (command.includes('door')) {
//         toggleDoors();
//     } else if (command.includes('alarm')) {
//         toggleAlarm();
//     }
// };

// function toggleLight() {
//     isLightOn = !isLightOn;
//     lightStatus.textContent = `Current Status: ${isLightOn ? 'On' : 'Off'}`;
// }

// function changeTemperature(command) {
//     const temperatureMatch = command.match(/(\d+)/);
//     if (temperatureMatch) {
//         temperature = parseInt(temperatureMatch[0]);
//         temperatureStatus.textContent = `Current Temperature: ${temperature}°C`;
//     }
// }

// function toggleSecurity() {
//     isSecurityOn = !isSecurityOn;
//     securityStatus.textContent = `Security: ${isSecurityOn ? 'Enabled' : 'Disabled'}`;
// }

// function toggleCameras() {
//     areCamerasOn = !areCamerasOn;
//     cameraStatus.textContent = `Cameras: ${areCamerasOn ? 'Enabled' : 'Disabled'}`;
// }

// function toggleDoors() {
//     areDoorsLocked = !areDoorsLocked;
//     doorLockStatus.textContent = `Doors: ${areDoorsLocked ? 'Locked' : 'Unlocked'}`;
// }

// function toggleAlarm() {
//     isAlarmOn = !isAlarmOn;
//     alarmStatus.textContent = `Alarm: ${isAlarmOn ? 'On' : 'Off'}`;
// }

// // 3D Simulation Placeholder
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(500, 500);
// document.getElementById('3d-simulation').appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }

// animate();



let voiceButton = document.getElementById("start-voice-command");
let lightStatus = document.getElementById("light-status");
let temperatureStatus = document.getElementById("temperature-status");
let securityStatus = document.getElementById("security-status");

let isLightOn = false;
let temperature = 22;
let isSecurityOn = false;

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

voiceButton.addEventListener("click", () => {
    recognition.start();
    console.log('Listening for voice commands...');
});

// Handle voice input and map it to smart home actions
recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log('You said: ' + command);

    if (command.includes('light')) {
        toggleLight();
    } else if (command.includes('temperature')) {
        changeTemperature(command);
    } else if (command.includes('security')) {
        toggleSecurity();
    }
};

// Manual control buttons
document.getElementById("light-toggle").addEventListener("click", toggleLight);
document.getElementById("temperature-up").addEventListener("click", () => changeTemperature('increase'));
document.getElementById("temperature-down").addEventListener("click", () => changeTemperature('decrease'));
document.getElementById("security-toggle").addEventListener("click", toggleSecurity);

// Toggle light on/off
function toggleLight() {
    isLightOn = !isLightOn;
    lightStatus.textContent = `Current Status: ${isLightOn ? 'On' : 'Off'}`;
    console.log(`Light turned ${isLightOn ? 'on' : 'off'}`);
}

// Change temperature based on command or button click
function changeTemperature(command) {
    if (command === 'increase') {
        temperature += 1;
    } else if (command === 'decrease') {
        temperature -= 1;
    } else {
        const temperatureMatch = command.match(/(\d+)/);
        if (temperatureMatch) {
            temperature = parseInt(temperatureMatch[0]);
        }
    }
    temperatureStatus.textContent = `Current Temperature: ${temperature}°C`;
    console.log(`Temperature set to ${temperature}°C`);
}

// Toggle security system
function toggleSecurity() {
    isSecurityOn = !isSecurityOn;
    securityStatus.textContent = `Security: ${isSecurityOn ? 'Enabled' : 'Disabled'}`;
    console.log(`Security system turned ${isSecurityOn ? 'on' : 'off'}`);
}

// 3D Simulation Placeholder (using Three.js)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 500);
document.getElementById('3d-simulation').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
