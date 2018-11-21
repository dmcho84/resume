import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";

import "./Resume.scss";

class ListPage extends Component {
  handleNav = () => {
    this.props.BaseActions.toggleNav();
  };

  render() {
    const { status } = this.props;
    return (
      <div className="resume-wrap">
        <div className="visual">
          <span>THE LEGENDARY</span>
          <h1>DONGMIN CHO</h1>
          <span>WEB FRONT-END ENGINEER</span>
        </div>
        <div className="resume">
          <section className="personal">
            <div className="information">
              <div className="picture">
                <img src="" alt="" />
              </div>
              <article className="info">
                <div className="sub-title">PERSONAL</div>
                <ul className="list-underline">
                  <li className="item">
                    <span className="key">Name</span>
                    <span className="value">Dongmin Cho</span>
                  </li>
                  <li className="item">
                    <span className="key">Relationship</span>
                    <span className="value">Single</span>
                  </li>
                  <li className="item">
                    <span className="key">Gender</span>
                    <span className="value">Male</span>
                  </li>
                </ul>
              </article>

              <article className="info">
                <div className="sub-title">CONTACT</div>
                <ul className="list-underline">
                  <li className="item">
                    <span className="key">Mobile</span>
                    <span className="value">+82-10-2964-1129</span>
                  </li>
                  <li className="item">
                    <span className="key">Email</span>
                    <span className="value">Dmcho84@gmail.com</span>
                  </li>
                  <li className="item">
                    <span className="key">Address</span>
                    <span className="value">
                      24 ,Jungdae-ro Songpa-gu Seoul, Republic of Korea
                    </span>
                  </li>
                </ul>
              </article>

              <article className="info">
                <div className="sub-title">REFERENCES</div>
                <ul className="list-underline">
                  <li className="item">
                    <a href="htpps://binplate.com" target="_blank">
                      htpps://binplate.com
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="http://juni84.synology.me/front/portfolio"
                      target="_blank"
                    >
                      http://juni84.synology.me
                    </a>
                  </li>
                </ul>
              </article>
            </div>

            <article className="links">
              <div className="sub-title">Links</div>

              <ul className="list-thumbnail">
                <li className="item">
                  <a href="https://www.instagram.com/dmcho1129" target="_blank">
                    <span className="thumb">img</span>
                    <span className="key">www.instagram.com</span>
                    <span className="value">/dmcho1129</span>
                  </a>
                </li>
                <li className="item">
                  <a href="https://www.facebook.com/Juni1984" target="_blank">
                    <span className="thumb">img</span>
                    <span className="key">www.facebook.com</span>
                    <span className="value">/Juni1984</span>
                  </a>
                </li>
              </ul>
            </article>
          </section>

          <section className="profile">
            <acticle className="paragraph">
              <h2 className="sub-title">PROFILE</h2>
              <div className="content">
                <div className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum dolor, doloribus nihil aspernatur ut a consequuntur,
                  cumque voluptatum nisi labore mollitia? Sit perspiciatis
                  doloremque reiciendis quasi officiis, tempore dicta error?
                </div>
              </div>
            </acticle>

            <acticle className="paragraph">
              <h2 className="sub-title">EXPERIENCE</h2>
              <div className="content">
                <ul className="list-history">
                  <li className="item">
                    <div className="name">오키컨세션</div>
                    <div className="term">
                      <span className="start">2017.2</span>
                      <span className="end">Now</span>
                    </div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Unde, iusto?
                    </div>
                  </li>
                  <li className="item">
                    <div className="name">호기</div>
                    <div className="term">
                      <span className="start">2016.4</span>
                      <span className="end">2017.2</span>
                    </div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Unde, iusto?
                    </div>
                  </li>
                  <li className="item">
                    <div className="name">파일쿠키</div>
                    <div className="term">
                      <span className="start">2016.1</span>
                      <span className="end">2016.3</span>
                    </div>
                    <div className="description">
                      웹하드 업계에서 유명한 위디스크의 형제 서비스인
                      파일쿠키에서 서비스 페이지 유지보수 업무를 진행하였으며
                      협력업체의 웹툰 사이트의 리뉴얼도 진행하였습니다.
                    </div>
                  </li>
                </ul>
              </div>
            </acticle>

            <acticle className="paragraph">
              <h2 className="sub-title">EDUCATION</h2>
              <div className="content">
                <ul className="list-history">
                  <li className="item-history">
                    <div className="name">Culture Craft</div>
                    <div className="term">
                      <span className="start">2017</span>
                      <span className="end">Now</span>
                    </div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Unde, iusto?
                    </div>
                  </li>
                  <li className="item-history">
                    <div className="name">Culture Craft</div>
                    <div className="term">
                      <span className="start">2017</span>
                      <span className="end">Now</span>
                    </div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Unde, iusto?
                    </div>
                  </li>
                  <li className="item-history">
                    <div className="name">Culture Craft</div>
                    <div className="term">
                      <span className="start">2017</span>
                      <span className="end">Now</span>
                    </div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Unde, iusto?
                    </div>
                  </li>
                </ul>
              </div>
            </acticle>

            <acticle className="paragraph">
              <h2 className="sub-title">SKILLS</h2>
              <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum dolor, doloribus nihil aspernatur ut a consequuntur,
                cumque voluptatum nisi labore mollitia? Sit perspiciatis
                doloremque reiciendis quasi officiis, tempore dicta error?
              </div>
            </acticle>
          </section>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    status: state.base.get("status").toJS()
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ListPage);
