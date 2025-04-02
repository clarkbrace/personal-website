---
title: "Dynamic Wallpaper Project"
excerpt: "Choosing a good PC wallpaper can be hard. Join me as I go through the process of making my own."
coverImage: "/blogposts/DynamicWallpapersPost/Dynamic-WP-Cover.jpg"
date: "2025-03-26T05:51:19Z"
author: Clark Brace
---

## Origin

I am the type of person who rarely changes their desktop computer background. In fact, I often find myself simply using the system defaults across most of my tech devices. A part of me has always been bothered by this. I always seem to tell myself I will think of something creative to use as my background, yet that never seems to happen, and I end up with a sad default desktop wallpaper. This year I decided to make a change. I had recently built a new computer and once again found myself in the unfortunate position of not knowing how to stylize it. Below is a record of my journey to create my perfect desktop wallpaper!

For some extra context, my preference in what makes a good wallpaper is probably pretty strange. I personally don't like the idea of using images from games or other media and seeing the same static image day after day. I can't stand it when there are visual artifacts anywhere on the screen as I find them distracting and annoying. I also have a preference for darker scenes. I find them easier on the eyes, and it lowers the chances of accidentally blinding yourself when it's dark and you minimize a tab to reveal a bright screen below. This adds an additional layer of complexity as visual artifacts are much more apparent in dark images compared to light ones. With all that said it has made the process of finding the perfect wallpaper very difficult. So rather than fruitlessly searching the internet for a mythical "perfect" wallpaper, I finally decided to build my own.

I began by honing in on a theme, and given that I prefer darker scenes, I decided to go with space. When it came to the style I decided to go with pixel art as the barrier to entry is very low but can also convey complex scenes with relatively limited detail. That is to say I am not particularly artistically gifted. This was also a great opportunity to work with the program [Aseprite](https://www.aseprite.org) which is a really awesome pixel art/animated sprite creation tool.

## Inspiration

One of the main inspirations for the art style of this project came from a MS-DOS education game I played as a kid. My elementary school's computer lab had two education games loaded on them, [Word Rescue](https://www.redwoodgames.com/word.php) and [Math Rescue](https://www.redwoodgames.com/math.php). I really appreciated the vibrant star-scape the Math Rescue team created and wanted to try to capture, and bring to life, a bit of that style in my own project.

![Math Rescue Star-Scape](/blogposts/DynamicWallpapersPost/Math_Rescue.png)

With the theme and concept out of the way I also wanted to address the problem of getting tired of what I had created over time. If I created a single static image file for my wallpaper I would probably get bored of it after a few months. It occurred to me if I instead generated a new image every time my computer booted up, that would solve my issue! I could generate a new background at random so I would have a slightly different, yet unique, wallpaper! This then led to an even more dangerous idea. Could I instead animate the wallpaper? Was it possible to set a video/gif as the wallpaper? After doing some research the answer was yes! While Windows 11 does not currently support this feature, a program called [Wallpaper Engine](https://www.wallpaperengine.io) allows videos of a variety of file types to be used! Armed with this information, I began work on generating my space themed wallpaper animation.

## First Approach

My initial approach to this project involved using [Processing](https://processing.org). Processing is an open source sketchpad, built on top of Java, that offers access to an extensive yet easy to use graphics library (both 2d and 3d!). I had previously used Processing in college doing an “Art Through Code” class, so I was able to jump right in and begin creating the animation.

To help stay organized, I decided to break down each animation frame into different layers. The first layer was completely black to simulate the darkness of space. The next layer I created was a distant star layer which consisted of small square pin-pricks of light that vary in size and brightness.

![Distant Stars](/blogposts/DynamicWallpapersPost/Distant_stars.jpg)

Next using [Aseprite](https://www.aseprite.org) I designed some basic star designs I thought would look cool and created a 2d array structure to help represent the pattern.

![Aseprite Star Sprite Sheet](/blogposts/DynamicWallpapersPost/Aseprite_Star_Spritesheet.jpg)

After creating a few general star patterns, I hard coded them into my project in a large 2d array of integers. I entered each frame of the animation into the array and then defined some constants to help index into the correct frame. When the program ran over a frame, a 0 would mean not to draw that pixel while any positive integer would mean draw. I chose to use integers here rather than booleans because it allowed me to encode some additional transparency values for each pixel. A value of 1 means draw the pixel with no transparency while each value greater than 1 would increase the transparency of the pixel by a factor to help give the stars some additional detail.

![Animated Stars](/blogposts/DynamicWallpapersPost/Animated_Stars.jpg)

With some of the initial graphics created, I wanted to move on to actually generating the video file from each frame. Using Processings built-in saveFrame function, which is able to capture and save each frame of an animation, I was now able to have a set of static images that if stitched together would create a seamless looping animation!

The next step was to convert the images to video. For this I wanted to work with Python because of the langauge's strong community support of external tool libraries. I quickly decided on using (OpenCV)[https://pypi.org/project/opencv-python/] for Python as it offered extensive support for video editing and encoding. Sure enough, it was able to convert static images to video!

This however is where things took a turn. While I managed to create the video, the issue of file size and video quality became immediately apparent. When I combined the images into video, the quality of the video went way down and displayed lots of artifacts due to compression/low bitrate. But when I adjusted the program's bitrate to increase the quality of the video, the video file size ballooned to like 1.5 gigabytes for a 10 second video loop! This was also not helped by the fact that between my three computer monitors I had a combined resolution of 7680 x 2160. I attempted everything I could think of to help solve these issues including: choosing different video encoding codices, exporting the initial images as svgs to maintain the crisp visuals, converting the animation to a gif, adjusting the videos framerate, and many other approaches. I found that even if I was willing to compromise on large video file sizes (which did work), when I used the videos with [Wallpaper Engine](https://www.wallpaperengine.io) the video loop was not seamless and would have a noticeable stutter each time the video restarted. I found this to be really distracting. On top of that, constantly running large files was costing a lot of CPU time to run, not to mention RAM to keep the video file loaded for easy access constantly. All in all, while it was fun to learn how to create videos from images the issues just continued to stack up and I began looking for alternate approaches to tackling this project.

## Second Approach

While researching different video formats that work best with [Wallpaper Engine](https://www.wallpaperengine.io) I ended up reading a lot of additional documentation about the program. The most important discovery I made was that in addition to static images [Wallpaper Engine](https://www.wallpaperengine.io) could also take HTML files as input. This got me thinking, rather than pre-generating an animation video might it make more sense to simply have an ongoing animation in the background? If I made the animation efficient enough, simply running in the background would not be particularly taxing on my PC. This option also opened the door for further expansion on the project because if the animation were constantly running the wallpaper would not necessarily be dependent on a loop. If that were the case, I could add new elements to the wallpaper that could show up at random times and occur at varying frequencies. I also learned that another benefit of using an HTML wallpaper is that [Wallpaper Engine](https://www.wallpaperengine.io) has built in support user properties which essentially allows you to add configuration options to your wallpaper so that users can easily adjust your wallpaper settings within [Wallpaper Engine](https://www.wallpaperengine.io). This would further allow me to make the animation configurable. Armed with this new plan, I set up to rewrite the project in HTML/CSS.

Doing some research into how to best approach this animation, I came up with two different options to create the actual animation and have it be presented. The first would be to use WebGL which gives very powerful access to low level graphics functions and can interface with a computer's GPU in an efficient manner. The other option would be to use an HTML canvas which also gives access to a robust graphics library, but is a bit more limited in scope and efficiency. After debating both approaches I decided to go with the HTML canvas as its tools are similar to that of the [Processing](https://processing.org) which I was already familiar with. For the scope of this project I didn’t foresee needing to access the rendering pipeline or lower level methods than what HTML canvases supported.

I started by completely porting over my old program to HTML and Javascript. To make a long story short, it got pretty much completely transferred over before I realized that, as the size and scope of the project increased, the less manageable it was becoming to add new features and maintain. So I made the difficult decision to once again start again but this time come equipped with [TypeScript](http://typescriptlang.org) and [Webpack](https://webpack.js.org) to make my project easier to maintain, debug, and generally stay organized. So it was once again time to rewrite! _sigh_

For this newest rewrite I also wanted to do my best to take the program efficiency into account. When creating the different animation layers (distant stars, large stars, background) I realized that some of the layers didn't need to be redrawn every frame. For instance the large stars, which all update their animations at the same time, only change every 125 milliseconds. Redrawing the frame in full every frame was wasteful. Because of this, I structured each layer such that they had their own image bitmap that would update/redraw only when needed. The entire animation frame would then be composed of all the layer bitmaps whenever the canvas called for a new frame to be drawn. Using this kind of thinking, I also tried to reduce complexity and non-necessary memory allocation wherever I could to help bring the overall runtime per frame down as much as possible.

With this additional freedom of having a long running animation I decided to add comets to the animation as well!

![Comet](/blogposts/DynamicWallpapersPost/Comet.jpg)

The comets spawn at random and fly across the screen before despawning when they exit the screen. However, with the addition of moving objects, the timing of when these elements should be drawn to the screen and when they should de-spawn needed to be taken into account to ensure the animation didn't simply have thousands of offscreen comets traveling forever taking up memory and increasing runtime. To address this, I took into account each comet's angle of flight and starting position to add periodic checks for when the comet had left the frame for the last time. This way each comet would only be created and processed when it was visible on the canvas before being removed.

So far the comets have been my favorite addition to the project as they really seem to bring some life to the wallpaper. Due to the random nature of how they spawn it's always a surprise to see them slowly making their way across the screen. I find these especially satisfying when they fly between monitor screens depending on their angle of flight.

Using comets, I also realized I could create rare “events” that occur very infrequently but that would also be a pleasant surprise to see. For the comets I created three such events: 1) a star flare event where a random number of comets would flare out from a single point all with slightly different angles;

![Comet Flair 1](/blogposts/DynamicWallpapersPost/Comet_Flair_1.jpg)

2. A comet cascade event where a random number of comets fly in a straight line, each with a constant height offset;

![Comet Cascade](/blogposts/DynamicWallpapersPost/Comet_Cascade_1.jpg)

and 3) a comet circle event where comments traveling the same speed converge at a single point in space to create a cool circle effect

![Comet Circle](/blogposts/DynamicWallpapersPost/Comet_Circle_1.jpg)
![Comet Circle 2](/blogposts/DynamicWallpapersPost/Comet_Circle_2.jpg)

This is what the wallpaper looks like with comets, stars, and distant stars:

![Current Wallpaper](/blogposts/DynamicWallpapersPost/Current_Wallpaper.gif)

## Future Plans

At the moment this wallpaper project already surpasses my original goal for what I wanted to accomplish and I am very happy with where the project is at currently. That being said, there are still some additional layers/aspects to the project I am planning to return to in the future and will do my best to update this post to reflect any changes I make. Some of the longer term idea I would like to implement in the future include:

- Adding more star patterns/art in general to the project
  - I want to try my hand at creating more complex stars/pattern to increase the variety like in Math Rescue
- Adding planets that very slowly make their way across the screen (over the timescale of hours)
  - Possibly also adding a random number of moons to the planets. Who knows?!
- Persistent animation state by saving the animations state to file to it can pick up where it left off
  - This feature is of particular interest to me as I also use this wallpaper as my screensaver and as it currently stands the program resets itself whenever the screensaver begins.

If you have made it this far thank you for reading about my wallpaper creation journey. This has been a really fun passion project this far and I can't wait to get back to it soon. If you are interested in checking this project out for yourself I will be posting it to the [Wallpaper Engine](https://www.wallpaperengine.io) workshop soon for anyone to use. In the meantime feel free to check out my most recent version on [github now](https://github.com/clarkbrace/Dynamic-Wallpaper-Typescript). Until next time.
