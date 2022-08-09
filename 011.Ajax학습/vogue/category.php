<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="컬렉션부터 스타일, 쇼핑, 뷰티, 라이프스타일, 셀러브리티까지 지금 가장 핫한 트렌드 소개">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> | 보그 코리아 (Vogue Korea)</title>
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon" />
    <!-- 폰티스토 문자아이콘 CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/category.css">
    <!-- 미디어쿼리는 아래쪽에 덮어쓰도록! -->
    <link rel="stylesheet" href="css/media.css">

    <!-- 외부JS삽입 -->
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    
    <!-- 링크시스템 JS -->
    <script src="js/linksys.js"></script>

    <!-- 부드러운 스크롤 JS -->
    <script src="js/smoothScroll20.js"></script>

    <script src="js/common.js"></script>
    <!-- 카테고리 페이지 JS -->
    <script src="js/category.js"></script>
</head>

<body>
    <!-- 1. 상단영역 -->
    <?php include "inc/top.inc" ?>
    <!-- 2. 메인영역 -->
    <div class="bgc">
        <main class="ibx cont">
            <!-- 2-1. 카테고리 페이지 탑영역 -->
            <header class="ctop">
                <!-- 2-1-1. 서브타이틀 -->
                <h2 class="stit"></h2>
                <!-- 2-1-2. 서브메뉴(LNB-Local Navigation Bar) -->
                <nav class="lnb"></nav>
            </header>
            <!-- 2-2. 카테고리 컨텐츠박스 -->
            <!-- 유형2 컨텐츠박스1 -->
            <section class="pt2 rbx scAct">
                <div class="rbxIn fbx">
                    <div class="cbx bgi bg1-1">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg1-2">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg1-3">
                        <h2></h2>
                    </div>
                </div>
            </section>
            <!-- 유형2 컨텐츠박스2 -->
            <section class="pt2 rbx scAct">
                <div class="rbxIn fbx">
                    <div class="cbx bgi bg2-1">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg2-2">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg2-3">
                        <h2></h2>
                    </div>
                </div>
            </section>
        </main>
    </div>
    <!-- 3. 하단영역 -->
    <?php include "inc/info.inc" ?>

</body>

</html>