# LAVis
LAVis stands for [Lorenz Attractor Visualizer](https://yoursamlan.github.io/lavis/). 

![Screenshot of LAVis](https://github.com/yoursamlan/lavis/blob/master/screenshots/screenshot1.PNG?raw=true)

### Update

Lavis 2.0 has just arrived with--
1. Improved Performance
2. LITE and DARK mode supported UI
3. Fixed Bugs
<br/>
![Screenshot of LAVis2.0](https://github.com/yoursamlan/lavis/blob/master/screenshots/LAVis2.0.PNG?raw=true)


## Introduction to Lorenz Equations
The Lorenz equations, named after famous scientist cum mathematician Edward Norton Lorenz, were originally derived
by Saltzman (1962) as a ‘minimalist’ model of thermal convection in a box
```
x˙ = σ(y − x)           .......(1)
y˙ = ρx − y − xz        .......(2)
z˙ = xy − βz            .......(3)
```
where σ (“Prandtl number”), ρ (“Rayleigh number”) and β are parameters (> 0). These equations also arise in studies of convection
and instability in planetary atmospheres, models of lasers and dynamos etc.

## Simple properties of the Lorenz Equations

### Nonlinearity
The two nonlinearities are xy and xz.
### Symmetry
Equations are invariant under (x, y) → (−x, −y). Hence if (x(t), y(t), z(t)) is a solution, so is (−x(t), −y(t), z(t)).
### Volume contraction 
The Lorenz system is dissipative i.e. volumes in phase-space contract under the flow.

## Chaos on a Strange Attractor
Lorenz considered the case σ = 10, β = 8/3, ρ = 28 with (x0, y0, z0) = (0, 1, 0).
After an initial transient, the solution settles into an irregular oscillation that persists as t → ∞ but never repeats exactly. The motion
is aperiodic.
<br/>Lorenz discovered that a wonderful structure
emerges if the solution is visualized as a trajectory in phase space. For instance, when
x(t) is plotted against z(t), the famous butterfly wing pattern appears. Something like this-<br/><br/>
![Lorenz Attractor](https://github.com/yoursamlan/lavis/blob/master/logo.png?raw=true)
<br/><br/>*The trajectory appears to cross itself repeatedly, but that’s just an artifact of projecting the 3-dimensional trajectory onto
a 2-dimensional plane. In 3-D no crossings occur!*
The number of circuits made on either side varies unpredictably from one cycle to the next. The sequence of the number of circuits in
each lobe has many of the characteristics of a random sequence! <br/> When the trajectory is viewed in all 3 dimensions, it appears to
settle onto a thin set that looks like a pair of butterfly wings. We call this attractor a **strange attractor**.

## VISUALIZATION
After enough Mathematical briefings, lets come to the main part of this project, i.e *Visualization*.
<br/>I have already uploaded an **Youtube Video**. You can watch it by clicking the following [Thumbnail](https://www.youtube.com/watch?v=9QMn-Nwi6BA).<br/><br/>
<a href="http://www.youtube.com/watch?feature=player_embedded&v=9QMn-Nwi6BA
" target="_blank"><img src="http://img.youtube.com/vi/9QMn-Nwi6BA/0.jpg" 
alt="YouTube" width="240" height="180" border="10" /></a><br><br>
Using LAVis 1.0 yoc can visualize such type of 3D image.<br><br>
![screenRec](https://github.com/yoursamlan/lavis/blob/master/screenshots/screenrec.gif?raw=true)

## Downloads
[![LAVisu](https://raw.githubusercontent.com/yoursamlan/lavis/master/LAVis512.ico)](https://bit.ly/LAVis)<br><br>
</br>You can use **LAVis 1.0** web app by clicking [here](bit.ly/LAVis)<br>
You can download **Android Version (LAVis.apk)** from [here](https://github.com/yoursamlan/lavis/raw/master/app/LAVis.apk)<br>
You can download **Windows 32bit Version (LAVis.exe)** from [here](https://github.com/yoursamlan/lavis/raw/master/app/LAVis.exe) 
