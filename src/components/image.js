// import { graphql, StaticQuery } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import React from "react"
// const Image = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allFile(filter: { name: { regex: "/(Project)/i" } }) {
//           edges {
//             node {
//               base
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div className="image-container">
//         <h1>Landscape Photography</h1>
//         <div className="image-grid">
//           {data.allFile.edges.map((image, key) => (
//             <GatsbyImage
//               key={key}
//               className="image-item"
//               constrained
//               alt={image.node.base.split(".")[0]}
//             />
//           ))}
//         </div>
//       </div>
//     )}
//   />
// )

// export default Image
