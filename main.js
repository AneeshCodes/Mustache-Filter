noseX = 0
noseY = 0

function preload()
{
  img = loadImage('Mustache.png')
}

function setup()
{
  canvas = createCanvas(500, 500)
  canvas.center();
  video = createCapture(VIDEO)
  video.hide()
  //classifier = ml5.imageClassifier('MobileNet', modelLoaded)
  posenet = ml5.poseNet(video,modelLoaded);
  posenet.on('pose', gotPoses);
}

function draw()
{
  image(video, 0, 0, 500, 500)
  image(img, noseX, noseY, 60, 60)
}

function takesnapshot()
{
  save("image.png")
}

function modelLoaded()
{
  console.log('modelLoaded')
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-110;
    noseY = results[0].pose.nose.y+6;
  }
}