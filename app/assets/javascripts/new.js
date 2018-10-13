$(function(){
  //画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
  $('form').on('change', 'input[type="file"]', function(e) {
    var file = e.target.files[0],
        reader = new FileReader(),
        // ユーザーのコンピュータ内にあるファイル(もしくはバッファー上の生データ)をWebアプリケーションから非同期的に読み込める。読み込むファイルやデータはFileないしBlobオブジェクトとして指定。
        $preview = $(".preview");
        $preview1 = $(".preview1");

    // 画像ファイル以外の場合は何もしない
    if(file.type.indexOf("image") < 0){
      return false;
    }
    // ファイル読み込みが完了した際のイベント登録
    reader.onload = (function(file) {
      return function(e) {
        //既存のプレビューを削除
        $preview.empty();
        $preview1.empty();
        // .prevewの領域の中にロードした画像を表示するimageタグを追加
        $preview.append($('<img>').attr({
                  src: e.target.result,
                  width: "40%",
                  class: "preview",
                  title: file.name
              }));
        $preview1.append($('<img>').attr({
                  src: e.target.result,
                  width: "60%",
                  class: "preview1",
                  title: file.name
              }));
      };
    })(file);
  // $()
  ('#prototype_captured_images_attributes_0_content').on('change', function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#preview").attr('src', e.target.result);
    }
    reader.readAsDataURL(file);
  });
});
});

// $('#prototype_captured_images_attributes_0_content').on('change', function (e) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//         $("#preview").attr('src', e.target.result);
//     }
//     reader.readAsDataURL(e.target.files[0]);
// });
