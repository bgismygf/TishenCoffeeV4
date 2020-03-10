<template>
  <div>
    <header class="text-white pb-5 pt-5 header_bg_home bg-cover-c">
      <div class="container">
        <div class="text-center">
          <h1 class="mb-5 font-weight-bold"
            style="margin-top: 125px;">INSTANT. ENJOY. YUMMY</h1>
            <form class="mb-5">
              <router-link to="/product_list" href="#"
                class="btn btn-danger btn-lg px-4 py-2">開始訂購
              </router-link>
            </form>
              <a class="text-decoration-none text-white position-relative" href="#"
                @click.prevent="slide">
                <div class="home_arrow_animation">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </a>
          </div>
        </div>
      </header>

<!-- 介紹區 -->

      <section class="text-white py-5 jq_section1">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section1_img border-radius-10 p-5">
                <h2 class="text-center mb-4 mb-md-5 font-weight-bold">您有以下的困擾嗎？</h2>
                  <div class="row mb-lg-3 mb-4 justify-content-center justify-content-lg-start">
                    <div class="col-lg-6 col-md-9 col-12">
                      <div class="h6 text-center d-lg-none">
                        上班時段緊迫，無法購買早餐
                      </div>
                      <div class="h5 text-lg-right d-none d-lg-block">
                        上班時段緊迫，無法購買早餐
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center justify-content-lg-end mb-lg-3 mb-4">
                    <div class="col-lg-5 col-md-6 col-9">
                      <div class="h6 text-center text-lg-left">
                        上班時段排隊結帳大排長龍
                      </div>
                    </div>
                  </div>
                <div class="row mb-lg-3 mb-4 justify-content-center justify-content-lg-start">
                  <div class="col-lg-5 col-md-7 col-12">
                    <div class="h6 text-center text-lg-left">
                      想多睡一會兒，但還是得早起準備
                    </div>
                  </div>
                </div>
                <div class="row justify-content-lg-end justify-content-center mb-lg-3 mb-4">
                  <div class="col-lg-5 col-md-7 col-12 text-center text-lg-right">
                    <div class="h5 d-none d-lg-block">想喝香濃咖啡，但沒咖啡機</div>
                    <div class="h6 d-lg-none">想喝香濃咖啡，但沒咖啡機</div>
                  </div>
                </div>
                <div class="row justify-content-center justify-content-lg-start mb-lg-3 mb-4">
                  <div class="col-lg-5 col-md-7 col-12">
                    <div class="h5 text-lg-right d-none d-lg-block">
                      昨天太忙忘了先買好早餐
                    </div>
                    <div class="h6 text-center d-lg-none">
                      昨天太忙忘了先買好早餐
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center justify-content-lg-end mb-lg-3 mb-4">
                  <div class="col-lg-5 col-md-7 col-12">
                    <div class="h6 text-center text-lg-left">
                      咖啡機買了，但不會煮......等等
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<!-- 解決區 -->

      <section class="py-5 bg-main text-white">
        <div class="container">
          <h3 class="text-center mb-5 font-weight-bold">以上困擾，讓我們為您解決</h3>
            <div class="row">
              <div class="col-12 col-md-6 pb-4 pb-md-0 px-3">
                <div class="d-flex align-items-top">
                  <div class="mr-3" style="font-size:50px;">
                    <i class="far fa-clock"></i>
                  </div>
                  <div class="pt-3">
                    <h4>增加空閒時間</h4>
                    <p class="">每日 100 元起，就能省下 30～60 分鐘的時間，輕鬆迎來早晨時光。</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mb-4 mb-md-0">
                <div class="d-flex">
                  <div class="mr-3" style="font-size:50px;">
                    <i class="far fa-user-circle"></i>
                  </div>
                  <div class="pt-3">
                    <h4>專業配送</h4>
                    <p>只要一通電話，每日清晨 7：00 前將新鮮、營養、美味送到家，
                        口味和配送日期任您調整。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-md-5">
              <div class="col-12 col-md-6 mb-4 mb-md-0">
                <div class="d-flex">
                  <div class="mr-3" style="font-size:50px;">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div class="pt-3">
                    <h4>安心有保障</h4>
                    <p>採用的食材由知名主廚 Kojiro Shinomiya 和以下認證把關，美味餐點讓您安心享用。</p>
                    <ul>
                      <li>104 年 TQF 認證</li>
                      <li>HACCP 標章</li>
                      <li>鮮乳標章</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mb-4 mb-md-0">
                <div class="d-flex">
                  <div class="mr-3" style="font-size:50px;">
                    <i class="fas fa-utensils"></i>
                  </div>
                  <div class="pt-3">
                    <h4>新鮮不外露</h4>
                    <p>免費提供保溫盒，訂戶不用等候開門。</p>
                    <small class="text-danger">注意事項：</small>
                    <small>
                      為保產品新鮮，開封後請盡速食用；若一時之間無法食用完畢，請放至冰箱冷藏；但冷藏兩小時內（即早上九點前）仍須食用完畢，以免產品變質。
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

<!-- 討論區 -->

      <section class="text-main py-5 position-relative">
        <div class="container">
          <h3 class="text-center mb-4 font-weight-bold">來看看大家怎麼說！</h3>
            <div id="carouselExampleControls" class="carousel slide carousel-fade pb-1"
              data-ride="carousel" data-interval="2000">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row justify-content-center">
                      <div class="col-10 col-md-6 col-lg-4">
                        <div class="media">
                          <img src="https://randomuser.me/api/portraits/men/3.jpg" class="mr-3 section3_comment_dialog rounded-circle" alt="...">
                            <div class="media-body">
                              <div class="alert alert-secondary section3_comment_alert-radius"
                                  role="alert">
                                <h5 class="mt-0">Tony Ooki</h5>
                                <p class="section3_comment_text_overflow">
                                  我家離超商好遠，有訂有輕鬆到！
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6 col-lg-4 d-none d-md-block">
                          <div class="media">
                            <img src="https://randomuser.me/api/portraits/men/6.jpg" class="mr-3 section3_comment_dialog rounded-circle" alt="...">
                              <div class="media-body">
                                <div class="alert alert-secondary section3_comment_alert-radius"
                                  role="alert">
                                <h5 class="mt-0">Masayu Kato</h5>
                                <p class="section3_comment_text_overflow">
                                  下雨天不用出門買吃的，真方便 !
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-4 d-none d-lg-block">
                          <div class="media">
                            <img src="https://randomuser.me/api/portraits/women/4.jpg" class="mr-3 section3_comment_dialog rounded-circle" alt="...">
                              <div class="media-body">
                                <div class="alert alert-secondary section3_comment_alert-radius"
                                  role="alert">
                                  <h5 class="mt-0">Sakura Mana</h5>
                                  <p class="section3_comment_text_overflow">
                                      咖啡品質不錯！
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="row justify-content-center">
                          <div class="col-10 col-md-6 col-lg-4">
                            <div class="media">
                              <img src="https://randomuser.me/api/portraits/women/82.jpg" class="mr-3 section3_comment_dialog rounded-circle" alt="...">
                                <div class="media-body">
                                  <div class="alert alert-secondary section3_comment_alert-radius"
                                    role="alert">
                                    <h5 class="mt-0">Otsuki Hibiki</h5>
                                    <p class="section3_comment_text_overflow">
                                      推薦小籠包和義大利麵，真的好吃！
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-6 col-lg-4 d-none d-md-block">
                              <div class="media">
                                <img src="https://randomuser.me/api/portraits/men/9.jpg" class="mr-3 section3_comment_dialog rounded-circle" alt="...">
                                  <div class="media-body">
                                    <div class="alert alert-secondary section3_comment_alert-radius"
                                      role="alert">
                                      <h5 class="mt-0">Megu Fujiura</h5>
                                      <p class="section3_comment_text_overflow">
                                          減去買早餐的時間直接省２小時！
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-lg-4 d-none d-lg-block">
                                <div class="media">
                                  <img src="https://randomuser.me/api/portraits/women/80.jpg" class="mr-3 section3_comment_dialog rounded-circle" alt="...">
                                    <div class="media-body">
                                      <div class="alert alert-secondary
                                        section3_comment_alert-radius" role="alert">
                                        <h5 class="mt-0">Kaori Maeda</h5>
                                        <p class="section3_comment_text_overflow">
                                            期待新菜單：）
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="carousel-item">
                              <div class="row justify-content-center">
                                <div class="col-10 col-md-6 col-lg-4">
                                  <div class="media">
                                    <img src="https://randomuser.me/api/portraits/women/70.jpg" class="mr-3 section3_comment_dialog rounded-circle" alt="...">
                                    <div class="media-body">
                                      <div class="alert alert-secondary
                                        section3_comment_alert-radius" role="alert">
                                        <h5 class="mt-0">Hatano Yui</h5>
                                        <p class="section3_comment_text_overflow">
                                          既能吃的美味還省時，cp值真是好！
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="col-md-6 col-lg-4 d-none d-md-block">
                                  <div class="media">
                                    <img src="https://randomuser.me/api/portraits/women/10.jpg" class="mr-3 section3_comment_dialog rounded-circle" alt="...">
                                      <div class="media-body">
                                        <div class="alert alert-secondary
                                          section3_comment_alert-radius" role="alert">
                                          <h5 class="mt-0">Yua Mikami</h5>
                                            <p class="section3_comment_text_overflow">
                                              對於累到不想早起的我，很推薦！
                                          </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                  <div class="media">
                                    <img src="https://randomuser.me/api/portraits/women/33.jpg" class="mr-3 section3_comment_dialog rounded-circle" alt="...">
                                    <div class="media-body">
                                      <div class="alert alert-secondary
                                        section3_comment_alert-radius" role="alert">
                                        <h5 class="mt-0">Aoi Sora</h5>
                                        <p class="section3_comment_text_overflow">
                                          推拿鐵，好喝！！
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a class="carousel-control-prev" href="#carouselExampleControls"
                            role="button" data-slide="prev">
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleControls"
                            role="button" data-slide="next">
                          </a>
                        </div>
                      <div>
                      <router-link to="/product_list" href="#"
                        class="btn btn-danger btn-lg text-center position-absolute px-4 py-2
                          section3_comment_btn">
                            前往菜單
                        <i class="fas fa-arrow-right"></i>
                      </router-link>
                    </div>
                  </div>
                </section>
<!-- 訂閱 -->
                <section class="bg-match text-white py-5">
                  <div class="container">
                    <h3 class="text-center mt-3 mb-4 font-weight-bold">
                      即將出新菜單，趕快來訂閱吧 !
                    </h3>
                  <div class="form-row align-items-center justify-content-center">
                  <div class="col-12 col-md-8">
                    <div class="input-group">
                      <input type="email" name="email" class="form-control py-2"
                        id="email"
                        placeholder="輸入 Email ，按下訂閱獲取新菜單"
                        v-model="subscriptionInput"
                        v-validate="'required|email'"
                        :class="{'is-invalid': errors.first('email')}">
                    <div class="input-group-append">
                    <button class="btn btn-danger"
                      type="button"
                      id="button-addon2"
                      @click="subscription">
                      訂閱
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-danger pt-2 text-center" v-if="errors.has('email')">
              {{errors.first('email')}}
            </div>
          </div>
        </section>
      </div>
    </template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      subscriptionInput: '',
    };
  },
  methods: {
    slide() {
      const target = $('.jq_section1').offset().top;
      $('html,body').animate({ scrollTop: target }, 1000);
    },
    subscription() {
      const vm = this;
      vm.$validator.validate().then((valid) => {
        if (!valid) {
          vm.$bus.$emit('message:push', '請輸入 Email', 'danger');
        } else {
          vm.$bus.$emit('message:push', '訂閱成功', 'success');
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header_bg_home {
  background-image: url(https://images.unsplash.com/photo-1558584724-0e4d32ca55a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80);
  // min-height: calc(100vh - 66px);
  height: 510px;
  background-blend-mode:multiply;
  background-color: rgb(109, 109, 109);
}

.home_arrow_animation {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation-name:arrow;
  animation-duration:2s;
  animation-iteration-count:infinite;
}

@keyframes arrow {
  from {
    top:30px;
  } to {
    top:60px;
    color: transparent;
  }
}

.section1_img {
  background-image: url(../../assets/img/upset.jpg);
  background-position: center center;
  background-size: cover;
  background-blend-mode:multiply;
  background-color: rgb(109, 109, 109);
  background-attachment: fixed;
}

.section3_comment_text_overflow {
  height: 60px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
}

.section3_comment_dialog {
  width:64px;
  height:64px;
}

.section3_comment_alert-radius {
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.section3_comment_btn {
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
