// ==UserScript==
// @name         LubimyCzytac Dark Theme 2023
// @namespace    http://tampermonkey.net/
// @version      0.0.3
// @description  Dark Theme for LubimyCzytac
// @author       Binarny
// @match        https://lubimyczytac.pl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lubimyczytac.pl
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @run-at      document-start
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function() {
	darkMode();
	GM_addStyle(`

#randomLibrary {display: none;}
#searchMoreFriends {background-image: none !important; background-color: #252525;}
#searchtype {background-color: #222;}
.addBookHelpers__text {color: #ddd;}
.addBookInputs__label {color: #ddd;}
.addBookTitle {background: #444;}
.add-opinion .your-opinion .avatar-container {background: #444;}
.add-opinion .your-opinion {background: #444;}
.add-opinion .your-opinion--down::before {border-color:#444 rgba(0,0,0,0) rgba(0,0,0,0);}
.around-book__text {color: #ddd;}
.around-book-news__small {background: #222;}
.authorAllBooks__singleExtraPrice {color: #ddd;}
.authorAllBooks__singleTextSeries {color: #ddd;}
.authorAllBooks__singleTextShelfLeft {color: #ddd;}
.authorAllBooks__sortTitle {color: #ddd;}
.beforeYouAddBook {background: #333; padding-bottom: 10px;}
.beforeYouAddBook--white {background: #333; color: #ddd;}
.bgBlue {background: #2b5390; color: #eee;}
.bg-white {background-color: #333 !important;}
.book .btn.read-action, .book .read-action.cancel-report-a-bug, .book .read-action.send-report-a-bug, .book body.series_addbookstoshelf .read-action.btn--serie-save, body.series_addbookstoshelf .book .read-action.btn--serie-save {background: #333; color: #ccc!important;}
.book .btn-collapsed--details::after {background: none;}
.book .rating {background: #333;}
.book .title-container {background: #414141;}
.book .title-container::before {color: #aaa;}
.book {background: #3a3a3a;}
.book-cover__icon__item {background: #333;}
.book-cover__icons-hld {background: linear-gradient(to left, #333, #333, transparent);}
.book-menu .btn .button-imgIco, .book-menu .cancel-report-a-bug .button-imgIco, .book-menu .send-report-a-bug .button-imgIco, .book-menu body.series_addbookstoshelf .btn--serie-save .button-imgIco, body.series_addbookstoshelf .book-menu .btn--serie-save .button-imgIco {color: white;}
.book-menu .btn span.icon, .book-menu .cancel-report-a-bug span.icon, .book-menu .send-report-a-bug span.icon, .book-menu body.series_addbookstoshelf .btn--serie-save span.icon, body.series_addbookstoshelf .book-menu .btn--serie-save span.icon {color: #ddd;}
.book-menu .btn, .book-menu body.series_addbookstoshelf .btn--serie-save, body.series_addbookstoshelf .book-menu .btn--serie-save, .book-menu .cancel-report-a-bug, .book-menu .send-report-a-bug {background: #333 !important; color: skyblue !important;}
.book-menu .btn, .book-menu body.series_addbookstoshelf .btn--serie-save, body.series_addbookstoshelf .book-menu .btn--serie-save, .book-menu .cancel-report-a-bug, .book-menu .send-report-a-bug {color: white; background: #444;}
.book-menu {background: #333 !important;}
.btn-collapsed--gradient::after {background: none;}
.btn-link {color: lightblue;}
.btn-primary, .cancel-report-a-bug, .send-report-a-bug, body.series_addbookstoshelf .btn--serie-save {color: #ddd;}
.btn-secondary, .send-report-a-bug {background-color: #333 !important;}
.btn-secondary:hover:not(.btn--filters), .send-report-a-bug:hover:not(.btn--filters), .btn-secondary:focus:not(.btn--filters), .send-report-a-bug:focus:not(.btn--filters) {background-color: #111 !important;}
.btnSocialsBottom .btn-link {color: #ddd;}
.card {background-color: #333;}
.chart .progress {background-color: #333;}
.comments-list .comment .comment-cloud .date {color: #ddd;}
.comments-list .comment .comment-cloud {background: #444;}
.comments-list .comment .comment-cloud::before {border-color: rgba(0,0,0,0) #444 rgba(0,0,0,0) rgba(0,0,0,0);}
.dashboard__challenge__stats {background: #444;}
.dashboard__challenge__take {background: #444;}
.dashBoardAccount__friends__info {color: inherit;}
.dashBoardAccount__introFourth {color: lightblue;}
.dashBoardAccount__profilInfoStatusLeft {color: lightblue;}
.dashBoardAccount__statsBgDark {background: #444;}
.dashBoardAccount__statsBgLightBlue {background: #111;}
.dashBoardActivity__singleInfoReviewInside {background: #444;}
.dashBoardActivity__singleInfoReviewInside::before {border-color: rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #444;}
.dashBoardActivity__singleTopInfo a {color: lightskyblue;}
.datepicker .datepicker-switch:hover, .datepicker .next:hover, .datepicker .prev:hover, .datepicker tfoot tr th:hover {background: #222;}
.datepicker table tr td span.focused, .datepicker table tr td span:hover {background: #222; color: orange;}
.dropdown-menu {background-color: #333; color: #ddd;}
.dropdown--user a {color: #ddd;}
.error404__right {filter: invert(80%) hue-rotate(170deg);}
.filtr__button {color: skyblue;}
.filtr__itemTitle {color: #ddd;}
.filtr__title {color: #ddd;}
.form__checkboxTitle {color: #fff;}
.form__input, .report-a-bug-form-container input {color: #ddd;}
.form__label {color: #fff;}
.form__photo {background: #3a3a3a;}
.form__photoMiddle {color: beige;}
.form__text  {color: #ddd;}
.form-control {background-color: #333; color: #ddd;}
.form-control:focus {color: orange; background-color: #111;}
.forumPosts__bodyGroup {color: #ddd;}
.forumPosts__bodyGroupLink {color: skyblue;}
.forumPosts__bodyItem--notifications {background: #272727;}
.forumPosts__bodyItem--notifications.is-new {background: rgba(44, 138, 86, 0.25);}
.forumPosts__header--jobPage {background: #444;}
.forumUsers__commentAdd__write__textarea {background: #3f3f3f;}
.greyBg {background-color: #131313;}
.header {background: #333;}
.header__primary {background: #333;}
.header__secondary {background: #333;}
.img-centered-background, .quotes__details__col .small-book-cover, .quotes__details__col .authorAllBooks__singleImgWrap {background-color: #131313;}
.is-search-open .header__wrapper {background: #333;}
.librabryBookshelf__button {color: skyblue;}
.libraryTop__bg {background-color: #444;}
.listFiltered-hld {background: #333;}
.list-group-item {background-color: #333;}
.list-group-item {color: #ddd;}
.listLibrary__dropDownList {background: #262626;}
.listLibrary__ratingAll {color: #ddd;}
.listLibrary__ratingStars {color: #ddd;}
.listLibrary__ratingText {color: #dadada;}
.logo__image {filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(170deg) brightness(103%) contrast(104%);}
.mapContainer__detailsListItem:hover, .mapContainer__detailsListItem:focus {background: #222;}
.mapContainer__detailsListItem__text {color: #ddd;}
.menu__item a {color: #cdf;}
.messages-hld .inbox-head {background: #262626;}
.messages-hld .mail-box .lg-side {background: #444;}
.messages-hld .mail-box .sm-side {background: #222;}
.messages-hld .mail-option .chk-all, .messages-hld .mail-option .btn-group a.btn, .messages-hld .mail-option .btn-group a.cancel-report-a-bug, .messages-hld .mail-option .btn-group a.send-report-a-bug, .messages-hld .mail-option .btn-group body.series_addbookstoshelf a.btn--serie-save, body.series_addbookstoshelf .messages-hld .mail-option .btn-group a.btn--serie-save {background: #242424;}
.modal .modal-header {background-color: #103b79; color: #fff;}
.modal-content {background-color: #222;}
.newsCats__date {color: #ddd;}
.newsRelated__bg--light {background: #3d3d3d;}
.official-review {background-color: inherit;}
.official-review__titleTop {background: #444;}
.official-review-home__dateBottom {color: #ddd;}
.official-review-home__grey--blue {background: #444;}
.official-review-home__nick {color: skyblue;}
.official-review-home__review::before {background: #444;}
.official-review-home__review--blue {background: #444;}
.official-review-home__text--blue {color: #ddd;}
.official-reviews-tile .official-reviews-tile__intro {color: #ccc;}
.official-reviews-tile .official-reviews-tile__nick {color: #cdcdcd;}
.official-reviews-tile .official-reviews-tile__title {color: #dedede;}
.official-reviews-tile .official-reviews-tile__top {color: #bbb;}
.official-reviews-tile .official-reviews-tile__top span {color: #dedede;}
.opinion .rating, .opinion .your-rating {background: #444}
.paginationList__input {background-color: #333; color: #ddd; }
.popular-books {background: #444;}
.preStyledForm__input {color: #eeb;}
.profilInfo__libraryTop__bg_grey {background-image: none !important;}
.profilReview__bg {background: #444;}
.quotes .quote {background-image: none;}
.quotes .quote.no-quotes .card-body h3 {color: lightskyblue;}
.quotes .quote.no-quotes {background: none;}
.quotes .quote.no-quotes {background-image: none !important;}
.quotes .quote.no-quotes {background-image: none;}
.registerProcess input:-webkit-autofill, .registerProcess input:-webkit-autofill:hover, .registerProcess input:-webkit-autofill:active, .registerProcess input:-webkit-autofill:focus {background-color: #444 !important; color: #ccc !important; -webkit-box-shadow: 0 0 0 1000px #ededed inset !important; -webkit-text-fill-color: #ccc !important;}
.registerProcess__left {background-color: #444;}
.registerProcess__leftOr span {background-color: #444;}
.related-content {background-color: #444;}
.report-a-bug-form-container {background-color: #444;}
.result-tile__wrapper {color: #ddd;}
.result-tile--no-image .result-tile__wrapper .result-tile__image-wrapper {background-color: #222;}
.searchbox {background: #3a3a3a;}
.searchbox__button {background: #222;}
.searchbox__cancel:hover, .searchbox__cancel:focus {color: #ddd;}
.searchbox__input {background: #222; border-color: #222;}
.searchbox__input {color: white;}
.searchbox__input:hover, .searchbox__input:focus {border-color: black;}
.searchUserResults__listItems {background: #aaa; box-shadow: none;}
.small-book .small-book-author {color: #ddd;}
.small-book .small-book-title {color: lightskyblue;}
.social-square .social-square__header {color: #ddd;}
.social-square__avatar {display: none;}
.societyContainer-hld .society-item {color: skyblue;}
.societyContainer-hld {background-color: #131313;}
.suggestions::after {background: none;}
.suggestions__cta:hover, .suggestions__cta:focus {background-color: #333;}
.table-inbox {color: #ddd;}
.tabsNav__sortSelectInside, .report-a-bug-form-container select {background: #333;}
.tabsNav__sortSelectInside, .report-a-bug-form-container select {color: #ddd;}
.tagify__input::before {color: #ccc;}
.t-blue, .blue {color: lightskyblue;}
.text-dark {color: #c7c7a9 !important;}
.text-dark {color: #c7c7a9 !important;}
.t-grey, .grey {color: #ddd;}
.tile__author {color: #ddd;}
.tile__intro, .tile__title {color: #ddd;}
a {color: lightskyblue;}
a:link {color: lightskyblue;}
body {background-color: #333; color: #ddd;}
body::-webkit-scrollbar {background: #353535;}
body:not(.cms_gettext) .quotes .quote .card-body .card__bottom-btnLight, body:not(.cms_gettext) .card__bottom-btnLight {color: #ddd}
body:not(.cms_gettext) .quotes .quote .card-footer.card-footer--light {background: #3c3c3c;}
body:not(.cms_gettext) .quotes .quote {background: #444;}
button.menu__button {color: white;}
div.comment-cloud__body p {color: #000;}
div.comment-cloud__body p {color: #ddd;}
div.dashBoardAccount__friends__wrap {background: #444;}
div.dashBoardAccount__intro {background: #333;}
div.dashBoardAccount__introFourth {background: #444;}
div.dashBoardAccount__libraryItemsHld {background: #444;}
div.dashBoardActivity__singleInfoBookSeries {color: #ddd;}
div.dashBoardActivity__singleTopInfo {color:#ddd;}
div.dashBoardActivity__undeTitle {color: #ddd;}
div.overlay {background: #333;}
h2.dashBoardAccount__title {color: lightskyblue;}
input {background-color: #444;}
input {color: white;}
messages-hld ul.inbox-nav li a {color: #ccc;}
.around-book-news__smallGrey {background-color: #161616;}
.around-book__tag {background: #30578e;}
.container-fluid {background: #1a1a1a;}
.cover-tile .cover-tile__author, .cover-tile .cover-tile__title {color: #b4b4b4;}
.info-icon {background: #2b5390;}
.our-reviewers .our-reviewers__col {color: #bd4000;}
.our-reviewers .our-reviewers__count {color: #aaa;}
.our-reviewers .our-reviewers__nick {color: #c4c4c4;}
.our-reviewers .our-reviewers__status {color: #bbb;}
.report-a-bug-form h5 {background: #2b5390;}
.result-tile__badge {background-color: #602000;}
.small-book .small-book-cover .rating {background: #2b5390;}
.small-book-details {background: #2b5390;}
.suggestions__cta {background-color: #ff550050;}
.tabs .tabs__item {color: #eee;}
.tile--category-13 .tile__category {background: rgba(60,20,20,.8);}
.tile__comments {color: #b1b1b1;}
body.author_gettext .small-book-details.small-book-details-rating {background: #2b5390;}

.community-most-active-tile .community-most-active-tile__nick {color: #c3c3c3;}
.community-most-active-tile .community-most-active-tile__num {color: #c3c3c3;}
.forum-most-commented-tile .forum-most-commented-tile__bottom {background: #1a1a1a;}
.forum-most-commented-tile .forum-most-commented-tile__nick {color: #c3c3c3;}
.forum-most-commented-tile .forum-most-commented-tile__post-intro {color: #c3c3c3;}
.forum-most-commented-tile .forum-most-commented-tile__title {color: #eee;}
.forumPosts__messagesList__badge {background: #ff670050;}
.latest-activites .latest-activites__secondary {background: #1a1a1a;}
.reviews-tile--featured::before {background-color: #1a1a1a;}
.reviews-tile__content {color: #eee;}
.reviews-tile__reviewer {color: #eee;}
.reviews-tile__time {color: #bababa;}
.social-buttons .social-button--counter {color: #bababa;}
.video-tile__date {color: #bababa;}
.video-tile__title {color: #ddd;}
.quote-tile::before {color: #1a1a1a;}
.quote-tile--featured::before {color: #1a1a1a;}
.challenge-taken__title {color: #eee;}
.challenge-taken .challenge__progress {background: #1a1a1a;}
.challenge-taken .challenge__counter {color: #eee;}
.challenge-taken__info {color: #eee;}
.challenge__sidebar-heading {color: #eee; background: #1a1a1a;}
.challenge__sidebar-users {background: #1a1a1a;}
.challenge__nick {color: #eee;}
.challenge__time {color: #bababa;}
.calendar__anniversary--birth {background: #184d0a;}
.calendar__input {background: #333; color: #eee;}
.calendar__date .calendar__button, .calendar__date .calendar__button--datepicker {background: #333;}

@media (min-width: 992px) {
	.book .book-cover {border: 0.9375rem solid #3f3f3f;}
	.dropdown--user .dropdown__content {background-color: #333;}
	.menu__item.is-active .menu__list {background: #333;}
}

@media (min-width: 1264px) {
	.user--button .user__name {color: #ddd;} .user--button::after {color: #ddd;}
}

	`);
});

document.addEventListener('keydown', function(e) {
	if (e.key == 'F8') {
		e.preventDefault();
		GM_setValue('darkMode', !GM_getValue('darkMode') || false);
		darkMode();
	}
});

function darkMode() {
	if (GM_getValue('darkMode'))
		document.documentElement.classList.add('dark');
	else
		document.documentElement.classList.remove('dark');
}
