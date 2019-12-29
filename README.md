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
