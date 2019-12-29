# LAVis
LAVis stands for Lorenz Attractor Visualizer.

![Screenshot of LAVis](https://github.com/yoursamlan/lavis/blob/master/screenshots/screenshot1.PNG?raw=true)

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
![Lorenz Attractor](https://github.com/yoursamlan/lavis/blob/master/screenshots/iconLAVisu512.png?raw=true)
<br/><br/>*The trajectory appears to cross itself repeatedly, but that’s just an artifact of projecting the 3-dimensional trajectory onto
a 2-dimensional plane. In 3-D no crossings occur!*

