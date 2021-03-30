import React, { Component } from 'react'

// TERNARY OPERATOR
// export class List extends Component {
//     // we're going to receive an array of string as a prop
//     // this.props.movies
//     render() {
//         return (
//             <ul>
//                 {this.props.movies ? this.props.movies.map((movie, index) =>
//                     <li key={index}>
//                         <p>
//                             {movie.name}
//                         </p>
//                     </li>
//                 ) : <p>I didn't receive an array!</p>}
//             </ul>
//         )
//     }
// }

// export const List = ({movies}) => (
// <ul>
//     {movies ? movies.map((movie, index) =>
//         <li key={index}>
//             <p>
//                 {movie.name}
//             </p>
//         </li>
//     ) : <p>I didn't receive an array!</p>}
// </ul>
// )

// IF / ELSE

// export class List extends Component {
//     render() {
//         // I want to output a message if this.props.movies is null
//         // I want to output the list if this.props.movies is an array with more than 2 movies
//         // I want to output a different component when the movies array has length of one
// if (!this.props.movies) {
//     return (
//         <h2>NOT RECEIVED ANY ARRAY</h2>
//     )
// }
// if (this.props.movies.length === 1) {
//     return (
//         <>
//             <h3>we only have one!</h3>
//             <p>{this.props.movies[0].name}</p>
//         </>
//     )
// }
// if (this.props.movies.length > 1) {
//     return <ul>
//         {this.props.movies.map((movie, index) =>
//             <li key={index}>
//                 <p>
//                     {movie.name}
//                 </p>
//             </li>
//         )}
//     </ul>
// }
//     }
// }

// export const List = ({ movies }) => {
//     if (!movies) {
//         return <h2>NOT RECEIVED ANY ARRAY</h2>
//     }
//     if (movies.length === 1) {
//         return <>
//             <h3>we only have one!</h3>
//             <p>{movies[0].name}</p>
//         </>
//     }
//     if (movies.length > 1) {
//         return <ul>
//             {movies.map((movie, index) =>
//                 <li key={index}>
//                     <p>
//                         {movie.name}
//                     </p>
//                 </li>
//             )}
//         </ul>
//     }
// }

// SHORT-CIRCUIT OPERATOR (&&)
// export class List extends Component {
//     render() {
//         return (
// <>
//     {!this.props.movies && <h1>NOT RECEIVED ANY ARRAY</h1>}
//     {this.props.movies && this.props.movies.length === 1 && <p>{this.props.movies[0].name}</p>}
//     {this.props.movies && this.props.movies.length > 1 && <ul>
//         {this.props.movies.map((movie, i) => (
//             <li key={i}>
//                 {movie.name}
//             </li>
//         ))}
//     </ul>
//     }
// </>
//         )
//     }
// }

export const List = ({ movies }) => (
    <>
        {!movies && <h1>NOT RECEIVED ANY ARRAY</h1>}
        {movies && movies.length === 1 && <p>{movies[0].name}</p>}
        {movies && movies.length > 1 && <ul>
            {movies.map((movie, i) => (
                <li key={i}>
                    {movie.name}
                </li>
            ))}
        </ul>
        }
    </>
)

// && is great for hiding/showing things
// if/else are great for more than two cases
// for just two cases/conditions, the ternary operator is pretty modern and readable