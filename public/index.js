const myVideo = document.querySelector("#myVideo");

const openMediaDevices = async (constraints) => {
  return await navigator.mediaDevices.getUserMedia(constraints);
};

async function playVideoFromCamera() {
  try {
    const constraints = { video: true, audio: true };
    const stream = openMediaDevices(constraints);
    const video = myVideo.querySelector("video#localCamera");
    console.log(stream);
    console.log(video);
    video.srcObject = stream;
  } catch (e) {
    console.error(`Error accessing media devices. ${e}`);
  }
}
playVideoFromCamera();

myVideo.addEventListener("click", () => {
  console.log("video");
});
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("it is a btn");
});
