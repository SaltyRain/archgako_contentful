import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        {/* <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div> */}

<main>
        <section class="promo container animate__animated animate__fadeIn">
            <h1 class="visually-hidden">АРХИТЕКТУРНОЕ БЮРО Archgako</h1>
            <div class="promo-logo site-logo">
                <span class="promo-logo--archgako site-logo--archgako">ARCHGAKÒ</span>
                <span class="promo-logo--sign site-logo--sign">architecture and interior design</span>
            
            {/* <!-- Добавить стрелку, которая прокрутит страницу ниже --> */}
            </div>
        </section>
        <section class="about container" data-aos="fade-up">
            <div class="about--photo-wrapper">
                <h2 class="about--title">О студии</h2>
                <img class="about--photo" src="./img/about.jpg" alt="Фото основателей студии"/>
            </div>
            
            {/* <!-- <div class="about--est"> --> */}
                
            {/* <!-- </div> --> */}
            
            <div class="about--desc">
                <div class="about--text-wrapper">
                    <p>Студия ARCHGAKÒ с 2017 года создает интерьерные, архитектурные и градостроительные проекты различного уровня сложности. Для нас важен баланс качества и скорости выполнения проектов.</p>
                    <p>Мы стараемся для Вас! Проверяем каждую деталь и следим за качеством материалов, чтобы вы испытывали истинное наслаждение, возвращаясь каждый день в уютный дом, сделанный по вашим требованиям!</p>
                    <p>Выбирая ARCHGAKÒ, вы получаете красивый, уютный и эргономичный интерьер, созданный профессионалами.</p>
                    
                </div>
                
                <span class="about--est">est. 2017</span>

                <a href="about.html" class="button about--button">Подробнее</a>

            </div>
        </section>
        
        <section class="container section--index" data-aos="fade-up">
            <h3 class="section--heading">Последние события</h3>
            <div class="slider">
                <button type="button" class="arrow swiper-button-prev">
                    <div class="slider--triangle slider--triangle_left"></div>
                </button>
                <div class="slider--wrapper swiper-container">
                    <div class="slider--items-wrapper swiper-wrapper">
                        <a href="#" class="slider--link swiper-slide">
                            <div class="event slider--item ">
                                <div class="event--image-wrapper">
                                    <img src="./img/news1.jpg" alt="Courtyard party paris design week"/>
                                    {/* <!-- <div class="event--image-shadow">box</div> --> */}
                                </div>
                                <p class="event--title">CELEBRATING CRAFTSMANSHIP AND DESIGN MILAN DESIGN WEEK</p>
                                <span class="event--year">2019</span>
                            </div>
                        </a>
                       <a href="#" class="slider--link swiper-slide">
                        <div class="event slider--item">
                            <div class="event--image-wrapper">
                                <img src="./img/news2.jpg" alt="Courtyard party paris design week"/>
                                {/* <!-- <div class="event--image-shadow">box</div> --> */}
                            </div>
                            <p class="event--title">Courtyard party paris design week</p>
                            <span class="event--year">2019</span>
                        </div>
                       </a>
                       <a href="#" class="slider--link swiper-slide">
                        <div class="event slider--item">
                            <div class="event--image-wrapper">
                                <img src="./img/news3.jpg" alt="Courtyard party paris design week"/>
                                {/* <!-- <div class="event--image-shadow">box</div> --> */}
                            </div>
                            <p class="event--title">Courtyard party paris design week</p>
                            <span class="event--year">2018</span>
                        </div>
                       </a>
                        <a href="#" class="slider--link swiper-slide">
                            <div class="event slider--item">
                                <div class="event--image-wrapper">
                                    <img src="./img/news3.jpg" alt="Courtyard party paris design week"/>
                                    {/* <!-- <div class="event--image-shadow">box</div> --> */}
                                </div>
                                <p class="event--title">Courtyard party paris design week</p>
                                <span class="event--year">2019</span>
                            </div>
                        </a>
                        <a href="#" class="slider--link swiper-slide">
                            <div class="event slider--item">
                                <div class="event--image-wrapper">
                                    <img src="./img/news3.jpg" alt="Courtyard party paris design week"/>
                                    {/* <!-- <div class="event--image-shadow">box</div> --> */}
                                </div>
                                <p class="event--title">Courtyard party paris design week</p>
                                <span class="event--year">2019</span>
                            </div>
                        </a>
                    </div>
                </div>
                <button type="button" class="arrow swiper-button-next">
                    <div class="slider--triangle slider--triangle_right"></div>
                </button>
            </div>
        </section>
        
        <section >
            <div class="container section--index">
                <div class="dot" data-aos="fade-up"></div>
                <h2 class="section--heading section--heading_projects" data-aos="fade-up">Проекты</h2>
            </div>
            <div class="bg" data-aos="fade-up">
                <div class="container slider-project">
                        <div class="swiper-container swiper-container-projects">
                            <button type="button" class="arrow swiper-button-prev swiper-button-prev-project">
                                <div class="slider--triangle slider--triangle_left"></div>
                            </button>
                            <div class="slider--items-wrapper swiper-wrapper">
                                <div class="slider-project--image-wrapper swiper-slide">
                                    <img src="./img/carus1.jpg" alt="проект"/>
                                </div>
                                <div class="slider-project--image-wrapper swiper-slide">
                                    <img src="./img/carus2.jpg" alt="проект"/>
                                </div>
                        </div> 
                        <button type="button" class="arrow swiper-button-next swiper-button-next-project">
                            <div class="slider--triangle slider--triangle_right"></div>
                        </button>
                        <div class="swiper-pagination swiper-pagination-bullets swiper-container-projects-pagination"></div>
                        </div>    
                    <p class="slider-project--description">
                        Задача организации, в особенности же укрепление и развитие структуры позволяет оценить значение систем массового участия. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.
                    </p>

                    <a href="projects.html" class="slider-project--link"> <span class="slider-project--link_text">Все проекты</span><span class="slider-project--link-arrow">&#10230</span></a>
                </div>
            </div>
        </section>

        <section class="container section--index section--advantages">
            <div class="dot" data-aos="fade-up"></div>
            <h2 class="section--heading" data-aos="fade-up">Проект с ARCHGAKÒ  - это</h2>
            <div class="advantages">
                <div class="advantages--item advantage" data-aos="fade-up">
                    <div class="advantage--image">
                        <img src="./img/adv-1.png" alt="преимущество 1"/>
                    </div>
                    <div class="advantage--text">
                        <span class="advantage--heading">ИНДИВИДУАЛЬНОЕ РЕШЕНИЕ</span>
                        <p class="advantage--desc">Создаем адаптивную среду, учитывая особенности и специфику нашего клиента.</p>
                    </div>
                </div>

                <div class="advantages--item advantage" data-aos="fade-up">
                    <div class="advantage--image">
                        <img src="./img/adv-2.png" alt="преимущество 1"/>
                    </div>
                    <div class="advantage--text">
                        <span class="advantage--heading">ТЕХНОЛОГИЯ И ЭРГОНОМИЧНОСТЬ</span>
                        <p class="advantage--desc">Следим за новейшими разработками в области проектирования, Smart Home, VR reality, параметрическое генерирование и моделирование пространства.</p>
                    </div>
                </div>

                <div class="advantages--item advantage" data-aos="fade-up">
                    <div class="advantage--image">
                        <img src="./img/adv-3.png" alt="преимущество 1"/>
                    </div>
                    <div class="advantage--text">
                        <span class="advantage--heading">СРОКИ ВЫПОЛНЕНИЯ РАБОТ</span>
                        <p class="advantage--desc">Мы живём в современном ритме и ценим ваше и наше время, поэтому мы всегда находим баланс скорости и качества выполнения работ.</p>
                    </div>
                </div>

                <div class="advantages--item advantage" data-aos="fade-up">
                    <div class="advantage--image">
                        <img src="./img/adv-4.png" alt="преимущество 1"/>
                    </div>
                    <div class="advantage--text">
                        <span class="advantage--heading">ЭКОНОМИЯ ВАШИХ РЕСУРСОВ</span>
                        <p class="advantage--desc">Наше комплексное решение позволяет рационально распределить ваши средства и сэкономить до 20% бюджета и до 50% времени.</p>
                    </div>
                </div>

                <div class="advantages--item advantage" data-aos="fade-up">
                    <div class="advantage--image">
                        <img src="./img/adv-5.png" alt="преимущество 1"/>
                    </div>
                    <div class="advantage--text">
                        <span class="advantage--heading">РЕЗУЛЬТАТ</span>
                        <p class="advantage--desc">Ведем проекты от обмеров до финальной комплектации и декорирования. В итоге вы получаете обустроенное и детализированное пространство.</p>
                    </div>
                </div>

                <div class="advantages--item advantage" data-aos="fade-up">
                    <div class="advantage--image">
                        <img src="./img/adv-6.png" alt="преимущество 1"/>
                    </div>
                    <div class="advantage--text">
                        <span class="advantage--heading">ПЕРСОНАЛЬНАЯ СВЯЗЬ</span>
                        <p class="advantage--desc">Мы быстро находим выход из непредвиденных ситуаций и проводим профессиональные консультации. Мы на связи из любой точки мира!</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container request-form section--index" data-aos="fade-up">
            <div class="contacts--row">
                <div class="contacts--col">
                    <h3 class="section--heading section--heading_left request-form--title">Обратиться в студию</h3>
                    <p class="brown-text request-form--desc">Ответим на вопросы, обсудим ваш проект</p>
                </div>
                <div class="contacts--col">
                    <form class="form form_short">
                        <div class="form--row">
                            <input class="form--input" type="text" name="fio" placeholder="Ваше имя*" required/>
                        </div>
                        <div class="form--row">
                            <input class="form--input" type="tel" name="tel" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" placeholder="Телефон*" required/>
                        </div>
                        <div class="form--row form--policy-acceptance">
                            <div class="checkbox">
                                <input class="custom-checkbox" type="checkbox" id="request-form-accept-checkbox" name="color-1" value="indigo" required/>
                                <label for="request-form-accept-checkbox">Даю согласие на обработку персональных данных в соответствии с<a href="policy.html" >правилами пользования сайтом.</a></label>
                            </div>
                        </div>
                        <div class="form--row">
                            <input class="form--button button button_disable" type="submit" value="Отправить"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <div class="container button-up--wrapper">
            <a href="#header" id="buttonUp" class="button-up"></a>
        </div>
        
    </main>
      </Layout>
    )
  }
}

export default RootIndex

// export const pageQuery = graphql`
//   query HomeQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//     allContentfulPerson(
//       filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
//     ) {
//       edges {
//         node {
//           name
//           shortBio {
//             shortBio
//           }
//           title
//           heroImage: image {
//             fluid(
//               maxWidth: 1180
//               maxHeight: 480
//               resizingBehavior: PAD
//               background: "rgb:000000"
//             ) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `
