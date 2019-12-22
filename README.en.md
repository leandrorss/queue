*Read this in other languages: [Portuguese](README.md), [English](README.en.md).*

# About the project

The goal was to copy the interface made in Adobe Photoshop by the designer Andrea Hock in a real app made in React Native. (https://dribbble.com/shots/8217150--Restaurant-Waitlist-Mobile-App). I found the interface so elegant that I challenged myself to make one as similar as possible in a real app made in RN.

The icons and fonts used are not the same because I do not have the licenses to use, but I tried to keep as true as possible with the free ones available online.

## Dependencies

The main dependencies used in the creation of this project:

- [React Native](http://facebook.github.io/react-native/)
- [Styled Components](https://www.styled-components.com)
- [React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Native Circular Progress](https://github.com/bartgryszko/react-native-circular-progress)

I used ESLint as the lint tool for JavaScript and JSX (https://eslint.org/) and the Rocketseat template (https://github.com/Rocketseat)

## Project

The concept is a waiting list app for restaurants. The idea is that the customer can follow when the table is available.

To simulate the queue, I put a setTimeout that executes the checklist queue routine at a random time of between 1 and 10 seconds, so you can see the animation.

## How to use

1.  Clone the repo:

```
git clone https://github.com/leandrorss/queue.git
```

2.  Install the dependencies:

```
cd queue
yarn install
```

3.  Run the app:

```
npm run ios
npm run android
```
