# Getting Started with PowerShell

## Book Notes

I found that the book "Lear Windows PowerShell in a Month of Lunches" by Don Jones and Jeffrey Hicks an excellent guide for learning PowerShell

## Introduction

I haven't been the most enthuasiastic user of command lines in the past. I dabbled here and there but I've mostly used GUIs whenever possible. Most of the time, this didn't have any negative effects on my productivity.

When I started using Azure however, there were a number of tasks that were not easily performed using the old portal. Reading online, I found that the tasks could be run more quickly if I used PowerShell. I found out that GUIs are a great way of finding out what a tool is capable of by clicking around and seeing what is available.

Once the process to perform a task is learned there aren't any other performance improvements that can be made when using the GUI. You can then look at automating the task using something like PowerShell which could potentially turn a number of clicks into just one.

Naturally the potential for making my job easier in the long run was very appealing to me. I began automating daily tasks where I could but this was only when I had down time from other projects (which could be months between these opportunities) and it always took me some time in order to get my head into the syntax and thought processes related to PowerShell.

I'm writing this to add some personal documentation so that I can cut down on the time spent relearning the language and hopefully write better scripts in the future.

## Notes

I'm using Windows 10 and PowerShell 5. I'll go through getting the version of PowerShell on the machine further down. Most of the stuff in this series will work in older versions but Microsoft is updating and improving PowerShell all the time, including getting it to work on Mac/Linux so keep an eye out for updates. (Blog/Twitter???)

## Setting up the environment

### Setting up the console app

I don't norrmally use the PowerShell console app but it can be a good idea to get a feel for it. There are some versions of Windows that don't have the GUI available so you'll only have access to the console app. I normally use the PowerShell Integrated Scripting Environment (ISE), Visual Studio or VS Code.

Using Windows 10, you can find PowerShell console app in the Start menu. There are a couple of ways to do this

1. Search
    - Open the Start menu and type PowerShell
    - Choose "Windows PowerShell" from the list presented
2. Direct
   - Open the Start Menu
   - Go to All Programs > Accessories
   - Click on Windows PowerShell

<div class="notes-div">
<h4>Note</h4>

<p>Make sure you're using the correct version. I'm using a 64-bit version of Windows so the icon with "x86" in the title is the 32-bit version. It's a good idea to pin the 64-bit concole app and the ISE to the Start menu at least. I've also pinned them to the Task bar for easier access.</p>
</div>

If you click in the upper left corner and select "Properties" then you will be given a window that will allow you to change the the appearance of the console app to fit your preferences.

<!-- Insert picture -->

It's a good idea to adjust the font size to something comfortable. On the "Layout" tab, set both Widths to the same value. If you don't you may get a horizontal scrollbar at the bottom of the screen which can be a problem when writing longer commands. 

#### Setting up the Integrated Scripting Environment (ISE)

You can find the ISE in the same place as the console app. You can also start the ISE from the console app. A few ways to start the ISE are

1. Search
    - Open the Start menu and type PowerShell
    - Choose "Windows PowerShell ISE" from the list presented
2. Direct
   - Open the Start Menu
   - Go to All Programs > Accessories
   - Click on Windows PowerShell ISE
3. Console App
   - Enter "ise" and press Enter

<!-- Insert picture -->

#### Getting the Installed PowerShell Version

In the console app or ISE you can use the command

Conclusion