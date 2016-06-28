var tipuesearch = {"pages":[{"text":"2D期末專案: 先用solvespace畫出我們要的2D圖(如下圖)副檔名存成(svg) 到Kmolab網站找到svg程式碼(如下圖) 把程式碼存成py檔後將SVG程式碼中的svg_file修改自己剛剛存下的svg檔(如下圖) 執行SVG檔案解讀，會得到剛剛畫的2D尺寸(將下左圖Path:複製並貼到自己的py檔如下右圖中的chamber) 自評:75分","title":"40123134 2D期末專案","tags":"bg1","url":"https://40123156.github.io/2016springcd_bG1/static/blog/40123134-2dqi-mo-zhuan-an.html"},{"text":"","title":"40123133","tags":"bg1","url":"https://40123156.github.io/2016springcd_bG1/static/blog/40123133.html"},{"text":"2D齒輪: 三個齒輪分別的齒數，如果要增加過減少齒輪只需要在下面增加n3.n4.....(不過接下來還要再下面程式碼新增，不能只是新增齒數) 下圖是計算齒節圓半徑(m是模數) (cx,cy)分別是軸心座標m=模數,n1該齒輪的齒數,pa則是壓力角 要新增一個齒輪在下面多新增一個n4(自行定義齒數) 模數這行在n3後面還要加n4 節圓半徑還要在新增一行(如下圖) 這一行要新增第四個齒輪的座標以及要選轉的角度，第四個齒輪x座標等於原本的加上第一個齒輪的半徑+第二個齒輪的直徑+第三個齒輪的直徑在加上原本齒輪的半徑就是第四個齒輪的半徑(如下圖) 心得:由於程式碼老師已經公布了，所以我們只需要做更改，以及新增齒輪，雖然一開始看不太懂程式碼再寫甚麼，不過老師在上面都有助解這段程式碼再寫甚麼，所以只需要複習再複習就可以了解老師這段程式碼再寫甚麼，有些不懂的程式碼還是需要問同學，最後謝謝教授細心的教導。 自評:75分","title":"40123134 2D齒輪報告","tags":"bg1","url":"https://40123156.github.io/2016springcd_bG1/static/blog/40123134-2dchi-lun-bao-gao.html"},{"text":"2D鍊條 : 將鏈條轉90度(如下圖first_degree加90度)即可讓鍊條轉90度 下圖是修改上半部的鏈條位置(p是左右移動，k是上下移動 利用繪圖軟體or自行計算，算出鏈條的座標位置填到startx.y中即可完成圖(如下圖) 完成結果: 心得: 剛開始還搞不太懂怎麼轉鏈條角度，嘗試了一下發現只能旋轉鍊條還無法將鏈條相接，剛開始只知道一直嘗試修改數字找出如何修改位置，但還是無法將鍊條相接再一起，後來詢問同學後發現要用繪圖軟體計算出鍊條的位置，填入相對位置就可以將鍊條相接在一起。 自評:75分","title":"40123134 2D鍊條報告","tags":"bg1","url":"https://40123156.github.io/2016springcd_bG1/static/blog/40123134-2dlian-tiao-bao-gao.html"},{"text":"3D齒輪: 先到老師的Onshape找到MDE Spur Gear複製老師程式碼後，到自己的Onshape點開左下角的(+)之後建立Feature Studio將程式碼貼上後按Save，就可以獲得正齒輪特徵 如下圖。第一行為齒數，圖中用紅筆畫的為模數很重要!!!!!齒型的模數一定要相等，不然無法配合，壓力角也是。 在來就是組裝，設定好齒輪關係後最重要的就是關係比例，關係比例如何設定呢?將第一齒的齒數/第二齒的齒數就可以得到一個值,,將這個值填入就可以完成齒輪配合(如下圖)如果不填入比例關係會造成齒輪干涉。 心得:現在是雲端時代，我們也必須學會如何在雲端操作及協同，Onshpae也已經將程式碼公開。在組立過程遇到問題，問題在組立好後再旋轉的時候會發生干涉，再詢問同學後發現關係比例要設定不然會在旋轉的時候發生干涉。 自評:75分","title":"40123134 3D齒輪報告","tags":"bg1","url":"https://40123156.github.io/2016springcd_bG1/static/blog/40123134-3dchi-lun-bao-gao.html"},{"text":"步驟一: 使用 SolveSpace 軟體繪製任意圖形 步驟二: 點擊下圖中反白處或按 Shift + X 步驟三: 點選圖片輪廓，輪廓會轉變為紅色 步驟四: 點選 File > Export 2d Section 步驟五: 存檔類型要記得選擇 .svg 步驟六: 使用 SciTE 軟體開啟上一步驟的存檔並將下圖中反白處複製下來 步驟七: 將上一步驟複製的程式碼貼上至下圖反白處 步驟八: 最後在近端檢視有無成功顯示出來 心得: 使用 SolveSpace 軟體去轉為程式碼的步驟因為是在好幾個月前學的，有些步驟忘記了，只好憑藉著些許記憶去不斷嘗試，最後才試出來。","title":"40123156 2D圖形報告","tags":"bg1","url":"https://40123156.github.io/2016springcd_bG1/static/blog/40123156-2dtu-xing-bao-gao.html"},{"text":"為了能夠更客觀進行各組與各學員的期末自評, 特別以組為單位, 各組員為內容建構成員, 利用四堂課程的時間, 在各組新建的 Github 倉儲中完成此一專案報告. 基本專案建置流程: 請各組推派代表, 在其 Github 帳號下, 建立一個分組期末專案倉儲, 倉儲名稱定為 2016springcd_aG1, 其中的 aG1 代表 a 班的第 1 組 (以下將以 2016springcd_xGx 代表各組建立的倉儲名稱), 請各組自行配合改為各自的組別代號, 而且請各組特別注意, 此一倉儲的建立時間, 必須是在各班期末考週的第1堂課程時間之後建立, 才納入計分. 倉儲建立之後的第1階段提交推送資料, 必須是修改 README.md, 而且必須透過協調, 由各組員依序 git clone 各組在代表組員帳號下所建立的 2016springcd_xGx 倉儲後, 分別由各組員自行用學號登錄的 github 帳號以協同提交推送的過程, 各自修改 README.md 檔案, 將自己的學號與個人對應的 Github Page 網頁, 放入 REAEME.md 檔案中. 第2項的評分依據為各組員必須自行用自己在 Github 登錄的帳號, 取得各組的 2016springcd_xGx 倉儲協同權限後, 再進行 RADEME.md 的協同修改, 之後各組員完成提交推送的紀錄, 必須可以在 commits 呈現各自的學號與提交推送內容及時間, 才納入計分. 各組以協同流程完成 README.md 的編修後, 接著請取用 https://github.com/2015fallhw/2016springcd_final 倉儲中的架構, 在各組的代表成員的 2016springcd_xGx 倉儲中運作, 並設法將其中的 pelican 網誌內容, 呈現在 2016springcd_xGx 倉儲的 gh-pages 分支中, 完成後, 請各組員在此一 gh-pages 倉儲中各自建立一個能夠呈現自我期末報告的網誌, 並且將此一在 2016springcd_xGx 倉儲的 gh-pages 分支中的連結, 放入 2016springcd_xGx 倉儲 master 分支的 README.md 最前方. 接著, 請利用協同產品設計實習課程所學到的 2D 網際繪圖內容, 以分組組員各自繪製一簡單幾何零件圖形的方式, 將 2016springcd_xGx 倉儲資料中的 wsgi 程式, 送到各組代表成員的 OpenShift 網站中呈現, 並將 2D 繪圖程式連結, 放到 2016springcd_xGx 倉儲 master 分支的 README.md 資料中, 並且放在分組 gh-pages 連結之後. 最後, 請各組以協同方式在 Onshape 雲端電腦輔助設計軟體中, 建立一個名稱為 2016springcd_xGx 的公開協同 Document, 然後將各組組員納入作為可以 edit 與 view 的協同者, 以每一位組員利用 Onshape 官方所釋出的 SG (正齒輪) FeatureScript, 分別依照學號排序, 從齒數 17 開始, 以每位學員遞增 2 齒的方式, 各自在 Part Studio 建立一個正齒輪零件, 並以學號命名零件後, 完成後, 以最簡單的方式在以組別 xGx 命名的組立件中完成囓合組立 (例如, 該組有 6 位成員, 則各自提供一個正齒輪零件, 齒數分別為 17, 19, 21, 23, 25, 27 等, 最後則完成6個齒輪的囓合組立), 完成後, 請將各組的囓合正齒輪組立件以 share 功能, 設定成網路公開組立件, 並將此一 Onshape 的組立件連結, 放到 2016springcd_xGx 倉儲 master 分支的 README.md 資料中, 放在分組 wsgi 2D 繪圖連結之後. 最最後, 請各組依序完成上述工作任務後, 將各組與各學員所完成的網站連結放入 https://github.com/2015fallhw/cdw11/wiki 各組員的對應資料區中, 以作為期末成績評分參考. 祝大家 2016 Summer 假期愉快!","title":"協同產品設計實習期末考週專案報告","tags":"ag100","url":"https://40123156.github.io/2016springcd_bG1/static/blog/xie-tong-chan-pin-she-ji-shi-xi-qi-mo-kao-zhou-zhuan-an-bao-gao.html"}]};