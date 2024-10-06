# tva

Tailwind Variance Authority

```js
const button = tva({
    color: "blue",
    backgroundColor: "red",
    variants: {
        color: {
            primary: {
                border: "red",
            },
        },
        size: {
            small: {
                fontSize: "0.8rem",
            },
        },
    },
    defaultVariants: {
        size: "small",
    },
    compoundVariants: [
        {
            color: "primary",
            size: "small",
            styles: {
                backgroundColor: "green",
            },
        },
    ],
});


// usage
button({color: 'primary', size: 'small'})
// {
//     color: "blue";
//     backgroundColor: "red";
//     border: "red";
//     fontSize: "0.8rem";
// }

```
