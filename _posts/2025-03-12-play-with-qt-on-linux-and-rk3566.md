## set up Qt creator on vmware and rk3566

Qt is a multi-platform framework, which means that it can be easily deployed on many different platforms, such as windows, linux, ios, and linux on embedded devices, Raspberry Pi, RK3566, and so on.

It gives us a convenience way to deploy a project on terminal device while we develop the project on upper computer.

This tutorial shows how to deploy a CAN communication project on RK3566(ubuntu) while the developing process is on vmware(ubuntu). We will introduce the code which is also open-sourced on [github](https://github.com/wing0night/liquid_handler).

## Set up Qt on vmware

- create Qt account, log in

- Download Qt online installer here: https://www.qt.io/download-open-source

![alt text](image.png)

- Open Qt online installer in ubuntu

!!! note "hint"
    - If you want some older version of Qt, click "" button in online installer to fetch the former versions

- Set up mixed compiler



## Quick start with my system

If you have no need to customize your own linux devices, mostly SPI, I2C, these sort of communication interfaces, you can directly use the image that I have compiled, load it into your RK3566 board, and deploy the Tecan & stepper motor control system. This image is set up with pwm output, and default GPIO pins can be directly used.

### Steps to set up the system

1. load the image

- find the xxx.iso file
- Open RKDevTool downloaded before
- Click "Switch" to change the board mode to "LOADER" mode
- Click "Firmware", choose the location you download the xxx.iso file
- Click "Update"

And then you have a brand-new board with pwm pins set.

2. In VMware, set up the mixed-compile compiler

> you can also choose to use the built executable file if you have no need to modify the code

- Qt program is under the directory ""

- build

3. Now you have a built Qt execute file(with no suffix file type specified)

- Transfer the execute file to the board, maybe with a USB flash disk
- Operate on the board Linux UI, transfer the USB-CAN lib to the /etc/QT5.15.../lib
- Now run the file, by running `sudo LD_LIBRARY_PATH=/opt/qt-everywhere-src-5.15.8/ext/lib ./rk_ui2 -platform xcb` in the terminal. If that doesn't work, try to run `chmod +x ./rk_ui2` first.

4. How to use the program


The resources mentioned above are all available and well-labeled in the link below

<script src="https://utteranc.es/client.js"
        repo="wing0night/wing0night.github.io"
        issue-term="pathname"
        label="comments"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>

