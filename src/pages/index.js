import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>This is an h2</h2>
          <h3>This is an h3</h3>
          <p>This is a p</p>
          <Link className={styles.btn} to="/projects">
            Poke me
          </Link>
        </div>
        {/* not the best way to do images. but it is one way */}
        <img
          src="/BlueHouse.jpg"
          alt="bluehousey"
          style={{ maxWidth: "100%" }}
        ></img>
      </section>
    </Layout>
  )
}
