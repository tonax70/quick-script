//========== Notepad++ template | Press F5 to opne the RUN window ============

//For running the file right away, use:

//## How to run it on notepad++
//- press F5
//- to run the file right away, use:
//- enter `"C:\Program Files\Git\git-bash.exe" -c 'cd "$(cygpath -u "$(CURRENT_DIRECTORY)")"; node "$(cygpath -u "$(FULL_CURRENT_PATH)")"; exec bash'`
//
//- to just open the directory path, use: 
//- `"C:\Program Files\Git\git-bash.exe" -c 'cd "$(cygpath -u "$(CURRENT_DIRECTORY)")"; exec bash;`
//


//good phone number calc
function evaluate (pn) {
	let number = ((pn/80) - 98)*80;
	switch (number) {
case 00: return "Đại Cát	Vận mệnh tốt, mọi thứ thành công.                     ";
case 01: return	"Cát	Phát triển công việc dẫn đến thành công.                  ";
case 02: return	"Bình	Cuộc sống an bình, thư thái khi lớn tuổi.                 ";
case 03: return	"Đại Cát	Thăng tiến vượt bậc, mọi chuyện thuận lợi.            ";
case 04: return	"Hung	Sự nghiệp không suôn sẻ, khó khăn và thị phi.             ";
case 05: return	"Đại Cát	Kinh doanh phát đạt, được biết đến và quyền uy.       ";
case 06: return	"Cát	Vận mệnh tốt, dễ đạt thành công.                          ";
case 07: return	"Cát	Hiền lành và ôn hòa, mọi việc thành công.                 ";
case 08: return	"Cát	Vượt qua khó khăn, trải qua thử thách sẽ thành công.      ";
case 09: return	"Hung	Kinh doanh tự lập có thể gặp thất bại.                    ";
case 10: return	"Hung	Cố gắng nhiều nhưng không đạt được gì.                    ";
case 11: return	"Cát	Phát triển bước từng bước, có quý nhân giúp đỡ.           ";
case 12: return	"Hung	Sức khỏe yếu đuối, thất bại ở mọi lĩnh vực.               ";
case 13: return	"Cát	Thành công với tài lộc và sự kính trọng.                  ";
case 14: return	"Bình	Tự lực cánh sinh, được hưởng những gì thiên trả địa.      ";
case 15: return	"Cát	Mọi công việc lớn đều thành công mỹ mãn.                  ";
case 16: return	"Đại Cát	Thành danh và danh tiếng lừng lẫy.                    ";
case 17: return	"Cát	Mọi việc dễ dàng thành công với sự giúp đỡ.               ";
case 18: return	"Đại Cát	Mọi công việc suôn sẻ và thịnh vượng.                 ";
case 19: return	"Hung	Xung đột và khó khăn trong quan hệ.                       ";
case 20: return	"Đại Hung	Lo lắng và phân vân, khó thành công.                  ";
case 21: return	"Cát	Trí tuệ và tập trung vào kinh doanh.                      ";
case 22: return	"Hung	Có tài nhưng không sử dụng, khó thành công.               ";
case 23: return	"Đại Cát	Thành công và tên tuổi nổi tiếng.                     ";
case 24: return	"Đại Cát	Tự lập dẫn đến thành công lớn.                        ";
case 25: return	"Đại Cát	Nhân cách tốt mang lại điều kiện thuận lợi.           ";
case 26: return	"Hung	Gặp khó khăn nhưng vượt qua được.                         ";
case 27: return	"Cát	Lúc thăng lúc trầm nhưng vẫn giữ thành công.              ";
case 28: return	"Đại Cát	Thăng tiến mạnh mẽ.                                   ";
case 29: return	"Hung	Lợi và hại đều đến, biến động trong cuộc sống.            ";
case 30: return	"Đại Cát	Danh lợi và thành công ồ ạt kéo về.                   ";
case 31: return	"Đại Cát	Công danh tương lai như rồng gặp nước.                ";
case 32: return	"Cát	Sử dụng trí tuệ để phát triển và đạt thành công.          ";
case 33: return	"Hung	Liên tục rủi ro, khó thành công.                          ";
case 34: return	"Bình	Vận mệnh bình dị, nhưng thường bảo thủ.                   ";
case 35: return	"Hung	Cuộc đời rủi ro và không ổn định.                         ";
case 36: return	"Cát	Tránh rủi ro và tiến thọ.                                 ";
case 37: return	"Bình	Danh tiếng nhưng không có lợi ích.                        ";
case 38: return	"Đại Cát	Con đường đến thành công rộng mở.                     ";
case 39: return	"Bình	Cuộc sống bất ổn và biến đổi.                             ";
case 40: return	"Đại Cát	Thành công ở mọi lĩnh vực.                            ";
case 41: return	"Hung	Sự nghiệp không suôn sẻ, khó thành công.                  ";
case 42: return	"Cát	Nhẫn nhịn và kiên nhẫn có thể biến chuyện xấu thành tốt.  ";
case 43: return	"Cát	Thành công tự nhiên đến.                                  ";
case 44: return	"Hung	Tham lam dẫn đến thất bại.                                ";
case 45: return	"Hung	Khó khăn ngày càng tăng.                                  ";
case 46: return	"Đại Cát	Thành công trọng đại và có người hỗ trợ.              ";
case 47: return	"Đại Cát	Có tiếng tiếng và vận may, mọi việc thành công.       ";
case 48: return	"Bình	Gặp may mắn hoặc xui xẻo tùy thuộc vào ý chí.             ";
case 49: return	"Bình	Thành công và thất bại đan xen.                           ";
case 50: return	"Bình	Thành công song hối hả và cản trở.                        ";
case 51: return	"Cát	Đường tới thành công mở rộng.                             ";
case 52: return	"Hung	May mắn và xui xẻo xen kẽ.                                ";
case 53: return	"Bình	Nỗ lực không đúng hướng, ít thành công.                   ";
case 54: return	"Hung	Nguy cơ ẩn hiện dưới vẻ đẹp ngoại trừng.                  ";
case 55: return	"Đại Hung	Thành công khó khăn và nhiều thách thức.              ";
case 56: return	"Cát	Nỗ lực và đam mê dẫn đến tài lộc.                         ";
case 57: return	"Bình	Cuộc đời đầy biến động và khổ trước sướng sau.            ";
case 58: return	"Hung	Sự nản lòng và do dự dẫn đến thất bại.                    ";
case 59: return	"Bình	Mục tiêu mơ hồ, thiếu hướng dẫn rõ ràng.                  ";
case 60: return	"Hung	Mây mù che khuất, biểu hiện của rủi ro và khó khăn.       ";
case 61: return	"Hung	Lo lắng và không thành công trong mọi việc.               ";
case 62: return	"Cát	Mục tiêu rõ ràng và tập trung sẽ thành công.              ";
case 63: return	"Hung	Gặp nhiều khó khăn và trở ngại.                           ";
case 64: return	"Cát	Tài lộc tự đến, thành công đến tay.                       ";
case 65: return	"Bình	Gia đình không hoà thuận và đồng lòng.                    ";
case 66: return	"Đại Cát	Vinh quang và thăng tiến sau nhiều khó khăn.          ";
case 67: return	"Cát	Nắm bắt cơ hội sẽ đem lại thành công.                     ";
case 68: return	"Hung	Do dự và khó khăn, cuộc sống biến động.                   ";
case 69: return	"Hung	Công việc đầy khó khăn và không thuận lợi.                ";
case 70: return	"Bình	Lợi và hại đều có, phụ thuộc vào quyết tâm.               ";
case 71: return	"Hung	Nhận và mất đi, khó có sự ổn định.                        ";
case 72: return	"Cát	Sự yên bình tự đến và may mắn tự đến.                     ";
case 73: return	"Bình	Thiếu kế hoạch, khó thành công.                           ";
case 74: return	"Bình	Sự may mắn kèm theo rủi ro, đứng im sẽ tốt hơn.           ";
case 75: return	"Đại Hung	Liên tiếp gặp rủi ro, có thể phá sản.                 ";
case 76: return	"Cát	Khó khăn và sau đó mới đạt được thành công.               ";
case 77: return	"Bình	Trang trọng nhưng không có gì.                            ";
case 78: return	"Đại Cát	Tương lai tươi sáng, đầy hy vọng.                     ";
case 79: return	"Hung	Gặp rồi lại mất, cứ lo lắng cũng không ích gì.            ";
case 80: return	"Đại Cát	Vận số tốt, thành công là điều dễ dàng.               ";
default: "invalid";
	}
	return "invalid escape";
}
const NUMBER = "";

const lastFour = NUMBER.slice(6);

console.log(evaluate(lastFour));

