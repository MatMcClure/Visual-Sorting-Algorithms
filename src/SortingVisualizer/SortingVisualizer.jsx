import React from 'react';
import { getMergeSortAnimations } from '../SortingAlgorithms/SortingAlgorithms.js';
import './SortingVisualizer.css';
import { getBubbleSortAnimations } from '../SortingAlgorithms/SortingAlgorithms.js';

// speed of animations
const ANIMATION_SPEED_MS = 3;

// value of the number of bars in the array
const NUMBER_OF_ARRAY_BARS = 440;

// color of the bars
const PRIMARY_COLOR = 'red';

// color of the bars that are being compared during the animations
const SECONDARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component{
    constructor(props) {
        super (props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromIntervals(10, 900));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {}
        /*const animations = getQuickSortAnimations(this.state.array);*/

    heapSort() {}


    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 4 === 0 || i % 4 === 1;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }      
         
    render() {
        const {array} = this.state;

        return (
          <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" 
                key={idx}
                    style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`}}>
                </div>
                ))}
                <button onClick={() => this.resetArray()}> Generate New Array</button>
                <button onClick={() => this.mergeSort()}> Merge Sort</button>
                <button onClick={() => this.quickSort()}> Quick Sort</button>
                <button onClick={() => this.heapSort()}> Heap Sort</button>
                <button onClick={() => this.bubbleSort()}> Bubble Sort</button>
            </div>
        );
      }
    }

    function randomIntFromIntervals(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    

   // function arraysAreEqual(arrayOne, arrayTwo) {
       // if (arrayOne.length !== arrayTwo.length) 
       // return false;
         // for (let i = 0; i < arrayOne.length; i++) {
           // if (arrayOne[i] !== arrayTwo[i]) {
             // return false;
           // }
       // }
        //return true;
   // }