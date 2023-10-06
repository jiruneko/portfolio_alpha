import React from 'react'
// import { Button } from 'react-bootstrap';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/profile_d1e18fdb594522d478ed9053efcbb983.webp";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Kuma Code</h1>

      <img src={profileImage} className="profileImage" alt="Kuma" />

      <p>
        Kuma-Codeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。主にHTML/CSS/Javascript/Reactメインに取り扱っています。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ECサイト</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">レスポンシブサイト</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ウェブセキュリティ</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
    <div className="text-center">
        <h1 className="title">スキル</h1>
        <div className="row text-center">
            <div className="col-md-4 services">
                <img src={reactImage} alt="React" />
                <h4>React</h4>
                <p>Reactがつかえます</p>
            </div>
            <div className="col-md-4 services">
                <img src={jsImage} alt="JavaScript" />
                <h4>HTML/CSS</h4>
                <p>HTML/CSSがつかえます</p>
            </div>
            <div className="col-md-4 services">
                <img src={firebaseImage} alt="Firebase" />
                <h4>Firebase</h4>
                <p>Firebaseがつかえます</p>
            </div>
        </div>
        スキル一覧(現在搭載中)
    </div>
</section>

    </div>
  )
}

export default HomePage
