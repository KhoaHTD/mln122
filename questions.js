// 648 câu hỏi, giữ thứ tự trong PDF HCM202 - CHUẨN NHUNG HOÀNG.
// explanation được bổ sung bằng đối chiếu Giáo trình Tư tưởng Hồ Chí Minh 2021.
// Trang PDF được tính từ 1, bao gồm cả trang đầu của file giáo trình 149 trang.
// Giữ nguyên question, options, answer của bộ câu hỏi; chỗ khác giáo trình được ghi trong explanation.
// Một số dữ kiện, trích dẫn không có căn cứ trực tiếp trong giáo trình được nêu rõ; trang liên quan không thay thế nguồn gốc.
// Câu thiếu lựa chọn trong PDF dùng chuỗi rỗng cho C/D; giao diện nên ẩn lựa chọn rỗng.
// Câu 257 có thêm E. Câu 137 và 646 có nhiều đáp án: AB và ABC.

const allQuestions = [
    {
        "question": "Theo Hồ Chí Minh, biện pháp cơ bản nhất để xây dựng chủ nghĩa xã hội là:(NHUNG HOÀNG)",
        "options": {
            "A": "Đem của dân, tài dân, sức dân làm lợi cho dân",
            "B": "Nhà nước phải ban phát từ trên xuống",
            "C": "Phải dựa vào sự giúp đỡ của các nước xã hội chủ nghĩa",
            "D": "Phải tự lực cánh sinh, dựa vào sức mình là chính"
        },
        "answer": "A",
        "explanation": "Nhân dân là chủ thể xây dựng xã hội mới và nội lực giữ vai trò quyết định; vì vậy phải huy động sức dân để phục vụ lợi ích của dân. Giáo trình diễn giải nội dung này, không chép nguyên văn cụm từ của đáp án A.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 57,59-60."
    },
    {
        "question": "Nói về đạo đức cách mạng Hồ Chí Minh chi rõ: \"Vì muốn giải phóng cho dân tộc, giải phóng cho loài người là một công việc to tát, mà tự mình không có đạo đức, không có căn bản, tự mình đã hủ hóa, xấu xa thì còn làm nổi việc gì?\". Câu nói trên của Hồ Chí Minh đề cập đến vấn đề gì sau đây ?(NHUNG HOÀNG)",
        "options": {
            "A": "Vai trò và sức mạnh của đạo đức",
            "B": "Chuẩn mực và nguyên tắc xây dựng đạo đức mới",
            "C": "Nguyên tắc xây dựng đạo đức mới",
            "D": "Các phẩm chất đạo đức mới"
        },
        "answer": "A",
        "explanation": "Đoạn trích coi đạo đức là nền tảng giúp người cách mạng thực hiện nhiệm vụ giải phóng; nó nói về vai trò của đạo đức, không phải liệt kê các phẩm chất hay nguyên tắc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 123-124."
    },
    {
        "question": "Điền từ còn thiếu vào chỗ trống để hoàn thành luận điểm của Hồ Chí Minh khi đề cập đến nguyên tắc phương pháp luận \"Thống nhất lý luận và thực tiễn\" trong nghiên cứu môn học Tư tưởng Hồ Chí Minh: \"Thực tiễn không có lý luận hướng dẫn thì thành thực tiễn mù quáng, dễ mắc bệnh...; lý luận mà không liên hệ với thực tiễn là lý luận suông\".",
        "options": {
            "A": "Quan liêu",
            "B": "Tham ô",
            "C": "Chủ quan",
            "D": "Lãng phí"
        },
        "answer": "C",
        "explanation": "Thiếu lý luận, con người dễ hành động theo ý mình mà không hiểu điều kiện khách quan, dẫn đến chủ quan; lý luận tách thực tiễn lại thành lý luận suông.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 11-12."
    },
    {
        "question": "Chọn phương án trả lời không đúng với tư tưởng Hồ Chí Minh về nhà nước vì dân?",
        "options": {
            "A": "Phục vụ nhân dân",
            "B": "Chăm lo mọi mặt đời sống nhân dân",
            "C": "Do dân làm chủ, tổ chức nên",
            "D": "Đem lại lợi ích cho dân"
        },
        "answer": "C",
        "explanation": "Do dân lập nên và dân làm chủ thuộc nội dung nhà nước do dân. Nhà nước vì dân nói về mục đích phục vụ lợi ích, nguyện vọng và hạnh phúc của nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 85-86."
    },
    {
        "question": "Theo Tư tưởng Hồ Chí Minh, văn hoá có mấy chức năng chủ yếu?",
        "options": {
            "A": "Hai",
            "B": "Ba",
            "C": "Bốn",
            "D": "Năm"
        },
        "answer": "B",
        "explanation": "Đáp án B theo cách phân loại truyền thống: bồi dưỡng tư tưởng, tình cảm; nâng cao dân trí; bồi dưỡng phẩm chất và lối sống. Giáo trình 2021 trình bày vai trò văn hóa theo cách khác và không trực tiếp liệt kê ba chức năng này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 121-123.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo tư tưởng Hồ Chí Minh, văn hoá có chức năng: a. Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp cho con người. b. Nâng cao dân trí. c. Bồi dưỡng những phẩm chính tốt đẹp, những phong cách, lối sống lành mạnh, luôn hướng con người vươn tới cái chân, cái thiện, cái mỹ, không ngừng hoàn thiện bản thân mình. d. Tất cả các phương án.)"
    },
    {
        "question": "Trong quan hệ quốc tế, Hồ Chí Minh nhấn mạnh: phải có thực lực, thực lực là cái (...), ngoại giao là cái tiếng, (....) có to tiếng mới lớn.",
        "options": {
            "A": "Chiêng",
            "B": "Trống",
            "C": "Kèn",
            "D": "Đàn"
        },
        "answer": "A",
        "explanation": "Hình ảnh chiêng tượng trưng cho thực lực, tiếng tượng trưng cho ngoại giao: nội lực càng mạnh thì hoạt động đối ngoại càng có sức thuyết phục.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 112."
    },
    {
        "question": "Đâu là nguyên tắc xây dựng đạo đức mới trong tư tưởng hồ chí minh",
        "options": {
            "A": "nói đi đôi với làm, phải nêu gương về đạo đức",
            "B": "nói đi đôi với làm, phải nêu gương về lối sống",
            "C": "nói đi đôi với làm, phải nêu gương về học tập",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đạo đức phải thể hiện bằng hành động và tấm gương thực tế; nói đi đôi với làm gắn với nêu gương về đạo đức là một nguyên tắc xây dựng đạo đức cách mạng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 132-133.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh ví tuổi trẻ như:",
        "options": {
            "A": "Mùa xuân của xã hội",
            "B": "Mùa xuân của đất nước",
            "C": "Mùa xuân của Đảng",
            "D": "Mùa xuân của Nhà nước"
        },
        "answer": "A",
        "explanation": "Giáo trình nhấn mạnh bồi dưỡng thế hệ cách mạng kế tiếp và rèn luyện đạo đức từ tuổi trẻ. Tuy nhiên, chưa có căn cứ trực tiếp trong PDF này cho phép xác nhận câu ví tuổi trẻ là mùa xuân của xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 125,136."
    },
    {
        "question": "Các bài giảng của Nguyễn Ái Quốc tại các lớp huấn luyện cán bộ tuyên truyền của hội Liên hiệp các dân tộc bị áp bức bóc lột lập hợp lại và xuất bản thành tác phẩm gì?",
        "options": {
            "A": "Bản án chế độ thực dân Pháp",
            "B": "Lênin và Phương Đông",
            "C": "Con Rồng tre",
            "D": "Đường Kách mệnh"
        },
        "answer": "D",
        "explanation": "Đường cách mệnh năm 1927 hệ thống hóa tư tưởng và chuẩn bị lý luận cho sự ra đời của Đảng. Cần lưu ý giáo trình gắn việc đào tạo cán bộ với Hội Việt Nam Cách mạng Thanh niên; cách gọi tổ chức trong câu hỏi chưa chính xác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-31."
    },
    {
        "question": "Theo Hồ Chí Minh, Đại đoàn kết dân tộc là nhiệm vụ hàng đầu của Đảng, đồng thời cũng là nhiệm vụ hàng đầu của:",
        "options": {
            "A": "Mọi giai đoạn cách mạng.",
            "B": "Toàn quân.",
            "C": "Toàn dân.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Cách mạng là sự nghiệp của quần chúng; do đó đại đoàn kết vừa là nhiệm vụ của Đảng lãnh đạo, vừa là yêu cầu và trách nhiệm của toàn dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo tư tưởng Hồ Chí Minh thì đoàn kết trước hết là phải đoàn kết như thế nào? A. Toàn dân B. Toàn quân C. Toàn Đảng D. Toàn giai cấp)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong các luận điểm sau đây về văn hóa, luận điểm nào Hồ Chí Minh nói về tính chất của nền văn hóa?(NHUNG HOÀNG)",
        "options": {
            "A": "Phải nâng cao trình độ văn hóa của nhân dân",
            "B": "Phải xây dựng một nền văn hóa dân tộc, khoa học và đại chúng",
            "C": "Văn hóa cũng là một mặt trận",
            "D": "Xây dựng chính trị dân quyền"
        },
        "answer": "B",
        "explanation": "Giáo trình nêu phương châm nền văn hóa mới có ba tính chất: dân tộc, khoa học và đại chúng; các phương án khác nói về nhiệm vụ hoặc vai trò.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 123.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Hồ Chí Minh cho rằng văn hóa có tính: A. Dân tộc, khoa học và đại chúng B. Dân tộc, khoa học và nhân dân C. Dân tộc, khoa học và nhân bản)"
    },
    {
        "question": "Quy luật ra đời của Đảng được Hồ Chí Minh vạch ra",
        "options": {
            "A": "Không phù hợp với tinh thần của chủ nghĩa Mác- Lênin",
            "B": "Trái với tinh thần của chủ nghĩa Mác- Lênin",
            "C": "Không trái với tinh thần của chủ nghĩa Mác- Lênin",
            "D": ""
        },
        "answer": "C",
        "explanation": "Thêm phong trào yêu nước vào sự kết hợp chủ nghĩa Mác-Lênin với phong trào công nhân là vận dụng sáng tạo cho Việt Nam, vẫn phù hợp với học thuyết về đảng kiểu mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Quy luật ra đời của Đảng được Hồ Chí Minh vạch ra",
        "options": {
            "A": "Không khác với chủ nghĩa Mác-Lênin",
            "B": "Khác với chủ nghĩa Mác-Lênin",
            "C": "Không liên quan đến chủ nghĩa Mác-Lênin",
            "D": ""
        },
        "answer": "A",
        "explanation": "CẦN KIỂM TRA ĐÁP ÁN: Giáo trình nói rõ Hồ Chí Minh bổ sung yếu tố phong trào yêu nước vào quy luật chung. Vì vậy, không khác chỉ phù hợp nếu hiểu là không trái về nguyên lý; nếu hỏi khác về thành phần kết hợp thì B phù hợp hơn A.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đối với Hồ Chí Minh, dân ta tài năng, trí tuệ và sáng tạo, họ biết \"giải quyết nhiều vấn đề một cách giản đơn, mau chóng, đầy đủ, mà những người tài giỏi, những đoàn thể to lớn,.... (NHUNG HOÀNG)",
        "options": {
            "A": "nghĩ mãi không ra\".",
            "B": "nghĩ mãi mới ra\".",
            "C": "làm mãi không được\".",
            "D": "làm mãi mới được\"."
        },
        "answer": "A",
        "explanation": "Giáo trình coi nhân dân là nguồn lực, trí tuệ và chủ thể sáng tạo lịch sử, nên phải học hỏi dân thay vì xem thường dân. Chưa tìm thấy nguyên văn câu trích để xác nhận riêng cụm từ điền ở A.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 138."
    },
    {
        "question": "Trong giai đoạn 1923 - 1924, Quảng Châu Trung Quốc được mệnh danh là?",
        "options": {
            "A": "Moskva của Phương Đông",
            "B": "Trung cách mạng vô sản",
            "C": "Thủ Phủ cộng sản",
            "D": "Căn cứ quốc tế vô sản"
        },
        "answer": "A",
        "explanation": "Giáo trình trình bày hoạt động chuẩn bị cách mạng giai đoạn 1920-1930 nhưng không nêu trực tiếp danh xưng Moskva của phương Đông và mốc 1923-1924 của Quảng Châu. Đáp án A hiện chỉ được giữ theo bộ câu hỏi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-31."
    },
    {
        "question": "Quan điểm nào sau đây thuộc vấn đề tiêu chuẩn cán bộ theo tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Phẩm chất công tác tốt",
            "B": "Phẩm chất tư duy tốt",
            "C": "Phẩm chất năng lực tốt",
            "D": ""
        },
        "answer": "A",
        "explanation": "Tiêu chuẩn cán bộ phải gắn phẩm chất đạo đức với năng lực thực hiện nhiệm vụ, phục vụ nhân dân. Chưa tìm thấy cụm phẩm chất công tác tốt trong giáo trình; các lựa chọn diễn đạt quá chung nên cần kiểm tra lại nguồn câu hỏi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 79-81.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh chỉ rõ: \"Ở nước ta chính quyền là của nhân dân, do nhân dân làm chủ. Nhân dân là (....) nắm chính quyền. Nhân dân bầu ra đại biểu thay mặt mình thi hành chính quyền ấy. Thế là dân chủ\".",
        "options": {
            "A": "Ông chủ",
            "B": "Người đại diện",
            "C": "Công bộc",
            "D": ""
        },
        "answer": "A",
        "explanation": "Nhân dân là chủ thể tối cao của quyền lực; đại biểu và cán bộ chỉ nhận quyền do dân ủy thác. Vì vậy dân là ông chủ, cán bộ là công bộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83-84.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo quan điểm Hồ Chí Minh, khái quát dân chủ có ý nghĩa là gì? A. Dân là chủ và dân làm chủ B. Dân là người chủ C. Dân làm quản lý D. Dân làm người chủ)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Mặt trận Liên Việt được thành lập vào thời gian nào?",
        "options": {
            "A": "1941",
            "B": "1945",
            "C": "1951",
            "D": "1960"
        },
        "answer": "C",
        "explanation": "Giáo trình liệt kê Mặt trận Liên Việt ở mốc 1951, khác Việt Minh năm 1941 và Mặt trận dân tộc giải phóng miền Nam năm 1960.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 102."
    },
    {
        "question": "Hồ Chí Minh cho rằng cán bộ muốn hướng dẫn nhân dân phải như thế nào?",
        "options": {
            "A": "Làm mực thước cho nhân dân bắt chước",
            "B": "Làm gương cho nhân dân",
            "C": "Làm mô hình cho dân theo",
            "D": "Làm quan cách mạng"
        },
        "answer": "A",
        "explanation": "Muốn được dân tin và làm theo, cán bộ phải thực hành đạo đức trước, trở thành mẫu mực bằng hành động; A sát câu trích hơn cách nói khái quát ở B.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 133."
    },
    {
        "question": "Theo Hồ Chí Minh, chế độ xã hội chủ nghĩa là chế độ do dân làm chủ, thì mỗi con người được coi là",
        "options": {
            "A": "Bộ phận của tập thể",
            "B": "Một tế bào của xã hội",
            "C": "Đều là một cá thể trong xã hội",
            "D": "Một phần của tập thể"
        },
        "answer": "B",
        "explanation": "CẦN KIỂM TRA ĐÁP ÁN: Giáo trình viết mỗi người là một bộ phận của tập thể, có vị trí và đóng góp trong xã hội. Theo câu chữ này, A phù hợp hơn đáp án B đang lưu trong bộ Quizlet.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53."
    },
    {
        "question": "Theo quan điểm của Đảng Cộng sản Việt Nam, Nhà nước pháp quyền là gì",
        "options": {
            "A": "Nhà nước tạo ra sự ổn định về chính trị",
            "B": "Tuyển dụng cán bộ nhà nước phải thông qua thi tuyển chặt chẽ",
            "C": "Nhà nước quản lý xã hội bằng pháp luật và làm cho pháp luật có hiệu quả trong thực tế",
            "D": "Khuyến khích nhân dân tham gia vào các công việc của Nhà nước"
        },
        "answer": "C",
        "explanation": "Pháp luật phải điều chỉnh hoạt động nhà nước và xã hội, được thi hành và giám sát trong thực tế; chỉ tạo ổn định hay tuyển dụng cán bộ chưa đủ để định nghĩa nhà nước pháp quyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 87-89."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc là:",
        "options": {
            "A": "Đoàn kết công-nông.",
            "B": "Đoàn kết công-nông-lao động trí óc.",
            "C": "Đoàn kết công-nông và các tầng lớp xã hội khác.",
            "D": "Đại đoàn kết toàn dân."
        },
        "answer": "D",
        "explanation": "Phạm vi đại đoàn kết bao gồm mọi người Việt Nam yêu nước, không chỉ công nhân và nông dân; liên minh công-nông-trí là nền tảng, không phải toàn bộ khối đoàn kết.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo Hồ Chí Minh, thực hiện đại đoàn kết dân tộc phải đoàn kết được với ai? A. Đại đoàn kết toàn dân B. Đại đoàn kết toàn kết giai cấp C. Đại đoàn kết rộng rãi D. Đoàn kết với công nông)"
    },
    {
        "question": "Theo Hồ Chí Minh, lực lượng của cách mạng giải phóng dân tộc là:",
        "options": {
            "A": "Toàn dân tộc.",
            "B": "Công nhân và nông dân.",
            "C": "Trí thức, tiểu tư sản, tư sản dân tộc, địa chủ vừa và nhỏ.",
            "D": "Công nhân, nông dân và trí thức"
        },
        "answer": "A",
        "explanation": "Giải phóng dân tộc đáp ứng lợi ích chung nên phải tập hợp toàn dân; công nhân và nông dân giữ vai trò nền tảng trong lực lượng rộng lớn đó.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 49."
    },
    {
        "question": "Hồ Chí Minh cho rằng, \"Vì ... loài người mới sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật, những công cụ cho sinh hoạt hằng ngày về mặc, ăn, ở và các phương thức sử dụng\"\". Chọn phương án đúng điền vào chỗ trống.",
        "options": {
            "A": "lễ sinh tồn cũng như mục đích của cuộc sống",
            "B": "nhu cầu đời sống và tinh thần",
            "C": "mục đích phát triển và sinh tồn",
            "D": "cuộc sống"
        },
        "answer": "A",
        "explanation": "Văn hóa hình thành để đáp ứng nhu cầu sinh tồn và mục đích sống của con người. Phương án A có lỗi đánh máy: chữ đúng trong giáo trình là lẽ sinh tồn, không phải lễ sinh tồn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118."
    },
    {
        "question": "Trong mục tiêu về chủ nghĩa xã hội, theo Hồ Chí Minh, mục tiêu kinh tế phải gắn bó với:",
        "options": {
            "A": "mục tiêu văn hóa",
            "B": "mục tiêu giáo dục",
            "C": "mục tiêu chính trị",
            "D": "mục tiêu xã hội"
        },
        "answer": "C",
        "explanation": "Phát triển kinh tế tạo điều kiện vật chất cho nhân dân thực hiện quyền làm chủ, nên mục tiêu kinh tế gắn chặt mục tiêu chính trị của chủ nghĩa xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 58."
    },
    {
        "question": "Đại đoàn kết quốc tế trong tư tưởng Hồ Chí Minh được xác định là:",
        "options": {
            "A": "Một nhân tố thường xuyên và hết sức quan trọng giúp cho cách mạng Việt Nam đi đến thắng lợi hoàn toàn.",
            "B": "Có ý nghĩa sống còn đối với cách mạng Việt Nam.",
            "C": "Vấn đề cơ bản của cách mạng việt Nam.",
            "D": "Sức mạnh giúp cho dân tộc ta vượt qua mọi thử thách, khó khăn trong dựng nước và giữ nước."
        },
        "answer": "A",
        "explanation": "Đoàn kết quốc tế bổ sung nguồn lực và sự ủng hộ bên ngoài, kết hợp sức mạnh dân tộc với thời đại; đây là nhu cầu thường xuyên của cách mạng Việt Nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 106-108."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân, Đảng phải chăm lo mối quan hệ giữa Đảng với dân là nhằm:",
        "options": {
            "A": "Xác định vị thế cầm quyền của Đảng.",
            "B": "Xác định phương thức cầm quyền của Đảng.",
            "C": "Xác định năng lực cầm quyền của Đảng.",
            "D": "Xác định tính chất cầm quyền của Đảng."
        },
        "answer": "A",
        "explanation": "Quan hệ gắn bó với dân xác định Đảng phục vụ ai và nguồn gốc quyền lãnh đạo của Đảng. Đảng cầm quyền vì lợi ích nhân dân, phải chịu kiểm soát và giữ được lòng tin của dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78.\nGhi chú trong tài liệu: (Nếu chọn 3 thì chọn abc)"
    },
    {
        "question": "Theo Hồ Chí Minh, nguyên tắc hiệp thương dân chủ đòi hỏi tất cả mọi vấn đề của Mặt trận đều phải được đem ra cho tất cả các thành viên cùng nhau bàn bạc công khai, để đi đến nhất trí, loại trừ mọi sự áp đặt hay còn vấn đề nào khác nữa?",
        "options": {
            "A": "Dân chủ hình thức",
            "B": "Dân chủ tự nguyện",
            "C": "Chuyên quyền độc đoán",
            "D": "Không dân chủ"
        },
        "answer": "A",
        "explanation": "Hiệp thương đòi hỏi các thành viên cùng bàn bạc công khai để đạt nhất trí thực chất; vì vậy phải loại trừ cả áp đặt và dân chủ hình thức.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103-104."
    },
    {
        "question": "Nội dung nào không phải là thực chất vấn đề dân tộc thuộc địa trong tư tưởng Hồ Chí Minh:",
        "options": {
            "A": "Đấu tranh chống chủ nghĩa thực dân, giải phóng dân tộc.",
            "B": "Lựa chọn con đường phát triển của dân tộc là CNXH.",
            "C": "Đòi quyền tự do dân chủ tối thiểu cho nhân dân.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Giải quyết vấn đề dân tộc thuộc địa nhằm giành độc lập thực sự và lựa chọn con đường phát triển. Chỉ đòi một số quyền dân chủ tối thiểu chưa giải quyết được ách thống trị thuộc địa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-47.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, người cách mạng phải có đạo đức, không có đạo đức thì",
        "options": {
            "A": "Dù tài giỏi mấy cũng bỏ đi",
            "B": "Dù tài giỏi mấy cũng không đáng dùng",
            "C": "Dù tài giỏi mấy cũng không lãnh đạo được nhân dân",
            "D": "Dù tài giỏi mấy cũng không xứng đáng là người cách mạng"
        },
        "answer": "C",
        "explanation": "Đạo đức là gốc và điều kiện để được nhân dân tin, phục; tài năng không thể thay thế nền tảng đạo đức trong vai trò lãnh đạo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 124."
    },
    {
        "question": "Hồ Chí Minh cho rằng xây dựng văn hóa mới trước hết cần phải làm gì?",
        "options": {
            "A": "Tư tưởng phải được tự do",
            "B": "Tư tưởng phải được nuôi dưỡng",
            "C": "Phải xây dựng xã hội dân chủ",
            "D": ""
        },
        "answer": "C",
        "explanation": "Trong xã hội thuộc địa, phải giải phóng chính trị và xã hội, giành chính quyền về tay dân để mở đường cho văn hóa mới phát triển.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 119.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Điền vào chỗ trống. Đại hội đại biểu toàn quốc lần thứ XI của Đảng Cộng sản Việt Nam đưa ra định nghĩa:\"Tư tưởng Hồ Chí Minh là... toàn diện sâu sắc về những vẫn vấn đề cơ bản của cách mạng Việt Nam\"",
        "options": {
            "A": "Hệ thống các vấn đề",
            "B": "Hệ thống các tư tưởng",
            "C": "Hệ thống các luận điểm",
            "D": "Hệ thống các quan điểm"
        },
        "answer": "D",
        "explanation": "Định nghĩa tại Đại hội XI gọi tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện và sâu sắc; từ quan điểm thể hiện cấu trúc lý luận thống nhất của tư tưởng ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 5."
    },
    {
        "question": "Hồ Chí Minh cho rằng đoàn kết quốc tế phải.",
        "options": {
            "A": "Nêu cao ngọn cờ hoà bình, công lý",
            "B": "Nêu cao ngọn cờ hoà bình, tự do",
            "C": "Nêu cao ngọn cờ hoà bình, bình đẳng",
            "D": ""
        },
        "answer": "A",
        "explanation": "Với lực lượng tiến bộ, Hồ Chí Minh gắn đấu tranh độc lập với hòa bình và công lý; hòa bình phải bảo đảm quyền dân tộc, không phải chấp nhận áp bức.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 111-112.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là quan điểm của Hồ Chí Minh về xây dựng con người",
        "options": {
            "A": "Bản chất con người mang tính xã hội",
            "B": "Bản chất con người mang tính nhân dân",
            "C": "Bản chất con người mang tính dân chủ",
            "D": "Bản chất con người mang tính kế thừa"
        },
        "answer": "A",
        "explanation": "Con người được xem xét trong các quan hệ gia đình, giai cấp, dân tộc và cộng đồng; vì vậy bản chất xã hội là nội dung phù hợp, không phải chỉ một thuộc tính chính trị riêng lẻ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 136-137.\nGhi chú trong tài liệu: (Kiểu hỏi khác: - Đâu là quan điểm của Hồ Chí Minh về bản chất con người? - Theo Hồ Chí Minh: Con người có tính xã hội, là con người xã hội, thành viên của một cộng đồng xã hội. Được hiểu là? -> Quan điểm của Hồ Chí Minh về xây dựng con người.)"
    },
    {
        "question": "Theo Hồ Chí Minh, chỉ có ..... mới giải phóng được các dân tộc bị áp bức và giai cấp công nhân toàn thế giới. (NHUNG HOÀNG)",
        "options": {
            "A": "Chủ nghĩa xã hội và chủ nghĩa cộng sản.",
            "B": "Giai cấp công nhân và giai cấp nông dân",
            "C": "Giai cấp công nhân và nhân dân lao động",
            "D": "Đảng Cộng sản và giai cấp công nhân"
        },
        "answer": "A",
        "explanation": "Con đường vô sản gắn độc lập với xóa bỏ áp bức, bóc lột và giải phóng người lao động; chủ nghĩa xã hội và cộng sản là mục tiêu bảo đảm sự giải phóng toàn diện.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-47,55-56."
    },
    {
        "question": "Tác phẩm Đời sống mới được Hồ Chí Minh công bố năm nào?",
        "options": {
            "A": "1930",
            "B": "1947",
            "C": "1951",
            "D": "1945"
        },
        "answer": "B",
        "explanation": "Giáo trình liên hệ cần, kiệm, liêm, chính với đời sống mới nhưng chưa nêu năm xuất bản tác phẩm Đời sống mới. Do đó mốc 1947 ở B chưa được xác nhận trực tiếp bằng PDF này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 130."
    },
    {
        "question": "Đâu là quan điểm của Hồ Chí Minh trong các quan điểm sau?(NHUNG HOÀNG)",
        "options": {
            "A": "Trong giai đoạn thuộc địa, giải phóng chính trị- Xã hội là trước hết, mỡ đường để giải phóng văn hóa",
            "B": "Trong giai đoạn thuộc địa, giải phóng chính trị - xã hội là trước hết, mở đường để giải phóng nhân loạ",
            "C": "Trong giai đoạn thuộc địa, giài phóng chính trị- xã hội là trước hết, mở đường để giải phóng dân tộc",
            "D": "Trong giai đoạn thuộc địa, giải phóng chính trị - xã hội là trước hết, mở đường để giải phóng các dân tộc anh em"
        },
        "answer": "A",
        "explanation": "Ách thống trị thuộc địa kìm hãm cả chính trị, xã hội và văn hóa; giải phóng chính trị-xã hội tạo điều kiện trước tiên cho giải phóng văn hóa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 119."
    },
    {
        "question": "Theo Hồ Chí Minh, lực lượng nào sau đây được coi \"là gốc cách mệnh\"?(NHUNG HOÀNG)",
        "options": {
            "A": "Công nông trí",
            "B": "Công nhân",
            "C": "Công nông",
            "D": "Nông dân"
        },
        "answer": "C",
        "explanation": "Công nhân và nông dân là lực lượng đông đảo, bị áp bức nặng, có tinh thần cách mạng bền bỉ; vì thế là gốc của cách mạng, dù lực lượng cách mạng bao gồm toàn dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 49."
    },
    {
        "question": "Theo quan điểm của Đảng Cộng sản Việt Nam tại Đại hội đại biểu toàn quốc lần thứ VII, Tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Tài sản tinh thần to lớn của Đảng và dân tộc ta",
            "B": "Tài sản tinh thần quý báu của Đảng và của cả dân tộc",
            "C": "Tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta",
            "D": "Tài sản tinh thần to lớn và vô cùng quý giá của Đảng và dân tộc ta"
        },
        "answer": "B",
        "explanation": "Giáo trình dẫn Đại hội VII khẳng định tư tưởng Hồ Chí Minh là tài sản tinh thần quý báu của Đảng và dân tộc; cần phân biệt với cách diễn đạt mở rộng tại Đại hội XI.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 8."
    },
    {
        "question": "Tư tưởng tôn giáo nào sau đây ảnh hưởng đến sự hình thành tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Tư duy, hành động, ứng xử của Phật giáo",
            "B": "Tư duy, hành động, ứng xử của Hồi giáo",
            "C": "Tư duy, hành động, ứng xử của Ấn độ giáo",
            "D": ""
        },
        "answer": "A",
        "explanation": "Hồ Chí Minh tiếp thu các giá trị nhân bản, từ bi, vị tha và đạo đức tích cực của Phật giáo, phát triển chúng phù hợp việc xây dựng xã hội và con người mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 23-24.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, là người đày tớ của dân không có nghĩa là \"tôi tớ, tôi đòi hay theo đuôi quần chúng\" mà là:",
        "options": {
            "A": "Hiểu và đánh giá đúng nhân dân nhằm đem lại các quyền và lợi ích cho nhân dân.",
            "B": "Tận tâm, tận lực phụng sự nhân dân nhằm đem lại các quyền và lợi ích cho nhân dân.",
            "C": "Tất cả các phương án",
            "D": ""
        },
        "answer": "B",
        "explanation": "Phục vụ dân là tận tụy đem lại quyền lợi cho dân, đồng thời có trách nhiệm lãnh đạo; không phải nghe theo mọi ý kiến một cách thụ động.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 78,86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng, nhà nước của dân, do dân và vì dân phải",
        "options": {
            "A": "Có hiệu lực pháp lý mạnh mẽ",
            "B": "Có hiệu lực pháp lý toàn diện",
            "C": "Có hiệu lực pháp lý chân chính",
            "D": ""
        },
        "answer": "A",
        "explanation": "Nhà nước phải hợp hiến, hợp pháp, quản lý bằng pháp luật và bảo đảm luật được thi hành nghiêm; đó là nội dung của hiệu lực pháp lý mạnh mẽ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86-89.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nội dung nào không đúng với tư tưởng Hồ Chí Minh trong việc thực thi Hiến pháp và pháp luật?",
        "options": {
            "A": "Pháp luật phải đúng và phải đủ",
            "B": "Tăng cường tuyên truyền, giáo dục pháp luật cho người cao tuổi",
            "C": "Người thực thi luật pháp phải thật sự công tâm và nghiêm minh",
            "D": "Bất kỳ ai vi phạm pháp luật cũng đều bị trừng trị nghiêm khắc, đúng người, đúng tội."
        },
        "answer": "B",
        "explanation": "Giáo trình yêu cầu giáo dục pháp luật cho mọi người, đặc biệt thế hệ trẻ. Giới hạn thành người cao tuổi như B không phản ánh đúng đối tượng được nhấn mạnh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 88."
    },
    {
        "question": "\"Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân ta là công nhân, nông dân và các tầng lớp nhân dân lao động khác. Đó là nền, gốc của đại đoàn kết. Đây là câu nói của Hồ Chí Minh trong bài Nói chuyện tại Hội nghị đại biểu Mặt trận Liên - Việt toàn quốc vào tháng, năm nào?",
        "options": {
            "A": "Tháng 3-1951",
            "B": "Tháng 9-1945",
            "C": "Tháng 2, 1960",
            "D": "Tháng 1-1955"
        },
        "answer": "D",
        "explanation": "Giáo trình dẫn luận điểm công-nông và người lao động là nền, gốc của đại đoàn kết. Tuy nhiên đoạn này không ghi tháng diễn ra hội nghị; chưa thể xác nhận trực tiếp mốc tháng 1-1955 chỉ bằng PDF.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100."
    },
    {
        "question": "Quan điểm nào sau đây là nguyên tắc đoàn kết quốc tế của Hồ Chí Minh",
        "options": {
            "A": "Dựa vào sức mình là chính, ủng hộ sự giúp đỡ quốc tế, có nghĩa vụ quốc tế.",
            "B": "Dựa vào sức mình là chính, ủng hộ sự giúp đỡ quốc tế, có nghĩa của chính mình",
            "C": "Dựa vào sức mình là chính, ủng hộ sự giúp đỡ quốc tế, có nghĩa vụ chính quốc.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đoàn kết quốc tế dựa trên độc lập, tự chủ: phát huy nội lực là chính, đồng thời tranh thủ giúp đỡ và thực hiện trách nhiệm đoàn kết với nhân dân các nước.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 112,132.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Báo Le Paria (Người Cùng khổ) do Nguyễn Ái Quốc đồng sáng lập, ra số đầu tiên khi nào?",
        "options": {
            "A": "30/12/1920",
            "B": "1/4/1921",
            "C": "1/4/1922",
            "D": "1/4/1923"
        },
        "answer": "C",
        "explanation": "Giáo trình xác nhận Nguyễn Ái Quốc sáng lập báo Le Paria năm 1922, dùng báo chí thức tỉnh các dân tộc thuộc địa; ngày 1/4 không được nêu trực tiếp trong đoạn này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30."
    },
    {
        "question": "Hồ Chí Minh chủ trương tiến hành:",
        "options": {
            "A": "Cách mạng tư sản dân quyền trước cách mạng thổ địa",
            "B": "Cách mạng thổ địa trước cách mạng tư sản dân quyền",
            "C": "Tiến hành động thời cách mạng tư sản dân quyền với cách mạng xã hội chủ nghĩa",
            "D": ""
        },
        "answer": "A",
        "explanation": "CẦN LƯU Ý CÁCH HỎI: Giải phóng dân tộc được ưu tiên trước; giải quyết ruộng đất phải phục vụ nhiệm vụ ấy. Giáo trình không xác lập một trình tự cứng cho mọi nhiệm vụ dân chủ và thổ địa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 47,65.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Nền kinh tế mà chúng ta xây dựng cần phải phát triển toàn diện các ngành, với những ngành chủ yếu là: công-nông-thương nghiệp; trong đó, (...........) là hai cái chân của nền kinh tế nước nhà\".",
        "options": {
            "A": "Nông nghiệp và thương nghiệp",
            "B": "Nông nghiệp và công nghiệp nhẹ",
            "C": "Công nghiệp nặng và nông nghiệp",
            "D": "Công nghiệp và nông nghiệp"
        },
        "answer": "D",
        "explanation": "Công nghiệp và nông nghiệp hiện đại tạo nền tảng vật chất-kỹ thuật của xã hội mới, cần phát triển phối hợp. Giáo trình xác nhận nội dung này nhưng không chép hình ảnh hai cái chân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 58,63."
    },
    {
        "question": "Hãy chọn phương án đúng nhất Hồ Chí Minh luôn nhấn mạnh việc thực hành dân chủ, mà trước hết là dân chủ:",
        "options": {
            "A": "Trong nhân dân",
            "B": "Trong nội bộ Đảng",
            "C": "Trong Nhà nước",
            "D": "Trong giai cấp công nhân"
        },
        "answer": "B",
        "explanation": "Phát huy ý kiến đảng viên và dân chủ nội bộ tạo cơ sở cho quyết định tập trung đúng đắn, đoàn kết và thống nhất hành động của Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75-76."
    },
    {
        "question": "Điểm khác nhau trong tư tưởng và xây dựng nhà nước của Hồ Chí Minh và tiền nhân trong lịch sử",
        "options": {
            "A": "Con đường cứu nước",
            "B": "Phương pháp cứu nước",
            "C": "Tinh thần yêu nước.",
            "D": "Tất cả phương án tiến"
        },
        "answer": "A",
        "explanation": "Hồ Chí Minh kế thừa lòng yêu nước nhưng tìm đường cứu nước theo cách mạng vô sản, khác các khuynh hướng cứu nước của tiền bối.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29,46-47."
    },
    {
        "question": "Theo Hồ Chí Minh, đoàn kết là điểm nào sau đây?",
        "options": {
            "A": "Điểm mẹ",
            "B": "Điểm quyết định",
            "C": "Điểm thắng lợi",
            "D": "Điểm ăn tiền"
        },
        "answer": "A",
        "explanation": "Đoàn kết là điều kiện sinh ra sức mạnh và giúp giải quyết các nhiệm vụ khác; hình ảnh điểm mẹ nhấn mạnh vai trò nền tảng ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99."
    },
    {
        "question": "Hiến pháp năm 1959 đã tiếp tục khẳng định quan điểm gì trong tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Bảo đảm dân quyền trong việc xác lập quyền lực của nhân dân.",
            "B": "Bảo đảm dân chủ trong việc xác lập quyền lực của nhân dân.",
            "C": "Bảo đảm dân chủ trong việc xác lập quyền lực của nhà nước.",
            "D": "Bảo đảm dân quyền trong việc xác lập quyền lực của chính quyền."
        },
        "answer": "B",
        "explanation": "Quyền lực thuộc nhân dân, bộ máy nhà nước do dân lập và nhận sự ủy quyền của dân; đó là cơ sở dân chủ của việc xác lập quyền lực.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 82-85."
    },
    {
        "question": "Nguyễn Tất Thành lấy tên là Nguyễn Ái Quốc vào thời gian nào?",
        "options": {
            "A": "Khi Bác lên tàu từ bến Nhà Rồng năm 1911.",
            "B": "Khi Bác tham gia sáng lập Đảng cộng sản Pháp tại Đại hội Tua 12/1920.",
            "C": "Tại hội nghị Vécxay (Pháp) ngày 18/6/1919.",
            "D": "Khi Bác sang Liên Xô làm việc ở Ban phương Đông của Quốc tế Cộng sản tháng 6/1923."
        },
        "answer": "C",
        "explanation": "Ngày 18/6/1919, Người dùng tên Nguyễn Ái Quốc khi gửi Yêu sách của nhân dân An Nam tới Hội nghị Vécxây, đòi quyền tự do, dân chủ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29."
    },
    {
        "question": "Nguyễn Ái Quốc đọc \"Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa\" của Lênin vào thời gian nào?",
        "options": {
            "A": "7/1917",
            "B": "7/1918",
            "C": "7/1919",
            "D": "7/1920"
        },
        "answer": "D",
        "explanation": "Luận cương được tiếp cận tháng 7/1920 giúp Người xác định con đường cách mạng vô sản; mốc này đi trước việc tham gia sáng lập Đảng Cộng sản Pháp cuối năm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29-30."
    },
    {
        "question": "Nguyễn Tất Thành tham dự cuộc biểu tình chống thuế của nông dân tỉnh Thừa Thiên vào thời gian nào?",
        "options": {
            "A": "5/1905",
            "B": "5/1906",
            "C": "5/1908",
            "D": "6/1911"
        },
        "answer": "C",
        "explanation": "Giáo trình ghi Người tham gia biểu tình chống thuế ở Huế năm 1908, cho thấy sớm gắn bó với đấu tranh của nhân dân. Đoạn này không xác nhận riêng tháng 5.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 28-29."
    },
    {
        "question": "Tư tưởng nào sau đây ảnh hưởng chủ yếu đến sự hình thành tư tưởng Hồ Chí Minh? (NHUNG HOÀNG)",
        "options": {
            "A": "Đức hy sinh của Hồi giáo",
            "B": "Đức hy sinh của Nho giáo",
            "C": "Đức hy sinh của Ấn độ giáo",
            "D": "Đức hy sinh của Thiên chúa giáo"
        },
        "answer": "D",
        "explanation": "Giáo trình xác nhận tiếp thu các giá trị nhân văn của văn hóa phương Tây nhưng chưa trực tiếp nêu cụm đức hy sinh của Thiên chúa giáo. Không nên hiểu đây là nguồn ảnh hưởng quyết định thay cho chủ nghĩa Mác-Lênin.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24-25."
    },
    {
        "question": "Một trong những nguyên tắc phương pháp luận khi nghiên cứu tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Kết hợp nghiên cứu các tác phẩm với thực tiễn chỉ đạo cách mạng của Hồ Chí Minh.",
            "B": "Kết hợp nghiên cứu các tác phẩm với thực tiễn cách mạng thế giới.",
            "C": "Kết hợp nghiên cứu các tác phẩm với thực tiễn cách mạng Việt Nam.",
            "D": "Kết hợp thực tiễn cách mạng Việt Nam và cách mạng thế giới."
        },
        "answer": "A",
        "explanation": "Tư tưởng thể hiện cả trong tác phẩm và hành động chỉ đạo; nghiên cứu văn bản riêng lẻ sẽ bỏ sót hoặc hiểu sai nội dung thực tiễn của tư tưởng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 14."
    },
    {
        "question": "Hồ Chí Minh bị quân Tưởng Giới Thạch bắt năm nào?",
        "options": {
            "A": "Năm 1944",
            "B": "Năm 1942",
            "C": "Năm 1941",
            "D": ""
        },
        "answer": "B",
        "explanation": "Giáo trình ghi Hồ Chí Minh ở nhà tù Tưởng Giới Thạch tháng 8/1943 khi bàn về văn hóa, nhưng không nêu trực tiếp năm bị bắt. Mốc 1942 ở B hiện giữ theo bộ câu hỏi, chưa được xác nhận bằng đoạn này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Tư tưởng bạo lực cách mạng của Hồ Chí Minh gắn bó hữu cơ với: (NHUNG HOÀNG)",
        "options": {
            "A": "Nhân văn, hòa bình",
            "B": "Nhân đạo, hòa bình",
            "C": "Tự do, hòa bình",
            "D": "Dân chủ, hòa bình"
        },
        "answer": "B",
        "explanation": "Bạo lực nhằm chống bạo lực áp bức và giành độc lập; Người ưu tiên giải pháp hòa bình, hạn chế tổn thất, chỉ chiến đấu khi không thể tránh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 51-52."
    },
    {
        "question": "Nội dung cốt lõi của vấn đề dân tộc thuộc địa được Hồ Chí Minh tiếp cận từ:",
        "options": {
            "A": "Tự do dân chủ",
            "B": "Quyền con người",
            "C": "Khát vọng giải phóng dân tộc",
            "D": "Chủ quyền dân tộc"
        },
        "answer": "B",
        "explanation": "Người xuất phát từ quyền sống, tự do và mưu cầu hạnh phúc của con người rồi suy rộng thành quyền bình đẳng, độc lập của các dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-43."
    },
    {
        "question": "Theo Hồ Chí Minh, con đường quá độ lên CNXH ở Việt Nam là:",
        "options": {
            "A": "Quá độ trực tiếp.",
            "B": "Quá độ gián tiếp.",
            "C": "Quá độ kết hợp nhiều hình thức.",
            "D": "Quá độ gián tiếp cụ thể."
        },
        "answer": "D",
        "explanation": "Việt Nam đi lên từ nước nông nghiệp lạc hậu, không kinh qua giai đoạn phát triển tư bản chủ nghĩa; đó là quá độ gián tiếp. Từ cụ thể ở D không phải một loại quá độ riêng trong giáo trình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 54-55,62."
    },
    {
        "question": "Hồ Chí Minh cho rằng quá độ lên chủ nghĩa xã hội ở Việt Nam phải tiến hành:",
        "options": {
            "A": "Dần dần, từng bước một",
            "B": "Nhanh chóng, chính xác",
            "C": "Cận thận, không chủ quan",
            "D": "Tiến nhanh, tiến mạnh"
        },
        "answer": "A",
        "explanation": "Xuất phát điểm thấp và nhiệm vụ cải biến sâu sắc làm thời kỳ quá độ lâu dài, phức tạp; phải từng bước, tránh nóng vội và chủ quan.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng phải triệt để thực hành dân chủ, mà trước hết dân chủ trong:",
        "options": {
            "A": "Nội bộ Đảng.",
            "B": "Chính quyền.",
            "C": "Nhân dân.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Dân chủ trong Đảng phát huy trách nhiệm đảng viên và là cơ sở để đi đến thống nhất; tự phê bình, phê bình củng cố đoàn kết nội bộ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75-76.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, tập trung trong Đảng có nghĩa là thiểu số phục tùng đa số, cấp dưới phục tùng cấp trên, tất cả đảng viên chấp hành: (NHUNG HOÀNG)",
        "options": {
            "A": "Vô điều kiện nghị quyết của Tổng bí thư.",
            "B": "Vô điều kiện nghị quyết của Chủ tịch nước.",
            "C": "Vô điều kiện nghị quyết của Đảng.",
            "D": "Vô điều kiện nghị quyết của Quốc hội."
        },
        "answer": "C",
        "explanation": "Sau khi thảo luận dân chủ, Đảng phải thống nhất ý chí và hành động; đảng viên chấp hành nghị quyết của tổ chức, không phải ý chí riêng của một cá nhân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75-76."
    },
    {
        "question": "Theo Hồ Chí Minh, trong quá trình hoạt động, Đảng ta phải chủ ý học tập, kế thừa những kinh nghiệm tốt của các đảng cộng sản khác, đồng thời Đảng ta phải tổng kết kinh nghiệm của mình để:",
        "options": {
            "A": "Bổ sung lý luận về Đảng Cộng sản cầm quyền",
            "B": "Bổ sung tư duy của Đảng Cộng sản",
            "C": "Bổ sung đường lối của Đảng Cộng sản",
            "D": "Bổ sung chủ nghĩa Mác - Lênin."
        },
        "answer": "A",
        "explanation": "Giữ nền tảng Mác-Lênin đồng thời tổng kết thực tiễn, tự chỉnh đốn và học kinh nghiệm giúp Đảng phát triển lý luận, tránh giáo điều khi cầm quyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75-77."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, Đảng phải thường xuyên tự đổi mới, tự chỉnh đốn về mặt:",
        "options": {
            "A": "Chính trị, tư tưởng.",
            "B": "Tư tưởng, tổ chức.",
            "C": "Tổ chức, chính trị.",
            "D": "Chính trị, tổ chức, tư tưởng."
        },
        "answer": "D",
        "explanation": "Tự chỉnh đốn phải tác động đồng bộ nền tảng tư tưởng, đường lối chính trị và tổ chức hoạt động; chỉ sửa một mặt sẽ không bảo đảm Đảng trong sạch, vững mạnh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75-77,94."
    },
    {
        "question": "Hồ Chí Minh cho rằng cán bộ, đảng viên không được:",
        "options": {
            "A": "Theo đuôi quần chúng",
            "B": "Làm theo quần chúng",
            "C": "Đi trước quần chúng",
            "D": "Làm gương cho quần chúng"
        },
        "answer": "A",
        "explanation": "Cán bộ vừa phục vụ vừa lãnh đạo, phải sáng suốt và có trách nhiệm; theo đuôi quần chúng là từ bỏ vai trò tổ chức, hướng dẫn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 78,86."
    },
    {
        "question": "Một trong những nguyên tắc xây dựng Đảng của Hồ Chí Minh là:",
        "options": {
            "A": "Tập thể lãnh đạo, quần chúng phụ trách.",
            "B": "Tập thể lãnh đạo, cá nhân phụ trách.",
            "C": "Tập thể lãnh đạo, đảng viên phụ trách.",
            "D": "Cá nhân lãnh đạo, tập thể phụ trách."
        },
        "answer": "B",
        "explanation": "Tập thể giúp xem xét nhiều mặt và tránh độc đoán; cá nhân phụ trách xác định trách nhiệm thực hiện, tránh dựa dẫm hoặc không ai chịu trách nhiệm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75."
    },
    {
        "question": "Quy luật ra đời của Đảng Cộng sản Việt Nam được Hồ Chí Minh vạch ra: (NHUNG HOÀNG)",
        "options": {
            "A": "Không phù hợp với tinh thần của chủ nghĩa Mác- Lênin",
            "B": "Trái với tinh thần của chủ nghĩa Mác- Lênin",
            "C": "Không trái với tinh thần của chủ nghĩa Mác- Lênin",
            "D": ""
        },
        "answer": "C",
        "explanation": "Bổ sung phong trào yêu nước phản ánh điều kiện thuộc địa Việt Nam; đó là phát triển sáng tạo, không phủ nhận học thuyết Mác-Lênin về Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "\"Muốn khỏi đi lạc phương hướng, (....) phải có Đảng lãnh đạo để nhận rõ tình hình, đường lối và định phương châm cho đúng\"",
        "options": {
            "A": "Quần chúng",
            "B": "Nhân dân",
            "C": "Dân tộc",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đảng định hướng, vận động và tổ chức quần chúng; vai trò người cầm lái giúp phong trào có đường lối và phương pháp thống nhất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 71-72.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, mối quan hệ giữa Đảng và Mặt trận được xác định là mối quan hệ:",
        "options": {
            "A": "Song song",
            "B": "Máu thịt",
            "C": "Biện chứng",
            "D": "Độc lập"
        },
        "answer": "B",
        "explanation": "Đảng vừa là thành viên vừa lãnh đạo Mặt trận, cùng phục vụ lợi ích dân tộc; quan hệ gắn bó về mục tiêu và lực lượng không phải hai tổ chức tách biệt.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103."
    },
    {
        "question": "Theo Hồ Chí Minh, để thực hiện đoàn kết quốc tế thì đoàn kết (....) \"là điều kiện quan trọng nhất để bảo đảm cho phong trào cộng sản và công nhân toàn thắng\"",
        "options": {
            "A": "Giữa các Đảng",
            "B": "Giữa các chính phủ",
            "C": "Giữa các dân tộc",
            "D": "Tất cả các phương án"
        },
        "answer": "A",
        "explanation": "Đoàn kết các đảng cộng sản và phong trào công nhân tạo thống nhất quốc tế chống chủ nghĩa đế quốc, bảo đảm sức mạnh của phong trào cách mạng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 108,111."
    },
    {
        "question": "Quan điểm nào sau đây được xem là đánh giá của Hồ Chí Minh về giá trị của dân chủ:",
        "options": {
            "A": "Dân chủ là của quý báu nhất của nhân dân",
            "B": "Dân chủ là tài sản quý báu nhất của dân quyền",
            "C": "Dân chủ là tài sản của mọi chế độ xã hội",
            "D": "Dân chủ là tài sản vô giá của mọi xã hội không có sự phân chia giai cấp"
        },
        "answer": "A",
        "explanation": "Dân chủ làm cho quyền hành và lực lượng ở nơi dân, phát huy chủ thể xây dựng xã hội mới; vì vậy được đánh giá là giá trị quý báu của nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 60."
    },
    {
        "question": "Hồ Chí Minh đưa ra mấy điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc?",
        "options": {
            "A": "Bốn",
            "B": "Năm",
            "C": "Sáu",
            "D": "Ba"
        },
        "answer": "B",
        "explanation": "Năm nội dung gồm tâm lý, luân lý, xã hội, chính trị và kinh tế; đây là định hướng xây dựng văn hóa dân tộc nêu năm 1943.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 123."
    },
    {
        "question": "Theo Hồ Chí Minh, văn nghệ (bao gồm văn học và nghệ thuật) là biểu hiện tập trung nhất của nền văn hóa, là đỉnh cao của đời sống tinh thần, là hình ảnh của:",
        "options": {
            "A": "Trí tuệ dân tộc.",
            "B": "Vật chất dân tộc .",
            "C": "Tâm hồn dân tộc.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Văn nghệ phản ánh đời sống, khát vọng và tình cảm của nhân dân, bồi dưỡng lý tưởng; vì thế đáp án tâm hồn dân tộc phù hợp về nội dung. Cụm đỉnh cao không được dẫn nguyên văn ở đây.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 121-123.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh: Trung với nước là tuyệt đối trung thành với sự nghiệp dựng nước và giữ nước, trung thành với con đường đi lên của đất nước là suốt đời phấn đấu cho:",
        "options": {
            "A": "Đảng, cho cách mạng.",
            "B": "Nhà nước, cho cách mạng.",
            "C": "Dân tộc, cho cách mạng.",
            "D": "Cách mạng, quần chúng"
        },
        "answer": "A",
        "explanation": "Trung với nước gắn với trung thành Tổ quốc và con đường cách mạng, suốt đời phấn đấu vì Đảng, nhân dân và sự nghiệp dựng nước, giữ nước.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 128."
    },
    {
        "question": "Theo Hồ Chí Minh, tính khoa học của nền văn hoá mới thể hiện ở tính hiện đại, tiên tiến, thuận với:",
        "options": {
            "A": "Trào lưu tiến hoá của dân tộc.",
            "B": "Trào lưu tiến hoá của thời đại.",
            "C": "Trào lưu tiến hoá của khoa học kỹ thuật.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Tính khoa học đòi hỏi văn hóa tiến bộ, tiếp thu cái mới và loại bỏ ảnh hưởng lạc hậu; cụm trào lưu tiến hóa của thời đại là cách diễn đạt của bộ câu hỏi, không được chép nguyên văn trong giáo trình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 63,123.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nội dung nào đúng về năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc theo tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Xây dựng luân lý, tâm lý, xã hội, chính trị, kinh tế",
            "B": "Xây dựng luân lý, tâm lý, xã hội, chính trị, luật pháp",
            "C": "Xây dựng luân lý, tâm lý, xã hội, chính trị, khoa học",
            "D": ""
        },
        "answer": "A",
        "explanation": "Năm mặt xây dựng văn hóa là tâm lý, luân lý, xã hội, chính trị, kinh tế; luật pháp hoặc khoa học không thay thế mặt kinh tế trong danh sách này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 123.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh xác định trong thế giới không có gì mạnh bằng:",
        "options": {
            "A": "Giai cấp công nhân",
            "B": "Liên minh công - nông",
            "C": "Lực lượng đoàn kết của nhân dân",
            "D": "Sức mạnh đoàn kết quốc tế"
        },
        "answer": "C",
        "explanation": "Nhân dân tạo ra lịch sử bằng sản xuất, đấu tranh và sáng tạo; đoàn kết biến lực lượng đông đảo ấy thành sức mạnh quyết định của cách mạng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 138."
    },
    {
        "question": "Mục đích chung của Mặt trận dân tộc thống nhất được Hồ Chí Minh xác định cụ thể phù hợp là:",
        "options": {
            "A": "Đoàn kết chặt chẽ, lâu dài, thật sự, chân thành.",
            "B": "Tất cả các phương án.",
            "C": "Độc lập, tự do.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Mục tiêu chung về độc lập của Tổ quốc, tự do và hạnh phúc của dân quy tụ các lực lượng khác biệt; phương pháp đoàn kết phải phục vụ mục tiêu ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 101-103.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, Đảng lãnh đạo nhà nước bằng:",
        "options": {
            "A": "Đường lối, quan điểm, chủ trương",
            "B": "Pháp luật, chính sách, kế hoạch",
            "C": "Tất cả các phương án",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đảng đề ra đường lối, quan điểm và chủ trương; Nhà nước thể chế hóa thành pháp luật, chính sách, kế hoạch để tổ chức thực hiện.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 82.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, nền tảng tư tưởng của Đảng Cộng sản Việt Nam là gì?",
        "options": {
            "A": "Chủ nghĩa xã hội",
            "B": "Chủ nghĩa Mác-Lênin",
            "C": "Chủ nghĩa xã hội dân chủ",
            "D": "Chủ nghĩa Tam dân"
        },
        "answer": "B",
        "explanation": "Chủ nghĩa Mác-Lênin cung cấp nền tảng lý luận và phương hướng hành động; phải vận dụng sáng tạo phù hợp hoàn cảnh, tránh giáo điều.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75."
    },
    {
        "question": "Hồ Chí Minh khẳng định sức mạnh của Đảng bắt nguồn từ:",
        "options": {
            "A": "Con người.",
            "B": "Tổ chức.",
            "C": "Dân tộc.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Tổ chức chặt chẽ, dân chủ gắn tập trung và kỷ luật tự giác tạo thống nhất ý chí, hành động; nhờ đó số đông đảng viên trở thành sức mạnh chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75-77.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, nội dung quy định bản chất giai cấp công nhân là:",
        "options": {
            "A": "Số lượng đảng viên xuất thân từ giai cấp công nhân.",
            "B": "Nền tảng lý luận và tư tưởng của Đảng là chủ nghĩa Mác - Lênin.",
            "C": "Tất cả các phương án",
            "D": ""
        },
        "answer": "B",
        "explanation": "Bản chất của Đảng gắn với hệ tư tưởng, mục tiêu và nguyên tắc của giai cấp công nhân, không chỉ phụ thuộc tỷ lệ đảng viên xuất thân công nhân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72,75.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong tư tưởng đạo đức Hồ Chí Minh, đức và tài, hồng và chuyên, phẩm chất và năng lực thống nhất làm một. Đó là đạo đức trong hành động, lấy:",
        "options": {
            "A": "Số lượng công việc làm thước đo.",
            "B": "Hiệu quả thực tế làm thước đo.",
            "C": "Chất lượng công việc làm thước đo.",
            "D": "Trình độ chuyên môn nghiệp vụ làm thước đo."
        },
        "answer": "B",
        "explanation": "Đạo đức được chứng minh bằng hành động và đóng góp thiết thực; hiệu quả thực tế phản ánh sự thống nhất giữa phẩm chất và năng lực, thay cho nói suông.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 125."
    },
    {
        "question": "Câu nói nào sau đây là của Hồ Chí Minh? (NHUNG HOÀNG)",
        "options": {
            "A": "Học không biết chán, dạy không biết mỏi",
            "B": "Học, học nữa, học mãi",
            "C": "Việc học không bao giờ cùng, còn sống còn phải học",
            "D": ""
        },
        "answer": "C",
        "explanation": "Giáo trình đề cao tự học, rèn luyện để nâng cao năng lực nhưng không dẫn trực tiếp ba câu trong lựa chọn. Vì vậy chưa thể xác nhận tác giả câu C chỉ từ PDF này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 15-16.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh xem xét con người trong sự thống nhất của hai mặt đối lập: thiện và ác, hay và dở, tốt và xấu, hiền và dữ,... nhưng:",
        "options": {
            "A": "\"dù là xấu, tốt, văn minh hay dã man đều có lý\".",
            "B": "\"dù là xấu, tốt, văn minh hay dã man đều có tình\".",
            "C": "\"dù là xấu, tốt, văn minh hay dã man đều có đức\".",
            "D": "\"dù là xấu, tốt, văn minh hay dã man đều có học\"."
        },
        "answer": "B",
        "explanation": "Con người phải được nhìn toàn diện, có mặt tốt và mặt chưa tốt; giáo dục cần khoan dung và phát huy phần thiện. Giáo trình không dẫn nguyên văn câu đều có tình, nên không coi đây là đối chiếu nguyên văn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 101,136-137."
    },
    {
        "question": "Nguyên tắc xây dựng đạo đức mới theo tư tưởng Hồ Chí Minh gồm:",
        "options": {
            "A": "2 nguyên tắc.",
            "B": "3 nguyên tắc.",
            "C": "4 nguyên tắc.",
            "D": "5 nguyên tắc."
        },
        "answer": "B",
        "explanation": "Ba nguyên tắc là nói đi đôi với làm và nêu gương; xây đi đôi với chống; tu dưỡng đạo đức suốt đời.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 132-136."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Nền văn hoá XHCN là một nền văn hoá lấy (.............) của đồng bào làm cơ sở\".",
        "options": {
            "A": "Tự do",
            "B": "Ấm no",
            "C": "Hạnh phúc",
            "D": "Tất cả các phương án trả lời đều đúng"
        },
        "answer": "C",
        "explanation": "Mục tiêu văn hóa gắn quyền sống, tự do, sung sướng, mưu cầu hạnh phúc và nâng cao đời sống nhân dân. Nội dung ủng hộ C, nhưng giáo trình không chép nguyên văn câu điền từ này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 121."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Tiến lên CNXH là bước phát triển tất yếu ở Việt Nam sau khi nước nhà đã giành được (.........) theo con đường cách mạng vô sản.",
        "options": {
            "A": "Tự do",
            "B": "Bình đẳng",
            "C": "Độc lập",
            "D": "Tất cả các phương án trả lời đều đúng trả lời đều đúng"
        },
        "answer": "C",
        "explanation": "Độc lập dân tộc là tiền đề của quá trình xây dựng chủ nghĩa xã hội, còn chủ nghĩa xã hội bảo đảm độc lập được bền vững và có nội dung thực chất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 54-55,65."
    },
    {
        "question": "Theo Hồ Chí Minh, giải phóng phụ nữ để .......... với nam giới, thực sự tham gia tích cực vào các công việc xã hội.",
        "options": {
            "A": "Tự do",
            "B": "Công bằng",
            "C": "Bình đẳng",
            "D": "Dân chủ"
        },
        "answer": "C",
        "explanation": "Giải phóng phụ nữ nhằm bảo đảm quyền con người và bình đẳng, tạo điều kiện tham gia công việc xã hội; không chỉ là tuyên bố tự do hình thức.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 89,56-57."
    },
    {
        "question": "Theo Hồ Chí Minh, dân chủ thể hiện ở việc bảo đảm quyền:",
        "options": {
            "A": "Con người, quyền giai cấp",
            "B": "Con người, quyền nhân dân",
            "C": "Con người, quyền dân tộc",
            "D": "Con người, quyền công dân"
        },
        "answer": "D",
        "explanation": "Dân chủ bảo đảm các quyền con người và quyền công dân, đồng thời gắn quyền với nghĩa vụ; không giới hạn quyền theo một giai cấp hay nhóm riêng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 59,89."
    },
    {
        "question": "Một trong những nội dung chính trong thực hiện cách mạng nước ta hiện nay là:(NHUNG HOÀNG)",
        "options": {
            "A": "Độc lập dân tộc gắn liên với bảo vệ chủ quyền",
            "B": "Độc lập dân tộc gắn liên chủ nghĩa xã hội",
            "C": "Dân tộc giải phóng, cách mạng thành công",
            "D": "Dân tộc và giai cấp"
        },
        "answer": "B",
        "explanation": "Độc lập dân tộc và chủ nghĩa xã hội là hai mục tiêu thống nhất: giành độc lập tạo tiền đề, xây dựng xã hội mới bảo đảm độc lập và hạnh phúc lâu dài.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 65-68."
    },
    {
        "question": "Theo Hồ Chí Minh, \"kẻ thù hung ác của chủ nghĩa xã hội\" là:",
        "options": {
            "A": "Chủ nghĩa dân tộc",
            "B": "Chủ nghĩa đế quốc",
            "C": "Chủ nghĩa cá nhân",
            "D": "Chủ nghĩa tư bàn"
        },
        "answer": "C",
        "explanation": "Chủ nghĩa cá nhân đặt tư lợi lên lợi ích chung, sinh ra tham lam, kiêu ngạo và vô kỷ luật, cản trở xây dựng xã hội mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 61,65."
    },
    {
        "question": "Theo Hồ Chí Minh, nguyên tắc phân phối chủ yếu trong chủ nghĩa xã hội là gì?",
        "options": {
            "A": "Làm theo năng lực, hưởng theo nhu cầu",
            "B": "Làm nhiêu hưởng nhiều, làm ít hưởng ít, không làm không hưởng",
            "C": "Phân phối bình quân cho tất cả mọi người",
            "D": "Phân phối theo thoa thuận"
        },
        "answer": "B",
        "explanation": "Phân phối gắn với đóng góp lao động nhằm bảo đảm công bằng; giáo trình lưu ý ngoại lệ với người chưa có hoặc không còn khả năng lao động.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 57."
    },
    {
        "question": "Theo Hồ Chí Minh, chủ nghĩa cá nhân, lợi mình hại người, tự do vô tổ chức, vô kỷ luật và những tính xấu khác được coi là:",
        "options": {
            "A": "\"Kẻ địch nguy hiểm của chủ nghĩa xã hội\"",
            "B": "\"Đối lập với chủ nghĩa xã hội\"",
            "C": "\"Cần loại bò trong chủ nghĩa xã hội\"",
            "D": "\"Không thuộc vẽ chủ nghĩa xã hội\""
        },
        "answer": "A",
        "explanation": "Chủ nghĩa cá nhân phá hoại đoàn kết, tổ chức và trách nhiệm phục vụ dân; vì thế là lực cản bên trong cần chống khi xây dựng chủ nghĩa xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 61,65."
    },
    {
        "question": "Đối tượng chủ yếu của tư tưởng Hồ Chí Minh là:(073-356-8678)",
        "options": {
            "A": "Cách mạng xã hội chủ nghĩa",
            "B": "Cách mạng Việt Nam",
            "C": "Cách mạng Đông Dương",
            "D": "Cách mạng dân tộc dân chủ nhân dân"
        },
        "answer": "B",
        "explanation": "Môn học nghiên cứu hệ thống quan điểm Hồ Chí Minh về các vấn đề cơ bản của cách mạng Việt Nam và quá trình vận dụng chúng trong thực tiễn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 9-10."
    },
    {
        "question": "Nội dung nào sau đây thuộc luận điểm sáng tạo của Hồ Chí Minh về vấn đề Đảng cộng sản? (NHUNG HOÀNG)",
        "options": {
            "A": "Về quy luật ra đời của Đảng Cộng sản Việt Nam",
            "B": "Về vấn đề tổ chức của Đảng Cộng sản Việt Nam",
            "C": "Về nguyên tắc xây dựng Đảng Cộng sản Việt Nam",
            "D": ""
        },
        "answer": "C",
        "explanation": "CẦN KIỂM TRA ĐÁP ÁN: Giáo trình xác định sáng tạo nổi bật là bổ sung phong trào yêu nước vào quy luật ra đời của Đảng ở Việt Nam. Với các lựa chọn của câu này, A có căn cứ trực tiếp hơn C.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, vi trùng rất độc này đẻ ra... không dám đổi mới sáng tạo. Người đang đề cập đến vấn đề gì?(NHUNG HOÀNG)",
        "options": {
            "A": "Chủ nghĩa cá nhân",
            "B": "Đế quốc",
            "C": "Chủ nghĩa tư bản",
            "D": "Giặc đói"
        },
        "answer": "A",
        "explanation": "Chủ nghĩa cá nhân được ví như vi trùng độc vì làm nảy sinh nhiều thói xấu, gây hại người cán bộ, nhân dân và tổ chức Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 65,135."
    },
    {
        "question": "Sức mạnh dân tộc trong tư tưởng Hồ Chí Minh bao gồm những thành tố nào?(NHUNG HOÀNG)",
        "options": {
            "A": "Chủ nghĩa yêu nước và văn hóa truyền thống Việt Nam Chủ nghĩa yêu nước và truyền thống văn hóa Việt Nam; tinh thần đoàn kết, ý thức đấu tranh cho độc lập, tự do; và tĩnh thần quốc tế vô sản",
            "B": "Tinh thần đoàn kết, ý thức đấu tranh cho độc lập, tự do",
            "C": "Ý chí tự lực, tự cường và tinh thần quốc tế vô sản",
            "D": "Chủ nghĩa yêu nước và truyền thống văn hóa Việt Nam; tinh thần đoàn kết, ý thức đấu tranh cho độc lập, tự do; và ý chí tự lực, tự cường"
        },
        "answer": "D",
        "explanation": "Sức mạnh dân tộc tổng hợp yếu tố vật chất và tinh thần, nổi bật là yêu nước, đoàn kết, ý chí đấu tranh độc lập và tự lực tự cường; D bao quát hơn các phương án riêng lẻ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 106."
    },
    {
        "question": "Theo Hồ Chí Minh cho rằng đạo đức cách mạng không phải là điều gì?",
        "options": {
            "A": "Từ trên trời sa xuống",
            "B": "Phẩm chất vốn có",
            "C": "Tự nhiên mà có",
            "D": "Có sẵn trong tự nhiên"
        },
        "answer": "A",
        "explanation": "Đạo đức không tự nhiên có sẵn; nó hình thành và củng cố qua giáo dục, tự tu dưỡng và rèn luyện bền bỉ trong thực tiễn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 136."
    },
    {
        "question": "Theo quan điểm của Hồ Chí Minh, đại đoàn kết dân tộc là một mục tiêu, nhiệm vụ hàng đầu của cách mạng Việt Nam và đồng thời cách mạng là sự nghiệp của ai?(NHUNG HOÀNG)",
        "options": {
            "A": "Của quần chúng, do quần chúng và vì quần chúng",
            "B": "Của dân, do dân và vì dân",
            "C": "Của người lao động nói chung",
            "D": "Của công - nông - trí"
        },
        "answer": "A",
        "explanation": "Nhân dân là người thực hiện và thụ hưởng cách mạng; Đảng có nhiệm vụ tập hợp, hướng dẫn quần chúng thành lực lượng đoàn kết có tổ chức.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99."
    },
    {
        "question": "\"Đến ngày thắng lợi, nhân dân ta sẽ xây dựng lại đất nước ta đàng hoàng hơn, to đẹp hơn!”. Điều khẳng định trên được Hồ Chí Minh nêu ra tại văn kiện nào sau đây?(NHUNG HOÀNG)",
        "options": {
            "A": "Lời kêu gọi toàn quốc kháng chiến",
            "B": "Bài phát biểu tại lễ kỷ niệm 30 năm thành lập Đảng",
            "C": "Lời kêu gọi đồng bào và chiến sĩ cả nước",
            "D": "Di chúc"
        },
        "answer": "C",
        "explanation": "Giáo trình dẫn lời kêu gọi ngày 17/7/1966, khẳng định quyết tâm chống Mỹ và niềm tin xây dựng lại đất nước sau thắng lợi; đó là Lời kêu gọi đồng bào và chiến sĩ cả nước.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 35."
    },
    {
        "question": "Kiểm soát quyền lực Nhà nước và phòng, chống tiêu cực trong Nhà nước, được xác định là nội dung nào trong tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân?",
        "options": {
            "A": "Nhà nước dân chủ",
            "B": "Nhà nước pháp quyền",
            "C": "Nhà nước trong sạch, vững mạnh",
            "D": "Xây dựng nhà nước"
        },
        "answer": "C",
        "explanation": "Kiểm soát quyền lực ngăn lạm quyền; chống tham ô, lãng phí và quan liêu ngăn suy thoái bộ máy. Hai nội dung thuộc xây dựng nhà nước trong sạch, vững mạnh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 90-93."
    },
    {
        "question": "Lựa chọn cụm từ đúng điền vào chỗ trống: \"Hồ Chí Minh cho rằng, đối với các dân tộc phương Đông vốn . . . . , việc tu dưỡng đạo đức của mỗi cá nhân, mỗi con người có vai trò vô cùng . . . .\" [Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học không chuyển lý luận chính trị), Nxb. CTQG Sự thật, H, 2021. Tr 136]",
        "options": {
            "A": "Giàu tình cảm, trọng đạo lý; quan trọng",
            "B": "Giàu tình cảm, trong tình nghĩa, quan trọng",
            "C": "Giàu tình cảm, trong tình nghĩa, ý nghĩa",
            "D": "Giàu cảm xúc, trong tình nghĩa, ý nghĩa"
        },
        "answer": "A",
        "explanation": "Giáo trình nêu đặc điểm giàu tình cảm, trọng đạo lý của các dân tộc phương Đông để nhấn mạnh vai trò quan trọng của tự tu dưỡng đạo đức. Trang 136 trong câu hỏi không trùng trang PDF đang dùng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 144."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh đã tiếp thu về hành động, tư tưởng nhập thế, hành động, giúp đời; ước vọng về một xã hội bình trị, hoà mực, hoà đồng; triết lý nhân sinh; tu thân dưỡng tính; đề cao văn hoá lễ giáo, tạo ra truyền thống hiếu học từ triết lý nào?",
        "options": {
            "A": "Phật giáo",
            "B": "Nho giáo",
            "C": "Chủ nghĩa Tam dân",
            "D": "Công giáo"
        },
        "answer": "B",
        "explanation": "Nhập thế, tu thân, giúp đời, lễ giáo và hiếu học là những giá trị tích cực của Nho giáo được Người tiếp thu có chọn lọc, không tiếp nhận nguyên xi trật tự phong kiến.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 23."
    },
    {
        "question": "Chọn phương án chính xác nhất: Trong Bài nói tại Đại hội sinh viên Việt Nam lần thứ hai (7-5- 1958), Hồ Chí Minh đã xác định những phẩm chất cho thanh niên, sinh viên Việt Nam là",
        "options": {
            "A": "Yêu Tổ quốc, yêu nhân dân",
            "B": "Yêu Tổ quốc, yêu nhân dân, yêu chủ nghĩa xã hội",
            "C": "Yêu Tổ quốc, yêu nhân dân, yêu chủ nghĩa xã hội, yêu lao động",
            "D": "Yêu Tổ quốc, yêu nhân dân, yêu chủ nghĩa xã hội, yêu lao động, yêu khoa học và kỷ luật"
        },
        "answer": "D",
        "explanation": "Những phẩm chất trong D phù hợp định hướng sinh viên phục vụ Tổ quốc, nhân dân, lao động và học tập. Tuy nhiên PDF chưa dẫn trực tiếp danh sách ấy cùng bài nói ngày 7/5/1958; cần kiểm tra nguồn trích.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 143-148."
    },
    {
        "question": "Theo Hồ Chí Minh, sau khi hoàn thành bình định Việt Nam về mặt quân sự và bắt tay vào khai thác thuộc địa, thực dân Pháp đã biến nước ta từ một nước phong kiến thành nước như thế nào?",
        "options": {
            "A": "Thuộc địa và phong kiến",
            "B": "Phong kiến nửa thuộc địa",
            "C": "Phong kiến tập quyền",
            "D": "Phong kiến phân quyền"
        },
        "answer": "A",
        "explanation": "Sự xâm lược và khai thác của Pháp áp đặt ách thuộc địa đồng thời duy trì quan hệ phong kiến; điều kiện đó quy định nhiệm vụ giải phóng dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 19-20."
    },
    {
        "question": "Theo Hồ Chí Minh, biện pháp nào quan trọng nhất trong xây dựng chủ nghĩa xã hội?(NHUNG HOÀNG)",
        "options": {
            "A": "Tranh thủ tối đa sự giúp đỡ, viện trợ quốc tế",
            "B": "Kết hợp cải tạo xã hội cũ và xây dựng xã hội mới",
            "C": "Huy động các nguồn lực sẵn có trong dân",
            "D": "Kết hợp xây dựng và bảo vệ đất nước"
        },
        "answer": "C",
        "explanation": "Nhân dân là lực lượng quyết định xây dựng chủ nghĩa xã hội; phát huy lợi ích, quyền làm chủ và sức đoàn kết của dân giúp huy động nội lực.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 57,59-60.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo Hồ Chí Minh, cách làm trong xây dựng xã hội mới là: A. Tranh thủ tối đa sự giúp đỡ, viện trợ quốc tế B. Đem của dân, tài dân, sức dân làm lợi cho dân C. Kết hợp cải tạo xã hội cũ với xây dựng xã hội mới D. Kết hợp xây dựng và bảo vệ đất nước)"
    },
    {
        "question": "Chọn câu trả lời đúng nhất với tư tưởng Hồ Chí Minh về vai trò của đại đoàn kết dân tộc: (NHUNG HOÀNG)",
        "options": {
            "A": "Đại đoàn kết dân tộc là vấn đề chiến lược",
            "B": "Đại đoàn kết dân tộc là vấn đề sách lược",
            "C": "Đại đoàn kết dân tộc là thủ đoạn chính trị",
            "D": "Đại đoàn kết dân tộc là phương pháp chính trị"
        },
        "answer": "A",
        "explanation": "Đại đoàn kết là chiến lược lâu dài, nhất quán và quyết định thành công; phương pháp tập hợp có thể thay đổi nhưng mục tiêu đoàn kết không phải thủ đoạn nhất thời.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98."
    },
    {
        "question": "Tư tưởng Hồ Chí Minh hình thành trên cơ sở",
        "options": {
            "A": "Vận dụng và phát triển sáng tạo chủ nghĩa Mác- Lênin",
            "B": "Tiếp thu toàn bộ chủ nghĩa Mác-Lênin",
            "C": "Tiếp thu một bộ phận của chủ nghĩa Mác- Lênin",
            "D": "Vận dụng hoàn toàn chủ nghĩa Mác - Lênin vào hoàn cảnh của Việt Nam"
        },
        "answer": "A",
        "explanation": "Chủ nghĩa Mác-Lênin cung cấp thế giới quan và phương pháp luận; Hồ Chí Minh vận dụng, phát triển sáng tạo vào điều kiện Việt Nam, không sao chép giáo điều.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 5,25-26."
    },
    {
        "question": "Con người trong quan điểm của Hồ Chí Minh được nhìn nhận như một:",
        "options": {
            "A": "Chỉnh thể",
            "B": "Tế bào",
            "C": "Xã hội",
            "D": "Cộng đồng"
        },
        "answer": "A",
        "explanation": "Con người là sự thống nhất trí lực, tâm lực, thể lực và nhiều quan hệ xã hội; chỉnh thể nghĩa là không tách riêng một mặt để đánh giá toàn bộ con người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 136-137.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Hồ Chí Minh nhìn nhận con người như điều gì? A. Chỉnh thể B. Tế bào C. Xã hội D. Cộng đồng)"
    },
    {
        "question": "Theo Hồ Chí Minh, đánh giá cán bộ phải:",
        "options": {
            "A": "Tiến hành thường xuyên",
            "B": "Khách quan, trung thực",
            "C": "Phải tự biết mình, biết người",
            "D": "Phải đủ trong sạch"
        },
        "answer": "B",
        "explanation": "Hiểu và đánh giá đúng cán bộ phải xuất phát từ phẩm chất, năng lực và kết quả thực tế, tránh thiên vị; đó là cơ sở để sử dụng và đề bạt đúng người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 81.\nGhi chú trong tài liệu: ( Đánh giá cán bộ phải khách quan, toàn diện, công tâm, minh bạch )"
    },
    {
        "question": "Đâu là nguyên tắc xây dựng đạo đức mới trong tư tưởng hồ chí minh",
        "options": {
            "A": "xây đi đôi với chống",
            "B": "xây đi đôi với bảo vệ",
            "C": "xây đi đôi với gia cố",
            "D": ""
        },
        "answer": "A",
        "explanation": "Xây là bồi dưỡng giá trị đạo đức tốt; chống là loại bỏ biểu hiện sai trái. Hai việc phải kết hợp, chống để xây và lấy xây làm chính.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 134-135.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, Mặt trận dân tộc thống nhất càng rộng rãi, sức mạnh của khối liên minh công nông trí thức càng:",
        "options": {
            "A": "Suy yếu và ngược lại.",
            "B": "Được tăng cường và ngược lại.",
            "C": "Gắn kết và ngược lại",
            "D": "Thu hẹp và ngược lại"
        },
        "answer": "B",
        "explanation": "Nền tảng công-nông-trí vững giúp mở rộng Mặt trận; tập hợp rộng rãi lại tăng sức mạnh liên minh. Hai yêu cầu hỗ trợ nhau, không loại trừ nhau.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100,103."
    },
    {
        "question": "Vấn đề dân tộc trong tư tưởng Hồ Chí Minh là sự kết hợp nhuần nhuyễn:(NHUNG HOÀNG)",
        "options": {
            "A": "Dân tộc với giai cấp.",
            "B": "Độc lập dân tộc và chủ nghĩa xã hội.",
            "C": "Chủ nghĩa yêu nước với chủ nghĩa quốc tế.",
            "D": "Tất cả các phương án."
        },
        "answer": "D",
        "explanation": "Tư tưởng giải phóng gắn dân tộc với giai cấp, độc lập với chủ nghĩa xã hội và yêu nước với quốc tế; cả ba mối quan hệ đều đúng nên chọn tất cả.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-47,65-67,107."
    },
    {
        "question": "Chọn phương án trả lời đúng với một trong những giai đoạn hình thành và phát triển tư tưởng hồ chí minh?",
        "options": {
            "A": "Từ năm 1890 - 1911: thời kỳ nghiên cứu, khảo sát thực tế, đến với chủ nghĩa mác - lênin.",
            "B": "Từ năm 1921 - 1930: thời kỳ hình thành cơ bản tư tưởng về con đường cách mạng việt nam.",
            "C": "Từ năm 1911 - 1920: thời kỳ hình thành tư tưởng yêu nước, chí hướng cứu nước",
            "D": "Từ năm 1890 - 1911: Thời kỳ vượt qua thứ thách, kiên trì giữ vững lập trường cách mạng"
        },
        "answer": "B",
        "explanation": "Hoạt động lý luận, báo chí, đào tạo và thành lập Đảng làm hình thành nội dung cơ bản về cách mạng Việt Nam. Giáo trình 2021 lấy mốc cuối 1920 đến đầu 1930, gần với cách ghi 1921-1930 của đề.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-31."
    },
    {
        "question": "Quy luật ra đời của Đảng được Hồ Chí Minh vạch ra",
        "options": {
            "A": "Dựa trên thế giới quan và phương pháp luận của chủ nghĩa Mác-Lênin",
            "B": "Dựa trên thế giới quan và phương pháp luận của chủ nghĩa Tam dân",
            "C": "Dựa trên thế giới quan và phương pháp luận của chủ nghĩa dân tộc",
            "D": ""
        },
        "answer": "A",
        "explanation": "Quy luật ra đời của Đảng được giải thích bằng học thuyết Mác-Lênin và điều kiện thực tế Việt Nam; bổ sung phong trào yêu nước là phát triển sáng tạo trên nền tảng ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, cuộc cách mạng nào đầu thế kỷ XX đã làm \"thức tỉnh các dân tộc châu Á\"",
        "options": {
            "A": "Cách mạng Trung Quốc",
            "B": "Cách mạng Ấn Độ",
            "C": "Cách mạng tháng Mười Nga",
            "D": "Cách mạng Pháp"
        },
        "answer": "C",
        "explanation": "Giáo trình xác nhận Cách mạng Tháng Mười mở ra thời đại mới, thúc đẩy giải phóng dân tộc. Tuy nhiên chưa tìm thấy câu thức tỉnh các dân tộc châu Á; không đủ căn cứ xác nhận nguyên văn này chỉ bằng PDF.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 21-22."
    },
    {
        "question": "Hồ Chí Minh cho rằng:",
        "options": {
            "A": "Văn hoá tham gia vào nhiệm vụ các hoạt động kinh tế, chính trị, xã hội và trong hoạt động của kinh tế, chính trị, xã hội cũng phải có văn hoá",
            "B": "Văn hoá tham gia vào nhiệm vụ các hoạt động kinh tế, chính trị, xã hội và trong hoạt động của kinh tế, chính trị, xã hội cũng phải có đạo đức",
            "C": "Văn hoá tham gia vào nhiệm vụ các hoạt động kinh tế, chính trị, xã hội và trong hoạt động của kinh tế, chính trị, xã hội cũng phải có tinh thần cách mạng",
            "D": "Văn hóa tham gia vào nhiệm vụ các hoạt động kinh tế, xã hội và trong hoạt động của kinh tế, chính trị, xã hội cũng phải có tinh thần quốc tế"
        },
        "answer": "A",
        "explanation": "Văn hóa liên hệ biện chứng với kinh tế, chính trị, xã hội: chịu điều kiện của các lĩnh vực ấy và tác động tích cực trở lại, không tồn tại biệt lập.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 119.\nGhi chú trong tài liệu: (Đâu là phương án chính xác nhất và đầy đủ nhất theo quan điểm Hồ Chí Minh về văn hóa?)"
    },
    {
        "question": "Hồ Chí Minh cho rằng giải phóng dân tộc phải gắn liền với",
        "options": {
            "A": "Độc lập, tự do và hạnh phúc",
            "B": "Dân quyền và tự do",
            "C": "Nhân sinh và hạnh phúc",
            "D": ""
        },
        "answer": "A",
        "explanation": "Độc lập phải thực chất, gắn tự do và đời sống hạnh phúc của dân; độc lập chỉ trên danh nghĩa hoặc dân vẫn đói khổ chưa đáp ứng mục tiêu giải phóng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 43-45.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Quan điểm nào dưới đây thuộc về bản chất của CNXH trong tư tưởng Hồ Chí Minh: (073-356- 8678)",
        "options": {
            "A": "Là chế độ không còn người bóc lột người",
            "B": "Là chế độ còn một ít người bóc lột",
            "C": "Là chế độ người bóc lột bị khinh rẻ",
            "D": "Là chế độ người bóc lột được thừa nhận"
        },
        "answer": "A",
        "explanation": "Xóa bỏ áp bức, bóc lột và bảo đảm lợi ích người lao động là khác biệt cơ bản của xã hội mới; phát triển kinh tế phải phục vụ mục tiêu ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53,56."
    },
    {
        "question": "Năm 1919, Nguyễn Ái Quốc gửi tới hội nghị Vecxay - Pháp bản yêu sách của nhân dân An Nam với hai nội dung chính đó là :",
        "options": {
            "A": "Đòi quyền bình đẳng về pháp lý và đòi quyền tự do, dân chủ",
            "B": "Đòi quyền dân tộc cơ bản và quyền tự quyết của dân tộc",
            "C": "Đòi quyền cơ bản của con người và quyền tự quyết dân tộc",
            "D": "Thể hiện tiếng nói của dân tộc và sự tôn trọng các nền văn hóa"
        },
        "answer": "A",
        "explanation": "Yêu sách năm 1919 đòi bình đẳng về pháp lý và quyền tự do, dân chủ; nó chưa trực tiếp yêu cầu độc lập hoàn toàn cho Việt Nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29,42-43."
    },
    {
        "question": "Đâu là chuẩn mực đạo đức cách mạng trong tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Trung với nước, hiếu với dân.",
            "B": "Trung với nước, hiếu với đồng bào.",
            "C": "Trung với nước, hiếu với cách mạng.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Trung với nước, hiếu với dân là chuẩn mực bao trùm: trung thành sự nghiệp dựng nước, giữ nước và tận tụy phục vụ nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 127-128.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo quan điểm của Hồ Chí Minh, phẩm chất đạo đúc nào là quan trọng nhất, bao trùm nhất, chi phối các phẩm chất khác? Trong các mệnh đề về đạo đức của mình, theo Hồ Chí Minh, đâu là cái đức lớn nhất Đầu là một trong những chuẩn mực đạo đức cách mạng trong tư tưỡng Hồ Chí Minh?)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đối với Hồ Chí Minh, toàn dân tộc chỉ trở thành lực lượng to lớn, có sức mạnh vô địch khi được tập hợp, tổ chức lại thành một khối vững chắc, được giác ngộ về mục tiêu chiến đấu chung và hoạt động theo:",
        "options": {
            "A": "Một Đảng chính trị đúng đắn",
            "B": "Một đường lối chính trị đúng đắn.",
            "C": "Một tổ chức chính trị đúng đắn",
            "D": ""
        },
        "answer": "B",
        "explanation": "Số đông riêng lẻ chưa thành sức mạnh thống nhất; cần giác ngộ mục tiêu, tổ chức thành Mặt trận và có đường lối đúng để phối hợp hành động.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99,102-103.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng xây dựng con người mới xã hội chủ nghĩa trước hết phải: (073-356- 8678)",
        "options": {
            "A": "Diệt trừ chủ nghĩa cá nhân",
            "B": "Diệt trừ văn hóa phong kiến",
            "C": "Diệt trừ văn hóa tư sản",
            "D": ""
        },
        "answer": "A",
        "explanation": "Chủ nghĩa cá nhân cản trở ý thức tập thể và trách nhiệm phục vụ dân; xây con người mới phải vừa bồi dưỡng phẩm chất tốt vừa chống lực cản này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 61,65,135.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam là Đảng",
        "options": {
            "A": "Cầm quyền",
            "B": "Quản lý",
            "C": "Phân quyền",
            "D": "Lãnh đạo"
        },
        "answer": "A",
        "explanation": "Đảng cầm quyền lãnh đạo nhà nước và xã hội nhưng quyền lực nhằm phục vụ dân; tư cách cầm quyền đi cùng trách nhiệm và đạo đức, không phải đặc quyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 73,77-78."
    },
    {
        "question": "Khi nói về mặt trận, Hồ Chí Minh cho rằng",
        "options": {
            "A": "Mặt trận phải được xây dựng trên nền tảng khối liên minh công - nông - trí thức, đặt dưới sự lãnh đạo của Đảng",
            "B": "Mặt trận phải được xây dựng trên nền tảng khối liên minh công - nông - trí thức, đặt dưới sự lãnh đạo của mặt trân phản đế",
            "C": "Mặt trận phải được xây dựng trên nền tảng khối liên minh công - nông - trí thức, đặt dưới sự lãnh đạo của giai cấp công nhân",
            "D": ""
        },
        "answer": "A",
        "explanation": "Liên minh công-nông-trí là nền tảng, sự lãnh đạo của Đảng bảo đảm đường lối; nhờ đó Mặt trận rộng rãi vẫn có mục tiêu và tổ chức thống nhất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nguyên tắc quan trọng bậc nhất trong xây dựng một nền đạo đức mới theo tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Nói đi đôi với làm",
            "B": "Nêu gương về đạo đức",
            "C": "Xây đi đôi với chống",
            "D": "Tu dưỡng đạo đức suốt đời"
        },
        "answer": "A",
        "explanation": "Nói đi đôi với làm thống nhất lời nói, lý luận và hành động, chống đạo đức giả; giáo trình xác định đây là nguyên tắc quan trọng bậc nhất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 132."
    },
    {
        "question": "Theo Hồ Chí Minh, chí công vô tư là nêu cao chủ nghĩa tập thể, trừ bỏ:",
        "options": {
            "A": "chủ nghĩa cá nhân.",
            "B": "chủ nghĩa tư nhân.",
            "C": "chủ nghĩa tư bản.",
            "D": "chủ nghĩa vị kỷ."
        },
        "answer": "A",
        "explanation": "Chí công vô tư đặt lợi ích chung lên trên tư lợi, nên đối lập chủ nghĩa cá nhân. Chống cá nhân chủ nghĩa không có nghĩa phủ nhận lợi ích cá nhân chính đáng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 130,135."
    },
    {
        "question": "Luận điểm: \"Bồi dưỡng thế hệ cách mạng cho đời sau là một việc rất quan trọng và rất cần thiết\" được trích từ bài viết/ bài nói nào của Hồ Chí Minh?",
        "options": {
            "A": "Đường Kách mệnh",
            "B": "Cần kiệm liêm chính",
            "C": "Di chúc",
            "D": "Bài nói chuyện tại Lớp bồi dưỡng cán bộ về công tác mặt trận"
        },
        "answer": "C",
        "explanation": "Giáo trình dẫn Di chúc khi nói về đào tạo lớp kế tục vừa hồng vừa chuyên; bồi dưỡng thế hệ sau bảo đảm sự tiếp nối của cách mạng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 125."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc phải biến thành sức mạnh vật chất, trở thành lực lượng vật chất có tổ chức. Tổ chức đó chính là:",
        "options": {
            "A": "Đoàn thể chính trị quần chúng.",
            "B": "Đảng Cộng sản Việt Nam.",
            "C": "Mặt trận dân tộc thống nhất.",
            "D": "Đoàn thanh niên Cộng sản."
        },
        "answer": "C",
        "explanation": "Mặt trận quy tụ các tổ chức và cá nhân yêu nước, biến yêu cầu đoàn kết thành lực lượng chính trị-xã hội có tổ chức và hành động chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 102."
    },
    {
        "question": "Theo quan điểm của Đảng Cộng sản Việt Nam tại Đại hội đại biểu toàn quốc lần thứ XI, Tư tưởng Hồ Chí Minh là kết quả của sự vận dụng kế thừa giá trị nào?",
        "options": {
            "A": "Sự phát triển chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta",
            "B": "Sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta",
            "C": "Sự vận dụng sáng tạo và phát triển chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta",
            "D": "Sự vận dụng sáng tạo chủ nghĩa Mác - Lênin trong điều kiện cụ thể của nước ta"
        },
        "answer": "B",
        "explanation": "Định nghĩa Đại hội XI xác định tư tưởng Hồ Chí Minh là kết quả vận dụng, phát triển sáng tạo chủ nghĩa Mác-Lênin vào hoàn cảnh cụ thể Việt Nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 5."
    },
    {
        "question": "Phương thức tiếp cận về chủ nghĩa xã hội của Hồ Chí Minh thiên về hướng nào dưới đây? (NHUNG HOÀNG)",
        "options": {
            "A": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện kinh tế là chủ yếu",
            "B": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện văn hóa là chủ yếu",
            "C": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ nhiều góc độ khác nhau",
            "D": "Hồ Chí Minh tiếp cận Chủ nghĩa xã hội từ phương diện chính trị là chủ yếu"
        },
        "answer": "C",
        "explanation": "Người không đưa một định nghĩa cố định mà giải thích chủ nghĩa xã hội qua chính trị, kinh tế, văn hóa và đời sống; các góc nhìn đều hướng tới ấm no, hạnh phúc của dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53."
    },
    {
        "question": "Hồ Chí Minh có lần chỉ rõ: \"Nói chung thì các dân tộc phương Đông đều giàu tình cảm và đối với họ một (.....) còn có giá trị hơn một trăm bài diễn văn tuyên truyền\"",
        "options": {
            "A": "Quyển sách",
            "B": "Tấm gương sống",
            "C": "Tác phẩm lý luận",
            "D": "Câu chuyện ngụ ngôn"
        },
        "answer": "B",
        "explanation": "Gương sống tác động trực tiếp tới tình cảm và niềm tin; vì vậy nêu gương bằng việc làm có sức giáo dục lớn hơn chỉ nói hoặc tuyên truyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 133."
    },
    {
        "question": "Theo Hồ Chí Minh, đạo đức là nhân tố tạo nên:",
        "options": {
            "A": "sức mạnh, sức hấp dẫn của chủ nghĩa xã hội.",
            "B": "sức mạnh, sức hấp dẫn của chủ nghĩa Mác- Lênin.",
            "C": "sức mạnh, sức hấp dẫn của tư tưởng Hồ Chí Minh.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Sự cao đẹp trong đạo đức và hành động của người cộng sản tạo niềm tin và sức hấp dẫn của xã hội mới, không chỉ dựa mức sống vật chất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 126-127.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, tại sao phải đoàn kết quốc tế? (Chọn 2)",
        "options": {
            "A": "Nhằm kết hợp sức mạnh dân tộc và sức mạnh thời đại, tạo sức mạnh tổng hợp cho cách mạng",
            "B": "Góp phần cùng nhân dân thế giới thực hiện các mục tiêu cách mạng",
            "C": "Vì đây là mục tiêu, nhiệm vụ hàng đầu của cách mạng Việt Nam",
            "D": "Nhằm kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc"
        },
        "answer": "AB",
        "explanation": "A nói về tạo sức mạnh tổng hợp cho Việt Nam; B nói về đóng góp vào mục tiêu chung của nhân loại. Giáo trình nêu cả hai lý do nên đây là câu chọn hai đáp án.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 106-108."
    },
    {
        "question": "So với các nền dân chủ trước đây, dân chủ XHCN có điểm gì khác biệt cơ bản?",
        "options": {
            "A": "Là nền dân chủ phi lịch sử",
            "B": "Là nền dân chủ dân túy",
            "C": "Không còn mang tính giai cấp",
            "D": "Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động"
        },
        "answer": "D",
        "explanation": "Dân chủ xã hội chủ nghĩa đề cao quyền làm chủ của nhân dân lao động, đồng thời mang bản chất giai cấp công nhân; vì thế không phải dân chủ phi giai cấp hay phi lịch sử.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 55,82-85."
    },
    {
        "question": "Theo Hồ Chí Minh, nhà nước do dân thể hiện ở chỗ",
        "options": {
            "A": "Do nhân dân lập nên",
            "B": "Do nhân dân làm chủ",
            "C": "Do nhân dân ủng hộ",
            "D": "Tất cả các phương án"
        },
        "answer": "D",
        "explanation": "Dân lập nên nhà nước, thực hiện quyền và nghĩa vụ làm chủ, tham gia xây dựng và bảo vệ bộ máy; các nội dung A, B, C bổ sung nhau nên chọn tất cả.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 85-86."
    },
    {
        "question": "Hồ Chí Minh lưu ý xây dựng nhà nước có hiệu lực pháp lý mạnh mẽ phải(NHUNG HOÀNG)",
        "options": {
            "A": "Xây dựng đội ngũ cán bộ, công chức đủ đức, tài",
            "B": "Xây dựng đội ngũ cán bộ, công chức đủ phẩm chất.",
            "C": "Xây dựng đội ngũ cán bộ, công chức đủ tài đức.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Hiệu lực pháp luật cần người thi hành có năng lực, đạo đức, công tâm và gương mẫu; văn bản pháp luật đúng chưa đủ nếu cán bộ thực thi yếu kém.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86,88-89,95.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Một trong những nội dung về xây dựng nhà nước có hiệu lực pháp lý mạnh mẽ theo tư tưởng Hồ Chí Minh là)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh xem đạo đức cách mạng là gì?",
        "options": {
            "A": "Đạo đức cách mạng là hòa mình với quần chúng thành một khối, tin quần chúng, hiểu quần chúng, lắng nghe ý kiến của quần chúng",
            "B": "Đạo đức cách mạng là tin quần chúng, hiểu quần chúng, lắng nghe ý kiến của quần chúng",
            "C": "Đạo đức cách mạng là hòa mình cộng đồng, lắng nghe ý kiến của cộng đồng",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đạo đức cách mạng thể hiện ở phục vụ và gắn bó với dân, học hỏi và tôn trọng dân; không chỉ là phẩm chất cá nhân tách khỏi quan hệ với quần chúng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78,128.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Khi nói về Hồ Chí Minh, báo Uruguay viết:",
        "options": {
            "A": "Ông có một trái tim bao la như vũ trụ và tình yêu trẻ thơ vô bờ bến",
            "B": "Ông người có tình cảm bao la như vũ trụ và tình yêu trẻ thơ vô bờ bến",
            "C": "Ông có một trái tim như vũ trụ và tình yêu trẻ thơ vô bờ bến",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo trình giải thích tình thương con người và sức hấp dẫn nhân cách Hồ Chí Minh nhưng không dẫn lời báo Uruguay. Chưa thể xác nhận trực tiếp nguyên văn của A bằng tài liệu này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 127,130-131.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh đã đề ra Những nhiệm vụ cấp bách của Nhà nước Việt Nam Dân chủ Cộng hòa vào thời điểm nào?",
        "options": {
            "A": "Năm 1947",
            "B": "Năm 1946",
            "C": "Năm 1945",
            "D": "Năm 1944"
        },
        "answer": "C",
        "explanation": "Ngay sau tuyên bố độc lập năm 1945, Chính phủ phải giải quyết khó khăn cấp bách về đời sống, dân trí và nền tảng pháp lý; đó là bối cảnh của những nhiệm vụ nhà nước mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 44,87."
    },
    {
        "question": "Theo Hồ Chí Minh, mỗi cán bộ, đảng viên \"đều là công bộc của dân, nghĩa là để gánh việc chung cho dân, chứ không phải để:",
        "options": {
            "A": "Đè đầu dân.",
            "B": "Hạch sách dân",
            "C": "Làm khó cho dân",
            "D": ""
        },
        "answer": "A",
        "explanation": "Cán bộ nhận quyền do dân ủy thác để gánh việc chung; dùng quyền đè đầu dân là biến công bộc thành quan cách mạng, trái bản chất nhà nước của dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 84.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, Nhà nước Việt Nam được xây dựng phải là:",
        "options": {
            "A": "Nhà nước hợp pháp, hợp hiến",
            "B": "Nhà nước quốc gia dân tộc",
            "C": "Nhà nước tự lập, tự tôn",
            "D": "Nhà nước bảo hộ cho phép"
        },
        "answer": "A",
        "explanation": "Nhà nước cần hiến pháp dân chủ, tổng tuyển cử và bộ máy được lập theo luật; hợp hiến, hợp pháp tạo cơ sở pháp lý cho hoạt động đối nội và đối ngoại.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86-87."
    },
    {
        "question": "Hòa bình là phương pháp cách mạng(NHUNG HOÀNG)",
        "options": {
            "A": "Không hiệu quả",
            "B": "Rất nhân văn",
            "C": "Không cần thiết",
            "D": "Mang tính chất giáo điều"
        },
        "answer": "B",
        "explanation": "Hòa bình bảo vệ sự sống và hạn chế tổn thất, nhưng phải gắn độc lập, tự do và công lý; tính nhân văn không đồng nghĩa chấp nhận chiến tranh xâm lược.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 51-52,111-112."
    },
    {
        "question": "Thực hành đạo đức cách mạng trong xã hội hiện nay , theo Hồ Chí Minh là:",
        "options": {
            "A": "Làm đúng quyền hạn và bổn phận",
            "B": "Làm đúng theo trách nhiệm và quyền hạn",
            "C": "Luôn nghĩ về nhân dân , xuất phát từ dân mà làm , không phạm pháp luật",
            "D": "Luôn luôn làm theo tư tưởng Hồ Chí Minh"
        },
        "answer": "C",
        "explanation": "Đạo đức phải thể hiện bằng trách nhiệm, hành động vì dân và tôn trọng pháp luật; chỉ tuyên bố lý tưởng mà không thực hiện chưa phải thực hành đạo đức.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 128,146-147."
    },
    {
        "question": "Trong quá trình xây dựng khối đại đoàn kết toàn dân tộc phải đứng vững trên lập trường của giai cấp nào?",
        "options": {
            "A": "Giai cấp nông dân",
            "B": "Tầng lớp trí thức",
            "C": "Giai cấp công nhân",
            "D": "Tư sản dân tộc"
        },
        "answer": "C",
        "explanation": "Giáo trình yêu cầu đứng trên lập trường giai cấp công nhân và giải quyết hài hòa quan hệ giai cấp-dân tộc để tập hợp mọi người yêu nước.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100."
    },
    {
        "question": "Quan điểm nào sau đây thuộc vấn đề công tác cán bộ theo tư tưởng Hồ Chí Minh ?",
        "options": {
            "A": "Gần dân, học hỏi nhân dân, lắng nghe ý kiến ngoài đảng",
            "B": "Gần dân, học hỏi nhân dân, lắng nghe ý kiến của mọi tầng lớp",
            "C": "Gần dân, học hỏi nhân dân, lắng nghe ý kiến mọi người",
            "D": "Gần dân, học hỏi nhân dân, lắng nghe ý kiến nhân dân"
        },
        "answer": "D",
        "explanation": "Cán bộ là cầu nối giữa chính sách và đời sống; gần dân, học dân, lắng nghe dân giúp nắm thực tế và thực hiện nhiệm vụ đúng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-81."
    },
    {
        "question": "Trong Di chúc, khi nói về những người nạn nhân của chế độ xã hội cũ, như trộm cắp, gái điếm, cờ bạc, buôn lậu, v.v., Hồ Chí Minh đã căn dặn Nhà nước phải dùng biện pháp gì để cải tạo, giúp họ trở nên những người lao động lương thiện",
        "options": {
            "A": "Giáo dục, pháp luật",
            "B": "Nhắc nhở, trừng phạt",
            "C": "Răn đe, pháp luật",
            "D": "Giáo dục, đạo đức"
        },
        "answer": "A",
        "explanation": "Pháp quyền nhân nghĩa vừa nghiêm minh vừa giáo dục, cảm hóa con người; kết hợp pháp luật với giáo dục giúp người lầm lỗi tiến bộ. Giáo trình không chép đầy đủ danh sách đối tượng trong câu hỏi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 89-90,135."
    },
    {
        "question": "Tiền đề tư tưởng, lí luận dẫn đến sự hình thành tư tưởng Hồ Chí Minh là",
        "options": {
            "A": "Giá trị truyền thống Việt Nam",
            "B": "Giá trị truyền thống văn hóa Việt Nam",
            "C": "Giá trị tư tưởng Việt Nam",
            "D": ""
        },
        "answer": "B",
        "explanation": "Giá trị truyền thống tốt đẹp, nhất là yêu nước, là một cơ sở lý luận của tư tưởng Hồ Chí Minh; còn có tinh hoa nhân loại và chủ nghĩa Mác-Lênin, nên không hiểu B là cơ sở duy nhất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 22.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Truyền thống nào của dân tộc Việt Nam là nguồn gốc hình thành tư tưởng Hồ Chí Minh ?",
        "options": {
            "A": "Truyền thống yêu nước, lạc quan, yêu đời; có niềm tin vào chính nghĩa, tin vào sức mạnh của bản thân và dân tộc",
            "B": "Truyền thống lạc quan, yêu đời; có niềm tin vào chính nghĩa, tin vào sức mạnh của bản thân và dân tộc",
            "C": "Truyền thống nhân nghĩa, thủy chung, lạc quan, yêu đời, có niềm tin vào chính nghĩa, tin vào sức mạnh của bản thân và dân tộc",
            "D": "Truyền thống đoàn kết, lạc quan, yêu đời, có niềm tin vào chính nghĩa, tin vào sức mạnh của bản thân và dân tộc"
        },
        "answer": "A",
        "explanation": "Truyền thống yêu nước và niềm tin vào sức mạnh dân tộc nuôi dưỡng ý chí cứu nước, được Người kế thừa và phát triển trong điều kiện mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 22."
    },
    {
        "question": "Đâu là quan điểm của Hồ Chí Minh về chiến lược trồng người?",
        "options": {
            "A": "\"Trồng người\" là trung tâm của phát triển xã hội",
            "B": "\"Trồng người\" là trung tâm phát triển của nhân loại",
            "C": "\"Trồng người\" là trung tâm phát triển thế giới",
            "D": ""
        },
        "answer": "A",
        "explanation": "Xây dựng con người là trọng tâm của chiến lược phát triển đất nước, vừa cấp bách vừa lâu dài; con người có phẩm chất và năng lực là điều kiện tạo xã hội mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 138-139.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Một trong những yêu cầu cơ bản trong nghiên cứu tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Đảm bảo thống nhất nguyên tắc tính Đảng và tính khoa học",
            "B": "Đảm bảo thống nhất nguyên tắc tính Nhà nước và tính khoa học",
            "C": "Đảm bảo thống nhất nguyên tắc tính Đảng và tính Nhà nước",
            "D": "Đảm bảo thống nhất nguyên tắc tính triết học và tính khoa học"
        },
        "answer": "A",
        "explanation": "Nghiên cứu phải giữ lập trường, quan điểm của Đảng đồng thời khách quan và khoa học; tách hai mặt sẽ làm sai lệch nhận thức về tư tưởng Hồ Chí Minh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 10-11.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Một trong những yêu cầu cơ bản trong nghiên cứu tư tưởng Hồ Chí Minh là: A. Đảm bảo thống nhất giữ nguyên tắc tính đảng và tính khoa học B. Đảm bảo thống nhất tính thực chứng và duy lý C. Đảm bảo thống nhất giữa khoa học và thực tiễn D. Đảm bảo tỉnh thực chứng và khoa học)"
    },
    {
        "question": "Theo Hồ Chí Minh, chủ nghĩa nào có \"những điều thích hợp với điều kiện của nước ta\"?",
        "options": {
            "A": "Chủ nghĩa Găngđi",
            "B": "Chủ nghĩa Mác",
            "C": "Chủ nghĩa Tôn Dật Tiên",
            "D": "Chủ nghĩa Lênin"
        },
        "answer": "C",
        "explanation": "Người tiếp thu có chọn lọc các quan điểm dân tộc, dân quyền, dân sinh của Tôn Trung Sơn và phát triển thành mục tiêu độc lập, tự do, hạnh phúc của Việt Nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24."
    },
    {
        "question": "Hồ Chí Minh nhấn mạnh xây dựng nhà nước trong sạch vững mạnh cần phải",
        "options": {
            "A": "Kết hợp giáo dục pháp luật và đạo đức, hình thành pháp quyền nhân nghĩa",
            "B": "Kết hợp giáo dục pháp luật và nghề nghiệp, hình thành pháp quyền nhân nghĩa",
            "C": "Kết hợp giáo dục pháp luật và nhân cách, hình thành pháp quyền nhân nghĩa",
            "D": ""
        },
        "answer": "A",
        "explanation": "Pháp luật nhân nghĩa bảo vệ quyền con người, nghiêm minh nhưng giáo dục và khuyến thiện; đạo đức cung cấp nền tảng giá trị cho xây dựng, thi hành pháp luật.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 89-90,93.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Chọn câu trả lời đúng và đầy đủ nhất theo tư tưởng Hồ Chí Minh :",
        "options": {
            "A": "Đảng Cộng sản Việt Nam vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận",
            "B": "Đảng Cộng sản Việt Nam là một thành viên của Mặt trận dân tộc thống nhất",
            "C": "Đảng Cộng sản Việt Nam không là thành viên của Mặt trận dân tộc thống nhất",
            "D": "Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Mặt trận"
        },
        "answer": "A",
        "explanation": "Đảng tham gia Mặt trận và đồng thời định hướng đường lối, phương pháp; vai trò lãnh đạo phải phù hợp mục tiêu chung và không thay thế hiệp thương dân chủ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103."
    },
    {
        "question": "Khi nói về điều kiện hình thành tư tưởng Hồ Chí Minh, điều kiện nào bị viết sai?",
        "options": {
            "A": "Ngay từ khi còn nhỏ ở trong trưởng. Hồ Chí Minh đã nhận thức được đặc điểm thời đại",
            "B": "Quê hương Hồ Chí Minh là mảnh đất giàu truyền thống yêu nước, chống giặc ngoại xâm",
            "C": "Nhu cầu khách quan và bức thiết do cách mạng Việt Nam đặt ra là muốn cứu nước, phải tìm một con đường cách mạng mới",
            "D": "Hồ Chí Minh sinh ra trong một gia đình nhà Nho yêu nước. gần gũi nhân dân, cụ thân sinh có tư tưởng thương dân, chủ trương lấy dân làm hậu thuẫn cho mọi cải cách chính trị"
        },
        "answer": "A",
        "explanation": "Thời thơ ấu hình thành lòng yêu nước; nhận thức đặc điểm thời đại và con đường vô sản được phát triển qua trải nghiệm quốc tế, học tập và hoạt động chính trị sau này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 28-30."
    },
    {
        "question": "Trong các quan điểm dưới đây, đâu là quan điểm của Hồ Chí Minh?(NHUNG HOÀNG)",
        "options": {
            "A": "Văn hóa ngang hàng với các lĩnh vực khác, có mỗi quan hệ với các lĩnh vực khác",
            "B": "Văn hóá không như lĩnh vực khác, có mỗi quan hệ với các lĩnh vực khác",
            "C": "Văn hoa là mọi lĩnh vực có môi quan hệ ngang hàng",
            "D": "Văn hóa ngang hàng với các lĩnh vực khác, không có mỗi quan hệ với các lĩnh vực khác"
        },
        "answer": "A",
        "explanation": "Kinh tế, chính trị, văn hóa, xã hội quan trọng ngang nhau và tác động qua lại; văn hóa phải tham gia các lĩnh vực khác, không đứng ngoài đời sống.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 119,122."
    },
    {
        "question": "Hồ Chí Minh cho rằng đoàn kết là",
        "options": {
            "A": "Sức mạnh",
            "B": "Sáng tạo",
            "C": "Khôn ngoan",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đoàn kết tập hợp lực lượng, tạo khả năng vượt khó và giành thắng lợi; giáo trình khái quát trực tiếp đoàn kết là sức mạnh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98-99.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, nhà nước vì dân là",
        "options": {
            "A": "Nhà nước phải phụng sự nhân dân",
            "B": "Nhà nước phải phụng sự Đảng Cộng sản",
            "C": "Nhà nước phải phụng sự giai cấp cầm quyền",
            "D": ""
        },
        "answer": "A",
        "explanation": "Nhà nước vì dân đặt lợi ích và nguyện vọng dân lên trên, mưu tự do và hạnh phúc cho dân; phụng sự nhân dân là mục đích hoạt động.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Giai đoạn nào sau đây tư tưởng Hồ Chí Minh tiếp tục phát triển, hoàn thiện?",
        "options": {
            "A": "1945 đến 1960",
            "B": "1930 đến 1969",
            "C": "1945 đến 1969",
            "D": "1930 đến 1945"
        },
        "answer": "C",
        "explanation": "CẦN KIỂM TRA MỐC: Giáo trình 2021 xác định thời kỳ tiếp tục phát triển, hoàn thiện từ đầu 1941 đến tháng 9/1969. C chỉ bao gồm phần 1945-1969; đề thiếu lựa chọn đúng theo cách chia của giáo trình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 34-35.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Giai đoạn nào sau đây Hồ Chí Minh bổ sung và hoàn thiện tư tưởng của mình? A. 1911 đến 1920 B. 1930 đến 1969 C. 1941 đến 1969 D. 1921 đến 1930)"
    },
    {
        "question": "Giai đoạn nào sau đây hình thành tư tưởng yêu nước và ý chí cứu nước của Hồ Chí Minh?",
        "options": {
            "A": "1911 đến 1920",
            "B": "1921 đến 1930",
            "C": "1930 đến 1945",
            "D": "1890 đến 1911"
        },
        "answer": "D",
        "explanation": "Trước ngày 5/6/1911, ảnh hưởng gia đình, quê hương và thực tiễn hình thành lòng yêu nước, ý chí tìm đường cứu nước; D là cách ghi khái quát thời kỳ này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 28-29."
    },
    {
        "question": "Giai đoạn nào sau đây Hồ Chí Minh vượt qua thử thách, kiên trì giữ vững lập trường cách mạng?",
        "options": {
            "A": "1911 đến 1920",
            "B": "1921 đến 1930",
            "C": "1930 đến 1945",
            "D": "1890 đến 1911"
        },
        "answer": "C",
        "explanation": "CẦN KIỂM TRA MỐC: Giáo trình chia thời kỳ vượt thử thách từ đầu 1930 đến đầu 1941, không phải tới 1945. C gần về ý nhưng không đúng giới hạn thời kỳ trong PDF.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 31-34."
    },
    {
        "question": "Hồ Chính Minh cho rằng cứ viết lên trán hai chữ cộng sản là",
        "options": {
            "A": "Dân yêu dân mến",
            "B": "Dân khâm phục",
            "C": "Dân tin",
            "D": ""
        },
        "answer": "A",
        "explanation": "CẦN SỬA CÂU HỎI: Giáo trình nói không phải cứ viết chữ cộng sản lên trán là được dân yêu mến; dân quý người có tư cách, đạo đức. Câu hiện tại thiếu phủ định nên đáp án A gây hiểu ngược.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 124,133.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hãy chọn phương án trả lời đúng nhất. Theo Hồ Chí Minh, để tập hợp được mọi lực lượng vào khối đại đoàn kết toàn dân, cần phải:",
        "options": {
            "A": "Có chính sách đúng đắn",
            "B": "Có phương pháp phù hợp với từng đối tượng",
            "C": "Vừa có chính sách đúng đắn, vừa có phương pháp phù hợp với từng đối tượng",
            "D": "Chăm lo đời sống vật chất và tinh thần cho nhân dân"
        },
        "answer": "C",
        "explanation": "Các lực lượng có đặc điểm và lợi ích khác nhau; đường lối đúng phải đi cùng vận động, phương pháp tập hợp phù hợp để tạo đoàn kết thực chất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98,101-104."
    },
    {
        "question": "Mối quan hệ giữa vấn đề dân tộc và vấn đề giai cấp trong tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Dân tộc với giai cấp có quan hệ chặt chẽ với nhau.",
            "B": "Độc lập dân tộc gắn liền chủ nghĩa xã hội.",
            "C": "Giải phóng dân tộc là tiền đề để giải phóng giai cấp.",
            "D": "Tất cả các phương án"
        },
        "answer": "D",
        "explanation": "Giải phóng dân tộc mở đường cho giải phóng giai cấp, xã hội và con người; độc lập gắn chủ nghĩa xã hội, nên các nội dung A, B, C đều có cơ sở.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 65-67,137-138."
    },
    {
        "question": "Điền vào chỗ trống. \"Đại đoàn kết dân tộc là....của cách mạng\".",
        "options": {
            "A": "Mục tiêu, nhiệm vụ",
            "B": "Chìa khóa, con đường",
            "C": "Chìa khóa",
            "D": "Biện pháp, phương hướng"
        },
        "answer": "A",
        "explanation": "Đại đoàn kết vừa là sức mạnh vừa là mục tiêu, nhiệm vụ cần thực hiện lâu dài; không thể chỉ xem đó là phương tiện tạm thời.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Chọn phương án chính xác nhất điền vào chỗ trống. Đại đoàn kết dân tộc là một ...... hàng đầu của cách mạng Việt Nam\" A. Mục tiêu, nhiệm vụ B. Chia khóa, con đường C. Chìa khóa D. Biện pháp, phương hướng)"
    },
    {
        "question": "Theo Hồ Chí Minh, về bước đi trong thời kỳ quá độ, chúng ta phải:",
        "options": {
            "A": "Trải qua nhiều bước",
            "B": "Làm thật mau và rầm rộ",
            "C": "Làm nhanh và rầm rộ qua nhiều bước",
            "D": ""
        },
        "answer": "A",
        "explanation": "Cải biến một nước nông nghiệp lạc hậu thành xã hội mới đòi hỏi nhiều bước, cải tạo đi cùng xây dựng; không thể hoàn tất trong một bước nóng vội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-63.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, nhân dân là",
        "options": {
            "A": "Chủ thể của quyền lực",
            "B": "Khách thể của quyền lực",
            "C": "Nguồn gốc của quyền lực",
            "D": "Sức mạnh của quyền lựcb"
        },
        "answer": "A",
        "explanation": "Mọi quyền lực có nguồn gốc từ nhân dân; bộ máy và cán bộ thực thi quyền do dân ủy thác, chịu dân kiểm soát và bãi miễn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83-85.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo Hồ Chí Minh, vai trò của nhân dân là gì?)"
    },
    {
        "question": "Theo Hồ Chí Minh, trong những ngành kinh tế chủ yếu: công - nông - thương nghiệp, những ngành nào được coi là \"hai cái chân của nền kinh tế nước nhà\" ?",
        "options": {
            "A": "Nông nghiệp và thương nghiệp",
            "B": "Nông nghiệp và công nghiệp nhẹ",
            "C": "Công nghiệp nặng và nông nghiệp",
            "D": "Công nghiệp và nông nghiệp"
        },
        "answer": "D",
        "explanation": "Công nghiệp và nông nghiệp hiện đại cùng tạo nền tảng sản xuất và đời sống. Giáo trình xác nhận vai trò hai ngành nhưng không dẫn nguyên văn hình ảnh hai cái chân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 58,63."
    },
    {
        "question": "Lực lượng nào vừa là thành viên của Mặt trận dân tộc thống nhất vừa là lực lượng lãnh đạo Mặt trận?",
        "options": {
            "A": "Các tổ chức chính trị xã hội",
            "B": "Đảng cộng sản Việt Nam",
            "C": "Nhà nước cộng hòa xã hội chủ nghĩa Việt Nam",
            "D": "Quần chúng nhân dân"
        },
        "answer": "B",
        "explanation": "Giáo trình ghi rõ Đảng vừa là thành viên vừa là lực lượng lãnh đạo Mặt trận; không đồng nhất vai trò này với bất kỳ thành viên nào khác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103."
    },
    {
        "question": "Hồ Chí Minh cho rằng:",
        "options": {
            "A": "Chủ nghĩa dân tộc là động lực lớn của đất nước.",
            "B": "Chủ nghĩa dân tộc là khát khao lớn của đất nước.",
            "C": "Chủ nghĩa dân tộc là mục tiêu lớn của đất nước.",
            "D": "Chủ nghĩa dân tộc là chiến lược hàng đầu của cách mạng."
        },
        "answer": "A",
        "explanation": "Lòng yêu nước, ý chí độc lập và tự lực dân tộc là động lực huy động nhân dân; cần hiểu chủ nghĩa dân tộc ở đây là yêu nước chân chính, không phải dân tộc hẹp hòi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 22,106."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, Đảng Cộng Sản Việt Nam là Đảng cầm quyền, vì vậy, mỗi cán bộ đảng viên cần phải:",
        "options": {
            "A": "Hết lòng phục vụ giai cấp công nhân",
            "B": "Ra sức học tập, trau dồi chuyên môn, trình độ",
            "C": "Thực hiện thấm nhuần đạo đức cách mạng, cần, kiệm, liêm, chính, chí công vô tư",
            "D": "Xây dựng khối đại đoàn kết dân tộc"
        },
        "answer": "C",
        "explanation": "Đảng cầm quyền phải giữ trong sạch và phục vụ dân; đạo đức, cần kiệm liêm chính, chí công vô tư giúp chống suy thoái và lạm quyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 73,81,125.\nGhi chú trong tài liệu: (Kiểu hỏi khác; Trong Di chúc, Người viết: \"Đảng ta là một Đàng cầm quyền. Mỗi đàng viên và cán bộ phải thật sự thấm nhuần.., thật sự cần kiệm liêm chính, chí công vô tư. Hãy điền từ còn thiếu vào dầu ...? A. Tư tường cách mạng B. Cách thức cách mạng C. Đạo đức cách mạng D. Phương pháp cách mạng)"
    },
    {
        "question": "Điền vào chỗ trống để hoàn thiện câu nói sau của Hồ Chí Minh: \"Đối với nông dân, nông dân thật sự nắm (.........), nông dân phải được giải phóng.",
        "options": {
            "A": "Ruộng đất",
            "B": "Xí nghiệp, hầm mỏ",
            "C": "Chính quyền",
            "D": "Đảng"
        },
        "answer": "C",
        "explanation": "Đáp án C thể hiện quyền làm chủ về chính trị của người lao động. Tuy nhiên chưa tìm thấy nguyên văn câu về nông dân trong PDF, nên chưa đủ căn cứ xác nhận riêng từ điền; cần phân biệt với quyền ruộng đất về kinh tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 55,83-85."
    },
    {
        "question": "Điền vào chỗ trống để hoàn thiện câu nói sau của Hồ Chí Minh: \"Nước Việt Nam là một nước dân chủ cộng hoà, tất cả quyền bính trong nước là của toàn thể nhân dân Việt Nam, không phân biệt nòi giống, gái trai, giàu nghèo, giai cấp, tôn giáo; những việc quan hệ đến vận mệnh quốc gia sẽ đưa ra toàn (............) phúc quyết\"",
        "options": {
            "A": "Quốc",
            "B": "Đảng",
            "C": "Dân",
            "D": "Quốc hội"
        },
        "answer": "C",
        "explanation": "Phúc quyết là biểu hiện dân chủ trực tiếp: nhân dân quyết định vấn đề liên quan vận mệnh quốc gia, vì dân là chủ thể tối cao của quyền lực.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83-85."
    },
    {
        "question": "Theo Hồ Chí Minh, để lãnh đạo Mặt trận, Đảng phải đi đúng đường lối quần chúng, không được: (NHUNG HOÀNG)",
        "options": {
            "A": "Vận động, giáo dục, thuyết phục, nêu gương, lấy lòng chân thành để đối xử, cảm hóa, khơi gợi tinh thần tự giác, tự nguyện.",
            "B": "Quan liêu, mệnh lệnh và gò ép.",
            "C": "Lấy quyền uy để thuyết phục mọi người đi theo.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Mặt trận rộng rãi phải được vận động, thuyết phục và hiệp thương; quan liêu, mệnh lệnh, gò ép làm mất tính tự nguyện và đoàn kết.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103-105.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nguyễn Tất Thành ra đi tìm đường cứu nước tại bến cảng Nhà Rồng - Sài Gòn vào thời gian nào?",
        "options": {
            "A": "5/6/1911",
            "B": "6/5/1911",
            "C": "5/6/1910",
            "D": "6/5/1912"
        },
        "answer": "A",
        "explanation": "Ngày 5/6/1911 đánh dấu Người ra nước ngoài tìm con đường cứu nước, mở đầu thời kỳ khảo nghiệm thực tiễn thế giới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29."
    },
    {
        "question": "Tháng 7 năm 1920, Hồ Chí Minh đọc ... của V.I.Lênin?",
        "options": {
            "A": "Tác phẩm Làm gì.",
            "B": "Sơ thảo lần thứ nhất Luận cương về các vấn đề dân tộc.",
            "C": "Sơ thảo lần thứ nhất những Luận cương về các vấn đề dân tộc và vấn đề thuộc địa",
            "D": "Tác phẩm Tuyên ngôn của Đảng Cộng sản"
        },
        "answer": "C",
        "explanation": "Luận cương của Lênin về dân tộc và thuộc địa giúp Người thấy con đường giải phóng theo cách mạng vô sản; đây là văn kiện gắn mốc tháng 7/1920.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29-30."
    },
    {
        "question": "Mục đích chính để Hồ Chí Minh muốn ra nước ngoài là gì?",
        "options": {
            "A": "Xem nước Pháp và các nước khác làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta.",
            "B": "Xem nước Pháp và các nước khác học như thế nào, tôi sẽ trở về giúp đồng bào chúng ta.",
            "C": "Xem nước Pháp và các nước khác văn minh như thế nào, tôi sẽ trở về giúp đồng bào chúng ta.",
            "D": "Xem nước Pháp và các nước khác tiến bộ như thế"
        },
        "answer": "A",
        "explanation": "Người muốn tìm hiểu sức mạnh và cách làm của các nước để trở về giúp dân; mục đích ra đi là cứu nước, không phải tìm cuộc sống riêng ở nước ngoài.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29."
    },
    {
        "question": "Một trong những nội dung cơ bản của bản Yêu sách gồm tám điểm của Nguyễn Ái Quốc gửi đến Hội nghị Vecxay (Pháp) là:",
        "options": {
            "A": "Đòi quyền tự do dân chủ tối thiểu cho nhân dân.",
            "B": "Đòi quyền tự trị của dân tộc.",
            "C": "Đòi quyền độc lập dân tộc.",
            "D": "Đòi quyền bình đẳng."
        },
        "answer": "A",
        "explanation": "Yêu sách yêu cầu quyền pháp lý bình đẳng và các quyền tự do dân chủ, là bước đấu tranh quan trọng nhưng chưa đòi độc lập hoàn toàn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29,42-43."
    },
    {
        "question": "Đâu là câu nói nổi tiếng của Hồ Chí Minh (NHUNG HOÀNG)",
        "options": {
            "A": "Không có gì quý hơn độc lập tự do",
            "B": "Hạnh phúc là đấu tranh",
            "C": "Cách mạng là bạo lực",
            "D": ""
        },
        "answer": "A",
        "explanation": "Độc lập, tự do là quyền thiêng liêng, mục tiêu trước hết và điều kiện để dân tộc tự quyết định cuộc sống; câu nói biểu đạt giá trị đó.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 43,64.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh",
        "options": {
            "A": "Giữ vững độc lập của dân tộc mình đồng thời tôn trọng độc lập của các dân tộc khác",
            "B": "Giữ vững độc lập của dân tộc mình đồng thời kính trọng độc lập của các dân tộc khác",
            "C": "Giữ vững độc lập của dân tộc mình đồng thời tôn trọng tự do của các dân tộc khác",
            "D": "Giữ vững độc lập của dân tộc mình đồng thời giữ vững độc lập của các dân tộc khác"
        },
        "answer": "A",
        "explanation": "Giữ độc lập của mình phải đi cùng tôn trọng chủ quyền, toàn vẹn lãnh thổ và quyền tự quyết của các dân tộc khác, trên cơ sở bình đẳng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 111."
    },
    {
        "question": "Giải phóng dân tộc theo tư tưởng Hồ Chí Minh, xét về thực chất là:",
        "options": {
            "A": "Đánh đổ ách áp bức, thống trị của đế quốc, thực dân giành độc lập dân tộc.",
            "B": "Giành độc lập dân tộc, hình thành nhà nước dân tộc độc lập.",
            "C": "Tự do lựa chọn con đường phát triển của dân tộc phù hợp với xu thế phát triển của thời đại.",
            "D": "Giành được ruộng đất cho dân nghèo, đảm bảo đời sống nông dân ấm no"
        },
        "answer": "A",
        "explanation": "Giải phóng dân tộc trực tiếp xóa ách thống trị đế quốc, giành quyền độc lập; các giải phóng xã hội và con người tiếp nối trên cơ sở ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-47,137.\nGhi chú trong tài liệu: (Chọn đáp án chọn tất cả nếu có) (Nếu hỏi: Đâu không phải là một ý nghĩa của giải phóng dân tộc theo Hồ Chí Minh? => D)"
    },
    {
        "question": "Bạo lực cách mạng theo tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Đấu tranh chính trị.",
            "B": "Đấu tranh vũ trang.",
            "C": "Kết hợp đấu tranh chính trị với đấu tranh vũ trang.",
            "D": "Đấu tranh ngoại giao."
        },
        "answer": "C",
        "explanation": "Bạo lực cách mạng là sức mạnh của quần chúng, kết hợp đấu tranh chính trị với đấu tranh vũ trang; hình thức sử dụng tùy tình hình cụ thể.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 51-52."
    },
    {
        "question": "Hồ Chí Minh về nước lần đầu tiên vào năm nào?",
        "options": {
            "A": "Cuối năm 1941",
            "B": "Cuối năm 1942",
            "C": "Cuối năm 1944",
            "D": "Cuối năm 1911"
        },
        "answer": "A",
        "explanation": "CẦN KIỂM TRA ĐÁP ÁN: Giáo trình ghi Người về nước cuối tháng 1/1941. A đúng về năm nhưng sai chữ cuối năm; các lựa chọn hiện không có đáp án hoàn toàn chính xác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 33."
    },
    {
        "question": "Hồ Chí Minh ví trẻ em như",
        "options": {
            "A": "Hoa trên cành",
            "B": "Búp trên cành",
            "C": "Lá non trên cành",
            "D": ""
        },
        "answer": "B",
        "explanation": "Giáo trình nhấn mạnh chăm lo thế hệ kế tiếp và giáo dục từ sớm nhưng không dẫn trực tiếp hình ảnh trẻ em như búp trên cành. B giữ theo nguồn câu hỏi, chưa xác nhận nguyên văn bằng PDF.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 125,139.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Ai là người đầu tiên được Hồ Chí Minh phong hàm đại tướng?",
        "options": {
            "A": "Võ Nguyên Giáp",
            "B": "Nguyễn Sơn",
            "C": "Nguyễn Chí Thanh",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo trình nói về xây dựng quân đội và kháng chiến nhưng không nêu người đầu tiên được phong đại tướng. Đáp án Võ Nguyên Giáp hiện chưa được kiểm chứng trực tiếp từ PDF này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 34-35.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong xây dựng chủ nghĩa xã hội, Hồ Chí Minh chủ trương đối xử với giai cấp tư sản dân tộc như thế nào?",
        "options": {
            "A": "Xóa bỏ quyền sở hữu về tư liệu sản xuất của họ",
            "B": "Không xóa bỏ quyền sở hữu tư liệu sản xuất của họ",
            "C": "Đánh đổ họ với tư cách là giai cấp bóc lột",
            "D": "Phát triển giai cấp này cả về số lượng và chất lượng"
        },
        "answer": "B",
        "explanation": "CẦN LƯU Ý PHẠM VI: Thời kỳ quá độ không đồng nhất với xã hội xã hội chủ nghĩa hoàn chỉnh. Giáo trình yêu cầu cải tạo quan hệ cũ và xây chế độ sở hữu tiến bộ, không khẳng định tuyệt đối giữ nguyên quyền sở hữu tư sản; B cần kiểm tra theo bối cảnh cụ thể.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 56,62-64."
    },
    {
        "question": "Quan điểm nào dưới đây thuộc về bản chất của CNXH trong tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Có đạo đức, con người phát triển cao",
            "B": "Có văn hóa, con người phát triển cao",
            "C": "Có văn hóa, đạo đức phát triển cao",
            "D": ""
        },
        "answer": "C",
        "explanation": "Xã hội mới không chỉ phát triển kinh tế mà còn nâng cao văn hóa, đạo đức, bảo đảm công bằng và tôn trọng con người; đây là một đặc trưng cơ bản.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 56.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Quan điểm nào dưới đây thuộc về bản chất của CNXH trong tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Chế độ chính trị do nhân dân làm chủ.",
            "B": "Chế độ chính trị do nhân dân sáng tạo.",
            "C": "Chế độ chính trị do nhà nước làm chủ.",
            "D": "Chế độ chính trị do Đảng làm chủ."
        },
        "answer": "A",
        "explanation": "Đặc trưng chính trị của chủ nghĩa xã hội là nhân dân làm chủ, mọi quyền lực thuộc dân, dưới sự lãnh đạo của Đảng và nền tảng liên minh công-nông.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 55."
    },
    {
        "question": "Theo Hồ Chí Minh, động lực của CNXH gồm:",
        "options": {
            "A": "Động lực tinh thần và bên ngoài.",
            "B": "Động lực vật chất và bên trong.",
            "C": "Động lực vật chất và tinh thần, nội sinh và ngoại sinh.",
            "D": "Động lực tinh thần và nội sinh."
        },
        "answer": "C",
        "explanation": "Động lực gồm yếu tố vật chất, tinh thần, nội lực, ngoại lực và nhiều lĩnh vực; chúng liên hệ nhau, trong đó nội lực dân tộc và nhân dân quyết định.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 59-61."
    },
    {
        "question": "Theo Hồ Chí Minh, một Đảng chân chính cách mạng phải có (...). (...) tạo nên uy tín, sức mạnh của Đảng, giúp Đảng đủ tư cách lãnh đạo, hướng dẫn quần chúng nhân dân.",
        "options": {
            "A": "Đạo đức",
            "B": "Lý luận",
            "C": "Năng lực",
            "D": "Tài năng"
        },
        "answer": "A",
        "explanation": "Đạo đức giúp Đảng trung thành lợi ích dân tộc và cán bộ được dân tin; vì thế là nền tảng uy tín, sức mạnh và tư cách lãnh đạo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 73-75."
    },
    {
        "question": "Theo Hồ Chí Minh, việc vận dụng chủ nghĩa Mác - Lênin phải:",
        "options": {
            "A": "Luôn phù hợp với từng đối tượng.",
            "B": "Luôn luôn phù hợp với từng hoàn cảnh.",
            "C": "Tất cả các phương án.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Trung thành Mác-Lênin đòi hỏi hiểu lập trường và phương pháp, vận dụng sáng tạo theo điều kiện từng lúc, từng nơi; không áp đặt công thức bất biến.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 64,75.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "\"Đường cách mệnh\" là tác phẩm chính trị được Hồ Chí Minh viết tại nước nào sau đây:",
        "options": {
            "A": "Pháp",
            "B": "Trung Quốc",
            "C": "Anh",
            "D": "Liên Xô"
        },
        "answer": "B",
        "explanation": "Giáo trình xác định Đường cách mệnh xuất bản năm 1927 tại Quảng Châu, Trung Quốc, trong giai đoạn chuẩn bị chính trị, tư tưởng và tổ chức cho Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 31."
    },
    {
        "question": "Đối với Hồ Chí Minh, Đảng là \"Đầy tớ trung thành\" là để nhắc nhở và chỉ rõ vai trò, trách nhiệm của mỗi cán bộ, đảng viên trong mọi hoạt động của mình đều phải:",
        "options": {
            "A": "Quan tâm thực sự đến sức khỏe của nhân dân.",
            "B": "Quan tâm thực sự đến lợi ích của nhân dân.",
            "C": "Quan tâm thực sự đến tinh thần của nhân dân.",
            "D": "Quan tâm thực sự đến vật chất của nhân dân."
        },
        "answer": "B",
        "explanation": "Đầy tớ trung thành nghĩa là tận tâm phục vụ lợi ích nhân dân; Đảng và cán bộ không có đặc quyền hay lợi ích riêng ngoài lợi ích dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78,86."
    },
    {
        "question": "Theo Hồ Chí Minh, đường lối chính trị là: (NHUNG HOÀNG)",
        "options": {
            "A": "Một vấn đề cốt tử trong tồn tại và phát triển của Đảng.",
            "B": "Một vấn đề không quan trọng trong tồn tại và phát triển của Đảng.",
            "C": "Một vấn đề thứ yếu trong tồn tại và phát triển của Đảng.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đường lối đúng định hướng và tổ chức cách mạng, bảo đảm Đảng thực hiện mục tiêu; sai đường lối ảnh hưởng trực tiếp vai trò và sự tồn tại của Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 71-75.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, \"Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta (....) với họ\".",
        "options": {
            "A": "Hợp tác",
            "B": "Đoàn kết",
            "C": "Bắt tay",
            "D": "Chia sẻ"
        },
        "answer": "B",
        "explanation": "Tiêu chí tập hợp là lòng phụng sự Tổ quốc, phục vụ dân; người có tài, đức, sức và thiện chí đều có thể tham gia, không chỉ một giai cấp hay tổ chức.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100."
    },
    {
        "question": "Đâu là nguyên tắc đoàn kết quốc tế trong tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích, có lý, có tình.",
            "B": "Đoàn kết trên cơ sở thống nhất mục tiêu độc lập của dân tộc mình và mục tiêu của nhân loại",
            "C": "Đoàn kết trên cơ sở thống nhất mục tiêu và mục đích, có lý, có tình.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đoàn kết phải có mục tiêu, lợi ích chung, dựa nguyên lý đúng và tình nghĩa; đó là nền tảng để hợp tác bền vững, không chỉ thỏa thuận nhất thời.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 110-112.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Nội dung lớn trong xây dựng nguyên tắc đoàn kết quốc tế của Hồ Chí Minh là gì? A. Đoàn kết trên cơ sở thống nhất mục tiêu, và lợi ích có lý, có tình B. Đoàn kết trên cơ sở dân chủ C. Hợp tác quốc tế trên cơ sở giữ vững toàn vẹn lãnh thổ D. Kết hợp sức mạnh dân tộc và sức mạnh thời đại)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là quan điểm của Hồ Chí Minh về xây dựng nhà nước có hiệu lực pháp lý mạnh mẽ?",
        "options": {
            "A": "Hoạt động quản lý nhà nước bằng Hiến pháp và pháp luật, chú trọng đưa pháp luật vào cuộc sống.",
            "B": "Hoạt động quản lý nhà nước bằng quy định và đạo luật, chú trọng đưa quy định vào cuộc sống.",
            "C": "Hoạt động quản lý nhà nước bằng Hiến pháp và sắc lệnh, chú trọng đưa sắc lệnh",
            "D": ""
        },
        "answer": "A",
        "explanation": "Hiến pháp và pháp luật phải điều chỉnh quản lý nhà nước, được phổ biến, thực thi và kiểm soát; xây luật phải đi cùng đưa luật vào đời sống.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 87-89.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Trong Tư tường Hồ Chí Minh nhà nước thượng tôn pháp luật quản lý đất nước bằng: -> Hiến pháp và Pháp luật)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, nhà nước của dân là:",
        "options": {
            "A": "Do nhân dân lập ra",
            "B": "Do nhân dân lãnh đạo",
            "C": "Do nhân dân quản lý",
            "D": "Quyền lực của nhà nước và xã hội thuộc về nhân dân"
        },
        "answer": "D",
        "explanation": "Nhà nước của dân xác định nguồn gốc và chủ thể quyền lực: mọi quyền lực thuộc nhân dân, cán bộ chỉ thực thi quyền được ủy thác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83-84."
    },
    {
        "question": "Theo Hồ Chí Minh, mọi người phải hiểu và tuyệt đối chấp hành pháp luật, bất kể người đó giữ cương vị nào. Vì thần linh pháp quyền là:",
        "options": {
            "A": "Sức mạnh do thần linh và vì con người.",
            "B": "Sức mạnh do con người và vì con người.",
            "C": "Sức mạnh do con người và vì thần linh.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Pháp luật phải được mọi người tôn trọng, kể cả người có chức vụ, và phải bảo vệ quyền con người. Cách giải thích sức mạnh do người, vì người phù hợp tinh thần pháp quyền nhân nghĩa; giáo trình không chép nguyên văn định nghĩa của B.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 87-90.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, dân làm chủ nghĩa là:",
        "options": {
            "A": "Đề cập tới năng lực của dân",
            "B": "Đề cập tới trách nhiệm của dân",
            "C": "Tất cả các phương án",
            "D": ""
        },
        "answer": "C",
        "explanation": "Làm chủ không chỉ là có địa vị mà còn phải có năng lực thực hiện quyền và trách nhiệm công dân; A và B cùng đúng nên chọn C.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 85-86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng đạo đức cách mạng phải: (NHUNG HOÀNG)",
        "options": {
            "A": "Tự mình tu dưỡng mà thành",
            "B": "Tự mình phấn đấu mà thành",
            "C": "Tự mình học tập mà thành",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đạo đức cần sự tự giác tu dưỡng thường xuyên trong công việc và quan hệ hằng ngày; giáo dục chỉ có hiệu quả khi gắn tự giáo dục và rèn luyện bản thân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 135-136.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh: \"Trong bầu trời không gì quý bằng nhân dân, trong thế giới không gì mạnh bằng:",
        "options": {
            "A": "lực lượng đoàn kết của nhân dân\".",
            "B": "lực lượng đoàn kết của nông dân\".",
            "C": "lực lượng đoàn kết của công nhân\".",
            "D": ""
        },
        "answer": "A",
        "explanation": "Nhân dân là chủ thể sáng tạo lịch sử; đoàn kết biến trí tuệ và lực lượng của nhiều người thành sức mạnh vượt khó và quyết định thắng lợi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 138.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng: \"Học để làm việc, (....) , làm cán bộ\"",
        "options": {
            "A": "Làm thầy",
            "B": "Làm cách mạng",
            "C": "Làm người",
            "D": "Làm đầy tớ"
        },
        "answer": "C",
        "explanation": "Học không chỉ lấy kiến thức nghề nghiệp mà còn rèn đạo đức, nhân cách và trách nhiệm; làm người là mục đích gắn giữa làm việc và làm cán bộ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 126."
    },
    {
        "question": "Theo Hồ Chí Minh, để thực hiện chiến lược \"trồng người\", cần có nhiều biện pháp, nhưng biện pháp quan trọng bậc nhất là:",
        "options": {
            "A": "Giáo dục - đào tạo",
            "B": "Thuyết phục - nêu gương",
            "C": "Cảm hóa - động viên",
            "D": "Ép buộc - cưỡng chế"
        },
        "answer": "A",
        "explanation": "Trồng người đòi hỏi phát triển phẩm chất và năng lực toàn diện; giáo dục-đào tạo trực tiếp hình thành những điều kiện ấy, phải kết hợp gia đình, nhà trường và xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 138-140."
    },
    {
        "question": "Theo Hồ Chí Minh, \"Đoàn kết là (.....). Điểm này mà thực hiện tốt thì đẻ ra con cháu đều tốt\".",
        "options": {
            "A": "Điểm mẹ",
            "B": "Điểm quyết định",
            "C": "Điểm thắng lợi",
            "D": "Điểm bố"
        },
        "answer": "A",
        "explanation": "Điểm mẹ là hình ảnh nhấn mạnh đoàn kết tạo sức mạnh để giải quyết nhiều nhiệm vụ khác; thực hiện tốt đoàn kết tạo ra các kết quả tốt tiếp theo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99."
    },
    {
        "question": "Luận điểm \"Lao động tất cả các nước đoàn kết lại\" là của:",
        "options": {
            "A": "C. Mác",
            "B": "Ph. Ăngghen",
            "C": "V.I.Lênin",
            "D": "Hồ Chí Minh"
        },
        "answer": "D",
        "explanation": "Giáo trình trình bày đoàn kết người lao động toàn thế giới và tinh thần quốc tế nhưng không dẫn khẩu hiệu Lao động tất cả các nước đoàn kết lại. Chưa đủ căn cứ xác nhận tác giả D; cần phân biệt với khẩu hiệu Vô sản tất cả các nước, đoàn kết lại.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 108,131-132."
    },
    {
        "question": "Theo Hồ Chí Minh, Mặt trận dân tộc thống nhất phải được xây dựng trên nền tảng khối liên minh công - nông - trí thức, đặt dưới:",
        "options": {
            "A": "Sự lãnh đạo của Đảng.",
            "B": "Sự lãnh đạo của tổ chức",
            "C": "Sự lãnh đạo của chính quyền",
            "D": ""
        },
        "answer": "A",
        "explanation": "Liên minh công-nông-trí tạo nền tảng lực lượng; Đảng lãnh đạo giúp Mặt trận có đường lối đúng và mục tiêu độc lập gắn chủ nghĩa xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Sức mạnh dân tộc trong tư tưởng Hồ Chí Minh bao gồm: (NHUNG HOÀNG)",
        "options": {
            "A": "Chủ nghĩa yêu nước và văn hóa truyền thống Việt Nam.",
            "B": "Tinh thần đoàn kết, ý thức đấu tranh cho độc lập, tự do.",
            "C": "Ý thức tự lực, tự cường.",
            "D": "Tất cả các phương án"
        },
        "answer": "D",
        "explanation": "Yêu nước, văn hóa truyền thống, đoàn kết, ý chí độc lập và tự lực tự cường đều cấu thành sức mạnh dân tộc; D bao quát các yếu tố A, B, C.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 106."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng lãnh đạo Nhà nước bằng phương thức nào?",
        "options": {
            "A": "Đường lối, chủ trương, chính sách.",
            "B": "Qua các tổ chức Đảng, đảng viên trong bộ máy nhà nước.",
            "C": "Bằng công tác kiểm tra.",
            "D": "Tất cả các phương án."
        },
        "answer": "D",
        "explanation": "Ba phương thức gồm đường lối, chủ trương; tổ chức Đảng và đảng viên trong bộ máy; công tác kiểm tra. Chúng cùng tạo sự lãnh đạo nên chọn tất cả.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 82."
    },
    {
        "question": "Hồ Chí Minh là đã trực tiếp chỉ đạo biên soạn Hiến pháp nào của nước ta?",
        "options": {
            "A": "Hiến pháp năm 1946.",
            "B": "Hiến pháp năm 1959.",
            "C": "Tất cả các phương án",
            "D": ""
        },
        "answer": "C",
        "explanation": "Giáo trình ghi Hồ Chí Minh tham gia lãnh đạo soạn thảo cả Hiến pháp 1946 và 1959; do A và B đều đúng nên C là đáp án tổng hợp.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 88.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, dân là chủ nghĩa là:",
        "options": {
            "A": "Đề cập tới vị trí của dân.",
            "B": "Đề cập tới vị thế của dân.",
            "C": "Đề cập tới trách nhiệm của dân.",
            "D": "Đề cập tới năng lực của dân"
        },
        "answer": "B",
        "explanation": "Dân là chủ chỉ địa vị chủ thể tối cao của quyền lực. Dân làm chủ mới nhấn mạnh thực hiện quyền, nghĩa vụ và năng lực của người chủ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83,85."
    },
    {
        "question": "Điểm đặc sắc nhất trong tư tưởng Hồ Chí Minh về Nhà nước pháp quyền là:",
        "options": {
            "A": "Coi trọng luật pháp trong quản lý xã hội.",
            "B": "Đề cao đạo đức trong quản lý xã hội.",
            "C": "Đảm bảo tính nghiêm minh và hiệu lực của pháp luật.",
            "D": "Kết hợp nhuần nhuyễn cả pháp luật và đạo đức trong quản lý xã hội."
        },
        "answer": "D",
        "explanation": "Pháp quyền nhân nghĩa vừa nghiêm minh, bảo vệ quyền con người vừa giáo dục, khuyến thiện; pháp luật và đạo đức hỗ trợ nhau trong quản lý xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 89-90."
    },
    {
        "question": "Nội dung nào không đúng với bản chất giai cấp công nhân của nhà nước theo tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Nhà nước do Đảng Cộng sản lãnh đạo.",
            "B": "Tính định hướng xã hội chủ nghĩa của sự phát triển đất nước.",
            "C": "Nguyên tắc tổ chức và hoạt động cơ bản của nó là nguyên tắc tập trung dân chủ.",
            "D": "Nhà nước dưới sự lãnh đạo của Quốc hội."
        },
        "answer": "D",
        "explanation": "Bản chất công nhân thể hiện qua Đảng lãnh đạo, định hướng xã hội chủ nghĩa và tập trung dân chủ; Quốc hội không thay Đảng giữ vai trò lãnh đạo chính trị.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 82."
    },
    {
        "question": "Hồ Chí Minh cho rằng: \"Một dân tộc, một đảng và mỗi con người, ngày hôm qua là vĩ đại, có sức hấp dẫn lớn, không nhất định hôm nay và ngày mai vẫn được mọi người yêu mến và ca ngợi, nếu lòng dạ không trong sáng nữa, nếu ....\".",
        "options": {
            "A": "Sa vào tham ô, lãnh phí.",
            "B": "Sa vào chủ nghĩa cá nhân.",
            "C": "Thoái hóa biến chất.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Uy tín quá khứ không bảo đảm phẩm chất mãi mãi; sa vào chủ nghĩa cá nhân làm mất trong sáng và lòng tin, nên phải tu dưỡng suốt đời.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75,136.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Tìm ra luận điểm sai trong tư tưởng Hồ Chí Minh khi Người lưu ý tiếp nhận và vận dụng chủ nghĩa Mác - Lênin: (NHUNG HOÀNG)",
        "options": {
            "A": "Một là, việc học tập, nghiên cứu, tuyên truyền chủ nghĩa Mác - Lênin phải luôn phù hợp với từng đối tượng.",
            "B": "Hai là, việc vận dụng chủ nghĩa Mác - Lênin phải luôn luôn kiên định trong mọi hoàn cảnh.",
            "C": "Ba là, trong quá trình hoạt động, Đảng ta phải chú ý học tập, kế thừa những kinh nghiệm tốt của các đảng cộng sản khác, đồng thời Đảng ta phải tổng kết kinh nghiệm của mình để bổ sung chủ nghĩa Mác - Lênin.",
            "D": "Bốn là, Đảng ta phải tăng cường đấu tranh để bảo vệ sự trong sáng của chủ nghĩa Mác - Lênin."
        },
        "answer": "B",
        "explanation": "Cần kiên định nền tảng Mác-Lênin nhưng vận dụng phải sáng tạo theo hoàn cảnh. B sai nếu hiểu là giữ nguyên cách vận dụng trong mọi điều kiện; không được suy ra rằng kiên định lý tưởng là sai.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 64,75."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, Đảng cộng sản Việt Nam là sản phẩm của sự kết hợp giữa:",
        "options": {
            "A": "Chủ nghĩa Mác-Lênin với phong trào công nhân.",
            "B": "Phong trào công nhân với phong trào yêu nước.",
            "C": "Chủ nghĩa Mác-Lênin với phong trào công nhân và phong trào yêu nước.",
            "D": "Chủ nghĩa Mác - Lênin với phong trào yêu nước."
        },
        "answer": "C",
        "explanation": "Điều kiện thuộc địa Việt Nam làm phong trào yêu nước kết hợp với phong trào công nhân và lý luận Mác-Lênin; ba yếu tố cùng dẫn tới sự ra đời của Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72."
    },
    {
        "question": "Trong tác phẩm \"Đường cách mệnh\" Hồ Chí Minh ví Đảng như:",
        "options": {
            "A": "Kim chỉ nam",
            "B": "Người cầm lái",
            "C": "Người chỉ huy",
            "D": ""
        },
        "answer": "B",
        "explanation": "Hình ảnh người cầm lái nói về Đảng định hướng và tổ chức; con thuyền cách mạng muốn tiến đúng đường cần sự lãnh đạo vững vàng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 71.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "\"(....) có vững cách mạng mới thành công cũng như người cầm lái có vững thuyền mới chạy\" (073-356-8678)",
        "options": {
            "A": "Đảng",
            "B": "Chính quyền",
            "C": "Lực lượng",
            "D": "Đoàn thể"
        },
        "answer": "A",
        "explanation": "Câu trích nhấn mạnh Đảng phải vững về đường lối và tổ chức để dẫn dắt cách mạng, tương tự người cầm lái giữ hướng đi của con thuyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 71."
    },
    {
        "question": "Hồ Chí Minh dạy Cán bộ, Đảng viên phải biết:",
        "options": {
            "A": "Làm tốt hơn nhân dân",
            "B": "Làm lợi hơn cho nhân dân",
            "C": "Học tập từ nhân dân",
            "D": ""
        },
        "answer": "B",
        "explanation": "Cán bộ, đảng viên phục vụ dân, lấy lợi ích và hạnh phúc của dân làm mục đích; hành động phải đem lại lợi ích thực tế thay vì tư lợi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 73,86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh luôn nhấn mạnh thái độ nào sau đây của Đảng viên:",
        "options": {
            "A": "Nêu gương",
            "B": "Dũng cảm",
            "C": "Đoàn kết",
            "D": "Chí công vô tư"
        },
        "answer": "A",
        "explanation": "Người lãnh đạo phải thực hành trước, lời nói thống nhất việc làm; nêu gương tạo niềm tin và giáo dục dân bằng hành động cụ thể.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 132-133."
    },
    {
        "question": "Hồ Chí Minh cho rằng cán bộ, đảng viên phải lưu ý cái gì có lợi cho dân dù nhỏ đến mấy cũng phải: (NHUNG HOÀNG)",
        "options": {
            "A": "Cố mà làm",
            "B": "Phấn đấu",
            "C": "Cố gắng",
            "D": ""
        },
        "answer": "A",
        "explanation": "Nhà nước và cán bộ đặt quyền lợi dân lên trên hết; việc có lợi dù nhỏ cũng cần làm, việc có hại phải tránh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác-Lênin \"làm cốt\" nghĩa là:",
        "options": {
            "A": "Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác-Lênin làm nền tảng tư tưởng.",
            "B": "Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác-Lênin làm chủ trương, đường lối.",
            "C": "Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác-Lênin làm học thuyết của Đảng.",
            "D": "Tất cả các phương án."
        },
        "answer": "A",
        "explanation": "Làm cốt nghĩa là có nền tảng tư tưởng và kim chỉ nam; chủ nghĩa Mác-Lênin cung cấp phương hướng, không chỉ là khẩu hiệu hay kiến thức tham khảo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75."
    },
    {
        "question": "Theo Hồ Chí Minh, Mục đích phê bình là:",
        "options": {
            "A": "Cốt để giúp nhau sửa chữa, giúp nhau tiến bộ.",
            "B": "Cốt để đổi cách làm việc cho tốt hơn, đúng hơn.",
            "C": "Cốt để đoàn kết và thống nhất nội bộ.",
            "D": "Tất cả các phương án."
        },
        "answer": "D",
        "explanation": "Phê bình để sửa khuyết điểm, cải tiến công việc và củng cố đoàn kết; phải trung thực, có tình đồng chí, không nhằm hạ nhục hay công kích cá nhân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 76."
    },
    {
        "question": "Trong việc tiếp nhận và vận dụng chủ nghĩa Mác-Lênin, Hồ Chí Minh lưu ý Đảng ta phải tăng cường đấu tranh để:",
        "options": {
            "A": "Bảo vệ sự trong sáng của chủ nghĩa Mác - Lênin.",
            "B": "Bảo vệ sự trong sáng của Đảng Cộng sản Việt Nam.",
            "C": "Bảo vệ chính quyền.",
            "D": "Bảo vệ nhân dân."
        },
        "answer": "A",
        "explanation": "Bảo vệ nền tảng Mác-Lênin đi cùng chống giáo điều, cơ hội và nhận thức sai; vận dụng sáng tạo giúp giữ giá trị khoa học, cách mạng của học thuyết.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75,107."
    },
    {
        "question": "Theo Hồ Chí Minh, chức năng lãnh đạo và sự lãnh đạo của Đảng phải:",
        "options": {
            "A": "Bảo đảm trên tất cả các mặt, các lĩnh vực, phải quan tâm chăm lo đến đời sống nhân dân ở những việc nhỏ.",
            "B": "Bảo đảm trên tất cả các mặt, các lĩnh vực, phải quan tâm chăm lo đến đời sống nhân dân từ việc nhỏ đến việc lớn.",
            "C": "Bảo đảm trên tất cả các mặt, các lĩnh vực, phải quan tâm chăm lo đến đời sống nhân dân ở những việc lớn.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Mục tiêu lãnh đạo là lợi ích toàn dân tộc; đường lối và hoạt động của Đảng phải chăm lo thực tế đời sống dân, không dừng ở tuyên bố chính trị chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 73,77-78.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, văn hoá không thể đứng ngoài mà phải ở trong kinh tế và chính trị, phải:",
        "options": {
            "A": "phục vụ nhiệm vụ kinh tế và thúc đẩy sự phát triển của chính trị.",
            "B": "phục vụ nhiệm vụ chính trị và thúc đẩy sự phát triển của kinh tế.",
            "C": "phục vụ nhiệm vụ văn hóa và thúc đẩy sự phát triển của kinh tế, chính trị.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Văn hóa nằm trong chính trị và kinh tế, phục vụ nhiệm vụ chính trị và tác động tích cực tới kinh tế; không chỉ thụ động chịu tác động từ hai lĩnh vực ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 119.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đối với một quốc gia: cần, kiệm, liêm, chính là thước đo sự giàu có về vật chất, vững mạnh về tinh thần, thể hiện: (NHUNG HOÀNG)",
        "options": {
            "A": "Sự văn minh tiến bộ.",
            "B": "Văn hóa cao",
            "C": "Truyền thống tốt đẹp",
            "D": "Văn hiến lâu đời"
        },
        "answer": "A",
        "explanation": "Cần, kiệm, liêm làm dân tộc giàu vật chất và mạnh tinh thần; văn minh tiến bộ được đánh giá bằng cả đạo đức lẫn điều kiện sống.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 130.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo quan điểm của Hồ Chí Minh đối với một quốc gia, cần, kiệm, liêm, chính là thước đo sự giàu có về vật chất, vững mạnh về tinh thần. Quan điểm đó thể hiện điều gì?)"
    },
    {
        "question": "Theo Hồ Chí Minh, văn hóa là đời sống tinh thần của xã hội, thuộc:",
        "options": {
            "A": "Kiến trúc thượng tầng",
            "B": "Cơ sở hạ tầng",
            "C": "Tất cả các phương án",
            "D": ""
        },
        "answer": "A",
        "explanation": "Theo nghĩa hẹp, văn hóa là đời sống tinh thần, thuộc kiến trúc thượng tầng; theo nghĩa rộng, văn hóa còn bao gồm toàn bộ sáng tạo và phương thức sinh hoạt.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118-119.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Yêu thương con người được Hồ Chí Minh xác định là một trong những phẩm chất đạo đức cao đẹp nhất. Người nói, người cách mạng là người giàu tình cảm, có tình cảm cách mạng: (NHUNG HOÀNG)",
        "options": {
            "A": "mới đi làm cách mạng.",
            "B": "mới yêu thương con người.",
            "C": "mới là người cách mạng.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Tình yêu thương nhân dân tạo động cơ chấp nhận gian khổ, hy sinh để giải phóng con người; tình cảm cách mạng phải chuyển thành hành động.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 130-131.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Loại giặc nào được Hồ Chí Minh đề cập đầu tiên?",
        "options": {
            "A": "Giặc dốt",
            "B": "Giặc đói",
            "C": "Giặc ngoại xâm",
            "D": ""
        },
        "answer": "B",
        "explanation": "Sau độc lập, giải quyết nạn đói và đời sống là việc cấp bách vì dân phải được ăn no, mặc đủ. PDF chưa đủ căn cứ cho chữ đầu tiên nếu câu hỏi không chỉ rõ bài nói hay thời điểm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 44,87.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh dạy: \"Hiểu chủ nghĩa Mác - Lênin là phải sống với nhau có tình, có nghĩa. Nếu thuộc bao nhiêu sách mà sống không có tình có nghĩa thì sao gọi là:",
        "options": {
            "A": "Hiểu chủ nghĩa Mác - Lênin được\".",
            "B": "Học chủ nghĩa Mác - Lênin được\".",
            "C": "Theo chủ nghĩa Mác - Lênin được\".",
            "D": ""
        },
        "answer": "A",
        "explanation": "Hiểu Mác-Lênin không chỉ thuộc lý luận mà phải thể hiện thái độ nhân ái, tình nghĩa trong đời sống; đây là yêu cầu thống nhất nhận thức với đạo đức thực hành.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 131.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, toàn bộ những sáng tạo và phát minh của con người nhằm thích ứng nhu cầu đời sống và sinh tồn tức là:",
        "options": {
            "A": "văn hoá.",
            "B": "truyền thống.",
            "C": "văn minh.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Định nghĩa theo nghĩa rộng xem văn hóa là toàn bộ sáng tạo, phát minh và phương thức sinh hoạt đáp ứng nhu cầu sống và sinh tồn của con người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng con người mới XHCN phải có:",
        "options": {
            "A": "Đạo đức cách mạng",
            "B": "Đạo đức quần chúng",
            "C": "Đạo đức nhân dân",
            "D": ""
        },
        "answer": "A",
        "explanation": "Con người xã hội chủ nghĩa cần lý tưởng, đạo đức, tác phong và năng lực làm chủ; đạo đức cách mạng là nền tảng hướng tài năng vào lợi ích chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 125-126,139.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Mục tiêu giải phóng dân tộc theo con đường cách mạng vô sản mà Hồ Chí Minh đã lựa chọn cho dân tộc Việt Nam là:",
        "options": {
            "A": "Nước nhà độc lập.",
            "B": "Nhân dân được hưởng cuộc sống ấm no, tự do, hạnh phúc.",
            "C": "Tất cả các phương án trả lời đều đúng",
            "D": ""
        },
        "answer": "C",
        "explanation": "Nước độc lập phải đi cùng cuộc sống tự do, ấm no, hạnh phúc của dân; A và B là hai mặt thống nhất của mục tiêu giải phóng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 43-45,65-67.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"CNXH là công trình tập thể của (...........), do nhân dân tự xây dựng lấy dưới sự lãnh đạo của Đảng\".",
        "options": {
            "A": "Nhà nước",
            "B": "Nhân dân",
            "C": "Chính quyền",
            "D": "Cộng đồng"
        },
        "answer": "B",
        "explanation": "Nhân dân là chủ thể và lực lượng quyết định xây dựng chủ nghĩa xã hội; Đảng lãnh đạo nhưng không thay dân làm toàn bộ sự nghiệp ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 57."
    },
    {
        "question": "Điền vào chỗ trống để hoàn thiện câu nói sau của Hồ Chí Minh: \"Nước ta là nước (..........) , địa vị cao nhất là dân, vì dân là chủ\".",
        "options": {
            "A": "Tự do",
            "B": "Tự chủ",
            "C": "Dân chủ",
            "D": "Bình đẳng"
        },
        "answer": "C",
        "explanation": "Dân chủ xác định nhân dân ở địa vị chủ, còn từ cán bộ phục vụ đến Chủ tịch nước đều nhận nhiệm vụ phục vụ dân, không đứng trên dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 84."
    },
    {
        "question": "Theo Hồ Chí Minh, tất cả các cơ quan Nhà nước phải dựa vào nhân dân, liên hệ chặt chẽ với nhân dân, lắng nghe ý kiến và chịu sự:",
        "options": {
            "A": "Kìm kẹp của nhân dân",
            "B": "Giáo dục của nhân dân",
            "C": "Kiểm soát của Đảng",
            "D": "Kiểm soát của nhân dân"
        },
        "answer": "D",
        "explanation": "Nhà nước nhận quyền do dân giao nên phải chịu dân giám sát; liên hệ, lắng nghe và kiểm soát ngăn lạm quyền, bảo đảm bộ máy phục vụ đúng lợi ích dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 90-91."
    },
    {
        "question": "Hồ Chí Minh cho rằng:(NHUNG HOÀNG)",
        "options": {
            "A": "Vấn đề dân tộc và vấn đề giai cấp là quan hệ chính trị",
            "B": "Vấn đề dân tộc và vấn đề giai cấp là quan hệ kinh tề",
            "C": "Vấn đề dân tộc và vấn đề giai cấp là quan hệ thể hiện trong mọi mặt của xã hội",
            "D": ""
        },
        "answer": "C",
        "explanation": "Dân tộc và giai cấp gắn trong đường lối chính trị, lợi ích kinh tế và quan hệ xã hội; không thể thu hẹp mối quan hệ vào riêng kinh tế hoặc chính trị.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 65-67,82-83.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nguyễn Sinh Cung theo cha lần đầu tiên đến Huế vào thời gian nào?",
        "options": {
            "A": "Từ năm 1895 đến năm 1901",
            "B": "Từ năm 1896 đến năm 1906",
            "C": "Từ năm 1896 đến năm 1901",
            "D": "Từ năm 1895 đến năm 1905"
        },
        "answer": "A",
        "explanation": "Giáo trình nêu thời niên thiếu và ảnh hưởng gia đình, quê hương nhưng chưa ghi trực tiếp khoảng 1895-1901 của lần đầu tới Huế. Mốc A cần kiểm chứng bằng tư liệu tiểu sử bổ sung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 28."
    },
    {
        "question": "Đâu là nguyên tắc đoàn kết quốc tế trong tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Đảm bảo mục tiêu độc lập của dân tộc mình và mục tiêu thời đại.",
            "B": "Đảm bảo mục tiêu độc lập của dân tộc mình và mục tiêu của nhân loại",
            "C": "Đảm bảo mục tiêu độc lập của dân tộc mình và mục tiêu đại chúng.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đoàn kết quốc tế phải thống nhất mục tiêu độc lập của dân tộc với hòa bình, dân chủ và tiến bộ của nhân loại, không hy sinh quyền tự quyết của mình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 107-112.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh khẳng định: \"Chính vì Đảng Lao động Việt Nam là Đảng của giai cấp công nhân động, cho nên nó phải là Đảng của dân tộc Việt Nam\". Luận điểm này được trích trong tác phẩm nào?",
        "options": {
            "A": "Tuyên ngôn độc lập",
            "B": "Lời kêu gọi toàn quốc kháng chiến",
            "C": "Báo cáo chính trị tại Đại hội Đại biểu toàn quốc lần thứ II của Đảng",
            "D": "Đường Cách mệnh"
        },
        "answer": "C",
        "explanation": "Giáo trình dẫn Báo cáo chính trị tại Đại hội II năm 1951 khi giải thích Đảng của giai cấp công nhân đồng thời là Đảng của dân tộc Việt Nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48."
    },
    {
        "question": "Pháp quyền nhân nghĩa được hiểu là:",
        "options": {
            "A": "Nhà nước phải tôn trọng, đảm bảo thực hiện đây đủ quyền con người, chăm lo đến lợi ích của mọi người",
            "B": "Nhà nước phải tôn trọng nhũng quyền tự do cá nhân, vì lợi ích của con người",
            "C": "Nhà nước phải đàm bảo tính nhân văn trong pháp luật, quan tâm đến lợi ích mỗi người",
            "D": "Nhà nước phải tôn trọng những quyền tự do cá nhân vì mục đích nhân văn cao cả"
        },
        "answer": "A",
        "explanation": "Pháp quyền nhân nghĩa lấy quyền sống, các quyền chính trị, kinh tế, văn hóa, xã hội và lợi ích con người làm nội dung cần tôn trọng, bảo đảm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 89."
    },
    {
        "question": "Vận dụng tư tưởng Hồ Chí Minh trong chiến lược đoàn kết quốc tế thì bộ phận nào là hạt nhân đoàn kết dân tộc và đoàn kết quốc tế?",
        "options": {
            "A": "Đảng Cộng sản Việt Nam",
            "B": "Nhà nước",
            "C": "Đoàn thanh niên",
            "D": "Mặt trận tổ quốc"
        },
        "answer": "A",
        "explanation": "Đoàn kết trong Đảng tạo cơ sở đoàn kết toàn dân; sự lãnh đạo và đường lối đúng giúp gắn nội lực dân tộc với đoàn kết, hợp tác quốc tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100-101,113-115."
    },
    {
        "question": "Hồ Chí Minh cho rằng phát triển giáo dục để làm gì?",
        "options": {
            "A": "Nâng cao dân trí",
            "B": "Phát triển lâu dài",
            "C": "Chuẩn bị nhân tài",
            "D": "Mục tiêu bên vũng"
        },
        "answer": "A",
        "explanation": "Xóa mù chữ và phát triển giáo dục nâng hiểu biết, dân trí, đào tạo con người và nguồn nhân lực; giáo dục phục vụ khả năng làm chủ và tiến bộ xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118,122."
    },
    {
        "question": "Theo quan điểm của Hồ Chí Minh, tố chức nào sau đây có nhiệm vụ thực hiện sự khối đại đoàn kết toàn dân tộc?(NHUNG HOÀNG)",
        "options": {
            "A": "Mặt trận dân tộc thống nhất",
            "B": "Mặt trận dân chủ",
            "C": "Mặt trận nhãn dẫn",
            "D": "Mặt trận Việt Minh"
        },
        "answer": "A",
        "explanation": "Mặt trận tập hợp tổ chức, cá nhân yêu nước thành lực lượng chung, thực hiện đại đoàn kết rộng rãi trên nền tảng và mục tiêu thống nhất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 102-103."
    },
    {
        "question": "Chủ trương cầu ngoại viện, dùng bạo lực để khôi phục độc lập dân tộc là đường lối của nhà yêu nước nào?(NHUNG HOÀNG)",
        "options": {
            "A": "Phan Bội Châu",
            "B": "Phan Chu Trinh",
            "C": "Hồ Chí Minh",
            "D": "Hoàng Hoa Thám"
        },
        "answer": "A",
        "explanation": "Phan Bội Châu theo khuynh hướng dựa ngoại viện để chống Pháp; Hồ Chí Minh khâm phục lòng yêu nước nhưng tìm con đường khác. PDF chưa triển khai đầy đủ câu chữ bạo lực và ngoại viện của lựa chọn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 19-20,29."
    },
    {
        "question": "Hồ Chí Minh cho rằng đoàn kết có ý nghĩa thế nào?(NHUNG HOÀNG)",
        "options": {
            "A": "Đoàn kết là yêu nước",
            "B": "Đoàn kết là sáng tạo",
            "C": "Đoàn kết là sức mạnh",
            "D": "Đoàn kết là khôn ngoan"
        },
        "answer": "C",
        "explanation": "Đoàn kết tạo lực lượng có khả năng vượt khó và thắng lợi; giáo trình khái quát vai trò đó bằng luận điểm đoàn kết là sức mạnh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98-99."
    },
    {
        "question": "Vì sao Hồ Chí Minh lại khẳng định: đại đoàn kết toàn dân tộc phải được xác định là nhiệm vụ hàng đầu của Đảng?(NHUNG HOÀNG)",
        "options": {
            "A": "Vì đại đoàn kết toàn dân tộc không chi là khẩu hiệu chiến lược, mà còn là mục đích của cách mạng cần phải được quán triệt trong tất cả mọi lĩnh vực, từ đường lối, chủ trương, chính sách tới hoạt động thực tiễn của Đảng",
            "B": "Vì Đảng là lực lượng vận động, thuyết phục và hướng dẫn quần chúng nhân dân",
            "C": "Vì Đảng là lực lượng lãnh đạo cách mạng Việt Nam",
            "D": "Vì Đảng là lực lượng giáo dục, giác ngộ quần chúng nhân dân và liên lạc với vô sản các nước"
        },
        "answer": "A",
        "explanation": "Đảng lãnh đạo cách mạng nên phải thức tỉnh, tổ chức và đoàn kết quần chúng; nhiệm vụ ấy xuyên suốt đường lối và hành động, không chỉ là khẩu hiệu.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99."
    },
    {
        "question": "Tóm tắt nội dung chữ \"Cần\" theo tư tưởng Hồ Chí Minh là gì?",
        "options": {
            "A": "Cần tức là lao động cần cù, siêng năng; lao động có kế hoạch, sáng tạo, có năng suất cao",
            "B": "Cần tức là siêng năng, chịu khó, cố gắng hoàn thành công việc",
            "C": "Cần tức là làm việc cần mẫn, giành nhiều thời gian cho công việc",
            "D": "Cần tức là siêng năng, cố gắng, tích cực trong công tác"
        },
        "answer": "A",
        "explanation": "Cần là siêng năng có kế hoạch, sáng tạo và năng suất; không phải lao động mù quáng hay chỉ kéo dài thời gian làm việc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 128."
    },
    {
        "question": "Quan điểm nào dưới đây là phương thức tiếp cận về chủ nghĩa xã hội của Hồ Chí Minh?",
        "options": {
            "A": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa cá nhân.",
            "B": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa nhân văn.",
            "C": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa vị lợi.",
            "D": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa vị kỷ."
        },
        "answer": "A",
        "explanation": "Hồ Chí Minh tiếp cận xã hội mới từ nhiều góc độ, trong đó đạo đức và lợi ích cộng đồng đối lập chủ nghĩa cá nhân; không được hiểu chỉ có duy nhất cách tiếp cận đạo đức.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53,61,65."
    },
    {
        "question": "\"Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì\". Trích dẫn trên đề cập đến nội dung gì trong tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
            "B": "Về sức mạnh của nhân dân, của khối đại đoàn kết dân tộc",
            "C": "Tư tưởng về phát triển kinh tế và văn hoá",
            "D": "Tu dưỡng, rèn luyện đạo đức suốt đời"
        },
        "answer": "A",
        "explanation": "Độc lập phải đem lại tự do, hạnh phúc thực tế cho dân; chủ nghĩa xã hội là điều kiện phát triển nội dung xã hội của độc lập và bảo đảm nó vững chắc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 43-44,65-67.\nGhi chú trong tài liệu: (Kiểu hỏi khác: - Con đường cứu nước của Hồ Chí Minh là: - Nội dung cốt lõi của tư tưởng Hồ Chí Minh là: )"
    },
    {
        "question": "Trong Chánh cương vắn tắt của Đảng năm 1930, Hồ Chí Minh cũng đã xác định mục tiêu chính trị của Đảng là?",
        "options": {
            "A": "\"Đánh đổ để quốc chủ nghĩa Pháp\"",
            "B": "\"Làm cho nước Nam được hoàn toàn độc lâp\"",
            "C": "\"Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến\"",
            "D": "\"Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến. Làm cho nước Nam được hoàn toàn độc lập\""
        },
        "answer": "D",
        "explanation": "Mục tiêu đồng thời xóa ách đế quốc và phong kiến, làm Việt Nam hoàn toàn độc lập; D đầy đủ hơn các phương án chỉ nêu một phần.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 43,31."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng phải thường xuyên tự đổi mới và chỉnh đốn về những mặt nào?",
        "options": {
            "A": "Chính trị",
            "B": "Tư tưởng",
            "C": "Tổ chức",
            "D": "Tất cả các phương án"
        },
        "answer": "D",
        "explanation": "Đổi mới, chỉnh đốn phải đồng bộ chính trị, tư tưởng và tổ chức; các phương án riêng lẻ đều cần thiết nên chọn tất cả.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75-77,94."
    },
    {
        "question": "Bảo đảm dân chủ trong việc xác lập quyền lực của nhân dân.",
        "options": {
            "A": "Phải làm cho dân có ăn",
            "B": "Phải làm cho dân có mặc",
            "C": "Phải làm cho dân có chỗ ở",
            "D": "Phải làm cho dân được học hành",
            "E": "Tất cả các phương án"
        },
        "answer": "E",
        "explanation": "CẦN KIỂM TRA CÂU HỎI: Bốn lựa chọn ăn, mặc, ở, học đều phù hợp yêu cầu chăm lo con người nên E tổng hợp đúng về nội dung. Nhưng chúng không trực tiếp trả lời tiêu đề xác lập quyền lực; phần thân câu hỏi có thể bị nhầm hoặc thiếu.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 137."
    },
    {
        "question": "Theo Hồ Chí Minh, \"Muốn xây dựng chủ nghĩa xã hội, trước hết cần có (NHUNG HOÀNG)",
        "options": {
            "A": "con người xã hội chủ nghĩa\"",
            "B": "khoa học xã hội tiên tiến\"",
            "C": "công nông nghiệp hiện đại\"",
            "D": "nền kinh tế phát triển\""
        },
        "answer": "A",
        "explanation": "Xã hội mới cần người có lý tưởng, đạo đức, lối sống và năng lực làm chủ; xây dựng con người phải tiến hành từ đầu, đồng thời với xây dựng kinh tế và xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 61,139.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo Hồ Chí Minh, muốn xây dựng chủ nghĩa xã hội trước hết cần có cái gì? =>Con người xã hội chủ nghĩa) (Kiểu hỏi khác: Theo Hồ Chí Minh muốn xây dựng chủ nghĩa xã hội, trước hết cần có: => Con người xã hội chủ nghĩa.)"
    },
    {
        "question": "Lực lượng đoàn kết quốc tế theo hồ chí minh cần phải đoàn kết với",
        "options": {
            "A": "Giai cấp công nhân, lực lượng xhcn, phong trào cộng sản và công nhân quốc tế,với các dân tộc thuộc địa bị áp bức và các lực lượng tiến bộ trên thế giới.",
            "B": "Giai cấp nông dân, lực lượng xhcn, phong trào cộng sản và công nhân quốc tế,với các dân tộc thuộc địa bị áp bức và các lực lượng tiến bộ trên thế giới.",
            "C": "Giai cấp lao động, lực lượng xhcn, phong trào cộng sản và công nhân quốc tế,với các dân tộc thuộc địa bị áp bức và các lực lượng tiến bộ trên thế giới.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Các lực lượng gồm phong trào cộng sản, công nhân quốc tế, giải phóng dân tộc và hòa bình, dân chủ; đoàn kết rộng rãi giúp chống kẻ thù chung và bảo vệ độc lập.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 108-110.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, căn bệnh nào là một thứ vi trùng rất độc, đẻ ra hàng trăm thứ bệnh nguy hiểm?",
        "options": {
            "A": "Chủ nghĩa tư bản",
            "B": "Chủ nghĩa cá nhân",
            "C": "Sự lười biếng",
            "D": "Thói quen và truyền thống lạc hậu"
        },
        "answer": "B",
        "explanation": "Chủ nghĩa cá nhân đặt tư lợi lên trên lợi ích chung, là nguồn nảy sinh tham lam, quan liêu, mất đoàn kết và vi phạm kỷ luật.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 65,92,135."
    },
    {
        "question": "Nguyên tắc cơ bản nào sau đây cần phải quán triệt trong nghiên cứu tư tưởng hồ chí minh?",
        "options": {
            "A": "quan điểm kế thừa và phát triển",
            "B": "quan điểm kế thừa và toàn diện",
            "C": "quan điểm cách mạng và cụ thể",
            "D": "quan điểm toàn diện và cụ thể"
        },
        "answer": "A",
        "explanation": "Kế thừa phải gắn phát triển sáng tạo trong điều kiện mới; nghiên cứu không dừng việc nhớ lời nói hay sao chép cách làm ở bối cảnh cũ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 13."
    },
    {
        "question": "Phạm vi vận dụng tư tưởng Hồ Chí Minh:",
        "options": {
            "A": "Đối với cách mạng Việt Nam",
            "B": "Đối với các dân tộc đang bị xâm lược và áp bức trên toàn thế giới",
            "C": "Đối với mọi quốc gia, dân tộc",
            "D": "Đối với cách mạng giải phóng dân tộc ở Việt Nam"
        },
        "answer": "B",
        "explanation": "CẦN LƯU Ý PHẠM VI: Giáo trình trình bày giá trị đối với cách mạng Việt Nam và sự tiến bộ của nhân loại. B mô tả một phạm vi quốc tế cụ thể, không đủ bao quát toàn bộ phạm vi vận dụng của tư tưởng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 36-39.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Phạm vi vận dụng tư tưởng Hồ Chí Minh là đối tượng nào? A. Đối với cách mạng Việt Nam B. Đối với các nước tư sản C. Đối với mọi quốc gia, dân tộc D. Đối với cách mạng giải phóng dân tộc ở Việt Nam)"
    },
    {
        "question": "Hồ Chí Minh ví chính sách đối với Pháp sau khi giành độc lập như chính sách",
        "options": {
            "A": "Tạm hòa",
            "B": "Câu tiễn",
            "C": "Tạm thời",
            "D": ""
        },
        "answer": "B",
        "explanation": "Giáo trình giải thích sách lược hòa hoãn có nguyên tắc, lợi dụng mâu thuẫn kẻ thù để củng cố lực lượng. Tuy nhiên không dẫn ví dụ Câu Tiễn, nên chưa xác nhận trực tiếp phép ví ở B.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 34.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Năm 1946 Hồ Chí Minh ví chính sách đối với Pháp sau khi giành độc lập như chính sách gì? A. Tạm hòa B. Câu Tiễn C. Tạm thời D. Thân thiện và hoà bình)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nguyên tắc chung của Mặt trận dân tộc thống nhất được Hồ Chí Minh xác định cụ thể phù hợp là",
        "options": {
            "A": "Độc lập, tự do",
            "B": "Tất cả các phương án",
            "C": "Đoàn kết chặt chẽ, lâu dài, thật sự, chân thành",
            "D": ""
        },
        "answer": "C",
        "explanation": "Mặt trận phải giữ đoàn kết lâu dài, chân thành, giúp nhau tiến bộ; lợi ích khác biệt cần được bàn bạc và giải quyết bằng hiệp thương.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103-104.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Cách diễn đạt nào dưới đây là của Hồ Chí Minh?",
        "options": {
            "A": "Lý luận mà không liên hệ với thực tiễn là lý luận mù quáng",
            "B": "Lý luận mà không liên hệ với thực tiễn là lý luận suông",
            "C": "Lý luận mà không liên hệ với thực tiễn là lý luận giáo điều",
            "D": "Lý luận mà không liên hệ với thực tiễn là lý luận trống rỗng"
        },
        "answer": "B",
        "explanation": "Lý luận chỉ có ý nghĩa khi định hướng và được kiểm nghiệm bằng thực tiễn; không vận dụng vào công việc sẽ trở thành lý luận suông.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 11-12."
    },
    {
        "question": "Một trong những giá trị của văn hoá phương Tây được Hồ Chí Minh tiếp thu để hình thành tư tưởng của mình là:(NHUNG HOÀNG)",
        "options": {
            "A": "Tư tưởng văn hoá dân chủ và cách mạng của cách mạng Pháp và cách mạng Mỹ",
            "B": "Những mặt tích cực của Nho Giáo",
            "C": "Triết học cổ điển Đức",
            "D": "Kinh tế chính trị cổ điển Anh"
        },
        "answer": "A",
        "explanation": "Người tiếp thu các giá trị nhân quyền, dân quyền, tự do, bình đẳng trong cách mạng Pháp, Mỹ rồi phát triển thành quyền của các dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24-25."
    },
    {
        "question": "Một trong những giá trị nào dưới đây dẫn đến hình thành tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Chủ nghĩa yêu nước",
            "B": "Chủ nghĩa xã hội",
            "C": "Chủ nghĩa nhân đạo",
            "D": "Chủ nghĩa nhân văn"
        },
        "answer": "A",
        "explanation": "Chủ nghĩa yêu nước là giá trị truyền thống nổi bật, nuôi dưỡng ý chí cứu nước và trở thành động lực để Người tìm đường giải phóng dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 22."
    },
    {
        "question": "Hồ Chí Minh vạch ra mục tiêu của cách mạng giải phóng dân tộc thuộc địa là gì?(NHUNG HOÀNG)",
        "options": {
            "A": "Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền của nhân dân",
            "B": "Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền về tay người lao động",
            "C": "Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền về tay lực lượng cách mạng",
            "D": "Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền của công nông"
        },
        "answer": "A",
        "explanation": "Giải phóng thuộc địa trước hết đánh đổ ách thống trị thực dân, giành độc lập và quyền làm chủ cho dân; đó là tiền đề tiến tới xã hội mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-47,83."
    },
    {
        "question": "Theo Hồ Chí Minh, tính chất và nhiệm vụ hàng đầu của cách mạng ở thuộc địa là gì?",
        "options": {
            "A": "Giải phóng nhân loại",
            "B": "Giải phóng thế giới",
            "C": "Giải phóng giai cấp",
            "D": "Giải phóng dân tộc"
        },
        "answer": "D",
        "explanation": "Mâu thuẫn chủ yếu ở thuộc địa là dân tộc với đế quốc; vì vậy giải phóng dân tộc được đặt lên hàng đầu, các nhiệm vụ khác phải phục vụ mục tiêu ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 47,33.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Hồ Chí Minh vạch ra nhiệm vụ hàng đầu của cách mạng ở thuộc địa là)"
    },
    {
        "question": "Theo Hồ Chí Minh, muốn phát huy tinh thần đoàn kết Đảng phải",
        "options": {
            "A": "Có chính sách mặt trận dân tộc đúng đắn",
            "B": "Có chính sách đúng đắn thu hút quần chúng nhân dân",
            "C": "Có chính sách dân chủ đúng đắn",
            "D": ""
        },
        "answer": "A",
        "explanation": "Chính sách Mặt trận đúng xác định mục tiêu, nền tảng và phương pháp tập hợp thích hợp; nhờ đó tinh thần đoàn kết thành lực lượng có tổ chức.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98,101-105.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh đã nêu quan điểm về xây dựng một nền văn hóa mới là",
        "options": {
            "A": "Xây dựng tâm lý, xây dựng luân lý",
            "B": "Xây dựng tâm lý, xây dựng luân lý, xây dựng xã hội",
            "C": "Xây dựng tâm lý, xây dựng luân lý, xây dựng xã hội, xây dựng chính trị",
            "D": "Xây dựng tâm lý, xây dựng luân lý, xây dựng xã hội, xây dựng chính trị, xây dựng kinh tế"
        },
        "answer": "D",
        "explanation": "Năm nội dung định hướng gồm tâm lý, luân lý, xã hội, chính trị, kinh tế; D liệt kê đầy đủ, các phương án thiếu mặt không bao quát quan điểm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 123."
    },
    {
        "question": "Luận điểm: \"Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp ở mọi nơi. Đảng có vững thì cách mạng mới thành công, cũng như người cầm lái có vững thuyền mới chạy\" được trích từ tác phẩm nào của Hồ Chí Minh?(073-356-8678)",
        "options": {
            "A": "Bản án chế độ thực dân Pháp",
            "B": "Đường kách mệnh",
            "C": "Bản án chế độ thực dân Pháp",
            "D": "Thường thức chính trị"
        },
        "answer": "B",
        "explanation": "Giáo trình dẫn trực tiếp Đường cách mệnh năm 1927 khi giải thích sự cần thiết của Đảng và ví Đảng với người cầm lái.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 71."
    },
    {
        "question": "Luận điểm: \"Cách mệnh An Nam cũng là một bộ phận trong cách mệng thế giới. Ai làm cách mệnh trong thế giới đều là đồng chí của dân An Nam cả\" được trích từ tác phẩm nào của Hồ Chí Minh?(NHUNG HOÀNG)",
        "options": {
            "A": "Đông Dương (1923-1924)",
            "B": "Bản án chế dộ thực dân Pháp",
            "C": "Đường Kách mệnh",
            "D": "Tuyên ngôn Độc lập"
        },
        "answer": "C",
        "explanation": "Đường cách mệnh trình bày cách mạng Việt Nam gắn với cách mạng thế giới và tinh thần đoàn kết quốc tế. Giáo trình xác nhận nội dung, nhưng chưa chép nguyên văn câu trích đầy đủ ở đây.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 31,106-107."
    },
    {
        "question": "Chọn phương án trả lời đúng nhất?(NHUNG HOÀNG)",
        "options": {
            "A": "Chủ nghĩa Mác - Lênin là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng",
            "B": "Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng",
            "C": "Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng ta",
            "D": ""
        },
        "answer": "C",
        "explanation": "Đảng xác định chủ nghĩa Mác-Lênin cùng tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam; hai thành phần thống nhất, không thay thế lẫn nhau.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 8-9.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, để đánh bại các thế lực đế quốc thực dân chỉ có tinh thần yêu nước là chưa đủ, cách mạng muốn đến nơi, phải tập hợp được tất cả mọi lực lượng có thể tập hợp, xây dựng được.",
        "options": {
            "A": "Chính sách dân tộc phù hợp",
            "B": "Khối đại đoàn kết dân tộc bền vững",
            "C": "Chương trình tập hợp lực lượng đoàn kết rộng rãi",
            "D": ""
        },
        "answer": "B",
        "explanation": "Lòng yêu nước cần được tổ chức thành khối đoàn kết rộng rãi, bền vững; nếu lực lượng phân tán thì không phát huy đầy đủ sức mạnh chống xâm lược.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98-103.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, mục đích của chủ nghĩa xã hội là.",
        "options": {
            "A": "Xây dựng nền kinh tế hiện đại, có sức tăng trưởng cao.",
            "B": "Không ngừng nâng cao đời sống vật chất và tinh thần của nhân dân",
            "C": "Phát triển mạnh mẽ khoa học - kỹ thuật",
            "D": "Bảo đảm quyền làm chủ của nhân dân lao động"
        },
        "answer": "B",
        "explanation": "Mọi mục tiêu chính trị, kinh tế, văn hóa đều hướng tới nâng cao đời sống và hạnh phúc của nhân dân; không chỉ phát triển vật chất mà cả tinh thần.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53,58-59,121."
    },
    {
        "question": "Theo Hồ Chí Minh, mục tiêu tổng quát của chủ nghĩa xã hội là gì?",
        "options": {
            "A": "Một nền kinh tế hiện đại, khoa học kỹ thuật tiên tiến",
            "B": "Không ngừng cải thiện và nâng cao đời sống của nhân dân lao động",
            "C": "Phát triển mạnh mẽ khoa học - kỹ thuật, tư tưởng văn hóa tiến bộ",
            "D": "Bảo đảm quyền làm chủ của nhân dân lao động"
        },
        "answer": "B",
        "explanation": "Giáo trình nêu mục tiêu cơ bản là người lao động thoát nghèo, có việc làm, ấm no, hạnh phúc; cải thiện đời sống dân là thước đo mục tiêu xã hội mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53."
    },
    {
        "question": "Hãy chọn phương án trả lời đúng nhất: Lòng khoan dung độ lượng ở Hồ Chí Minh không phải là một sách lược, một thủ đoạn chính trị mà là sự nối tiếp và phát triển của :",
        "options": {
            "A": "Chủ nghĩa yêu nước",
            "B": "Chủ nghĩa dân tộc chân chính",
            "C": "Truyền thống nhân ái, bao dung của dân tộc",
            "D": "Mục tiêu cách mạng"
        },
        "answer": "C",
        "explanation": "Khoan dung, trân trọng phần thiện kế thừa truyền thống nhân nghĩa, giúp cảm hóa và tập hợp con người; không phải thủ đoạn tạm thời để lấy lòng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 101-102."
    },
    {
        "question": "Hồ Chí Minh nhấn mạnh mục đích của Đảng Lao động Việt Nam là",
        "options": {
            "A": "Liên kết toàn dân, chống giặc ngoại xâm",
            "B": "Đoàn kết đoàn kết đại đoàn kết",
            "C": "Đoàn kết toàn dân, phụng sự tổ quốc",
            "D": "Đoàn kết dân tộc, phụng sự tổ quốc"
        },
        "answer": "C",
        "explanation": "Tám chữ đoàn kết toàn dân, phụng sự Tổ quốc khái quát nhiệm vụ tập hợp lực lượng và mục đích phục vụ chung của Đảng Lao động Việt Nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99."
    },
    {
        "question": "Đâu là nguyên tắc xây dựng đạo đức mới trong tư tưởng hồ chí minh",
        "options": {
            "A": "phải tu dưỡng đạo đức suốt đời",
            "B": "phải tu dưỡng đạo đức thường xuyên",
            "C": "phải tu dưỡng đạo đức hằng ngày",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đạo đức không bất biến; phải rèn luyện liên tục trong thực tiễn, kể cả khi đã có thành tích, để tránh suy thoái và chủ nghĩa cá nhân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 135-136.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Thực chất của giải phóng giai cấp theo tư tưởng Hồ Chí Minh là gì?",
        "options": {
            "A": "Xóa bỏ các giai cấp bóc lột với tính cách là giai cấp thống trị xã hội",
            "B": "Tiêu diệt cá nhân những con người thuộc các giai cấp bóc lột",
            "C": "Không chủ trương thủ tiêu giai cấp bóc lột thống trị xã hội",
            "D": "Xóa bỏ triệt tiêu các giai cấp thuộc về xã hội cũ"
        },
        "answer": "A",
        "explanation": "Giải phóng giai cấp xóa quan hệ áp bức, bóc lột và điều kiện tạo phân chia giai cấp; không phải tiêu diệt cá nhân thuộc giai cấp cũ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 137-138."
    },
    {
        "question": "Tư tưởng Hồ Chí Minh về cách mạng Việt Nam được hình thành về cơ bản trong thời kỳ nào?",
        "options": {
            "A": "Từ 1911 den 1920",
            "B": "Từ 1920 đến 1930",
            "C": "Từ 1921 đến 1930",
            "D": "Từ 1930 đến 1945"
        },
        "answer": "C",
        "explanation": "Từ cuối 1920 đến đầu 1930, Người chuẩn bị lý luận, tổ chức và Cương lĩnh, hình thành những nội dung cơ bản về con đường cách mạng Việt Nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-31."
    },
    {
        "question": "Trong tác phẩm \"Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân\" viết trên báo 1969, Hồ Chí Minh ví chủ nghĩa cá nhân như:",
        "options": {
            "A": "Bệnh mẹ",
            "B": "Bệnh nguy hiểm",
            "C": "Giặc ngoại xâm",
            "D": "Bệnh cần loại bỏ"
        },
        "answer": "A",
        "explanation": "Chủ nghĩa cá nhân là bệnh mẹ vì gây ra nhiều tiêu cực khác. Giáo trình dùng hình ảnh này khi phân tích nguyên nhân tiêu cực, nhưng chưa xác nhận nó là nguyên văn riêng của bài báo năm 1969 như câu hỏi nêu.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 65,92,135."
    },
    {
        "question": "Hồ Chí Minh cho rằng giai cấp địa chủ ở Việt Nam(NHUNG HOÀNG)",
        "options": {
            "A": "Là giai cấp phản động",
            "B": "Là giai cấp tiên tiến",
            "C": "Là giai cấp không hoàn toàn phản động",
            "D": ""
        },
        "answer": "C",
        "explanation": "Không đánh đồng mọi địa chủ: với trung, tiểu địa chủ chưa rõ phản cách mạng, có thể tranh thủ hoặc trung lập; phải phân biệt với lực lượng trực tiếp chống cách mạng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 49.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ chí minh cho rằng giai cấp địa chủ ở việt nam(NHUNG HOÀNG)",
        "options": {
            "A": "Là giai Cấp phản động",
            "B": "Là giai cấp tiên tiến",
            "C": "Có thể lợi dụng",
            "D": "Cần phải loại bỏ"
        },
        "answer": "C",
        "explanation": "Chính sách lực lượng có phân hóa: trung, tiểu địa chủ chưa phản cách mạng có thể được tranh thủ, ít nhất làm trung lập; không hiểu là lợi dụng vô điều kiện mọi địa chủ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 49."
    },
    {
        "question": "Theo hồ chí minh, ngoài lợi ích của giai cấp, của nhân dân và toàn thể dân tộc việt nam, đảng:",
        "options": {
            "A": "không còn lợi ích nào khác",
            "B": "còn vì lợi ích của mình",
            "C": "còn vì lợi ích của nhà nước",
            "D": "Còn vì lợi ích của cá nhân"
        },
        "answer": "A",
        "explanation": "Đảng không có mục đích tư lợi riêng, mọi đường lối và hoạt động phải hướng vào lợi ích nhân dân, dân tộc và sự nghiệp giải phóng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 73,78."
    },
    {
        "question": "Hồ Chí Minh lần đầu tiên đã đưa ra một định nghĩa về văn hoá trong tác phẩm nào?",
        "options": {
            "A": "\"Bản án chế độ thực dân Pháp\"",
            "B": "\"Đường Kách mệnh\"",
            "C": "\"Nhật ký trong tù\"",
            "D": "\"Sửa đổi lối làm việc\""
        },
        "answer": "C",
        "explanation": "Giáo trình xác định định nghĩa văn hóa được viết tháng 8/1943 trong nhà tù Tưởng Giới Thạch. Đoạn này không ghi tên tác phẩm Nhật ký trong tù; C giữ theo bộ câu hỏi, chưa xác nhận trực tiếp vị trí văn bản.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118.\nGhi chú trong tài liệu: (Hồ Chí Minh lần đầu tiên đưa ra định nghĩa văn hóa vào lúc nào? A. Vào thời gian Bác ở Pháp B. Vào thời điểm thành lập Đảng C. Vào thời gian đang ở nhà tủ của Tưởng Giối Thạch D. Vào thời điểm đọc Tuyên Ngôn Độc lập)"
    },
    {
        "question": "Trong quan điểm của hồ chí minh về bản chất của nhà nước có sự thống nhất giữa bản chất giai cấp công nhân với:",
        "options": {
            "A": "tính nhân dân và tính dân tộc",
            "B": "tính xã hội chủ nghĩa và tính dân tộc",
            "C": "tính nhân dân và tính xã hội chủ nghĩa",
            "D": ""
        },
        "answer": "A",
        "explanation": "Nhà nước mang bản chất công nhân nhưng đại diện, bảo vệ lợi ích toàn dân và dân tộc; ba thuộc tính thống nhất vì mục tiêu độc lập và hạnh phúc chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 82-83.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Quy luật ra đời của đảng được Hồ Chí Minh vạch ra",
        "options": {
            "A": "Là sự phát triển chủ nghĩa Mác- Lênin trong điều kiện Việt Nam",
            "B": "Là sự phát triển chủ nghĩa Mác- Lênin trong điều kiện thay đổi",
            "C": "Là sự phát triển chủ nghĩa Mác- Lênin trong điều kiện mới",
            "D": ""
        },
        "answer": "A",
        "explanation": "Bổ sung phong trào yêu nước phản ánh đặc điểm Việt Nam, phát triển lý luận chung về Đảng mà vẫn giữ nền tảng Mác-Lênin.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo quan điểm của Chủ tịch Hồ Chí Minh, nhà nước của dân là gì.",
        "options": {
            "A": "Quyền lực nhà nước thuộc về giai cấp nông dân",
            "B": "Quyền lực nhà nước thuộc về nhân dân lao động",
            "C": "Tất cả quyền lực của Nhà nước và trong xã hội đều thuộc về nhân dân",
            "D": "Quyền lực nhà nước thuộc về giai cấp công nhân"
        },
        "answer": "C",
        "explanation": "Nhà nước của dân xác định tất cả quyền lực nhà nước và xã hội thuộc nhân dân; cơ quan nhà nước không tự có quyền lực ngoài sự giao phó của dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83."
    },
    {
        "question": "Theo Hồ Chí Minh, để thực hiện được đoàn kết, cần xoá bỏ hết mọi thành kiến, cần phải (....) và giúp đỡ lẫn nhau cùng tiến bộ.",
        "options": {
            "A": "Nghiêm túc hợp tác",
            "B": "Thật thà hợp tác",
            "C": "Sẵn sàng hợp tác",
            "D": "Tích cực hợp tác"
        },
        "answer": "B",
        "explanation": "Đoàn kết lâu dài cần bỏ thành kiến, hợp tác thật thà và giúp nhau tiến bộ; không chỉ tuyên bố đoàn kết trong khi vẫn nghi ngờ, chia rẽ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 104."
    },
    {
        "question": "Hồ Chí Minh cho rằng khuyết điểm của thanh niên là",
        "options": {
            "A": "Chuộng hình thức",
            "B": "Chuộng tự do",
            "C": "Chuộng lợi",
            "D": "Chuộng bề ngoài"
        },
        "answer": "A",
        "explanation": "Giáo trình phê phán thiếu thực chất, đề cao tu dưỡng và trách nhiệm thực tế của sinh viên. Tuy nhiên chưa tìm thấy trực tiếp câu xác định chuộng hình thức là khuyết điểm của thanh niên, nên A cần kiểm tra nguồn trích.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 144-147."
    },
    {
        "question": "Tư tưởng Hồ Chí Minh Về cách mạng Việt Nam được xem là:",
        "options": {
            "A": "Hệ thống các quan điểm cụ thể Về cách mạng Việt Nam",
            "B": "Một nhóm các quan điểm cụ thể Về cách mạng Việt Nam",
            "C": "Một hệ thống các học thuyết Về cách mạng Việt Nam",
            "D": ""
        },
        "answer": "A",
        "explanation": "Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện, sâu sắc về cách mạng Việt Nam; các quan điểm phải được hiểu trong liên hệ thống nhất và quá trình vận dụng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 5,9-10.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Quá độ lên chủ nghĩa xã hội theo hồ chí minh là",
        "options": {
            "A": "Xóa bỏ toàn bộ những thành tựu của xã hội cũ",
            "B": "Kế thừa toàn bộ những gì xã hội cũ để lại",
            "C": "Kế thừa những giá trị của xã hội cũ",
            "D": ""
        },
        "answer": "C",
        "explanation": "Quá độ vừa cải tạo tàn tích lạc hậu vừa phát triển giá trị tích cực; không xóa sạch mọi thành tựu cũ cũng không kế thừa toàn bộ không chọn lọc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-65.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Mục đích của văn hóa theo Hồ Chí Minh đó là",
        "options": {
            "A": "Vì cuộc sống sinh tồn của loài người",
            "B": "Vì cuộc sống sinh tồn của nhân dân",
            "C": "Vì cuộc sống sinh tồn của cộng đồng",
            "D": ""
        },
        "answer": "A",
        "explanation": "Văn hóa do con người sáng tạo để đáp ứng đời sống và sinh tồn; mục đích ấy bao gồm cả nhu cầu vật chất, tinh thần và thích ứng môi trường sống.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Mục đích của văn hóa theo Hồ Chí Minh đó là (NHUNG HOÀNG)",
        "options": {
            "A": "Vì lẽ sinh tồn và mục đích của cuộc sống",
            "B": "Vì cuộc sống sinh tồn của nhân dân",
            "C": "Vì cuộc sống sinh tồn của cộng đồng",
            "D": "Để nâng cao chất lượng giáo dục"
        },
        "answer": "A",
        "explanation": "Định nghĩa văn hóa bắt đầu từ lẽ sinh tồn và mục đích cuộc sống, giải thích động cơ tạo ngôn ngữ, đạo đức, nghệ thuật và công cụ sinh hoạt.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118.\nGhi chú trong tài liệu: (Câu hỏi khác: Khi nói về nghĩa rộng của văn hóa, Hồ Chí Minh đã đề cập vì lí do gì mà con người sáng tạo ra các giá trị của văn hóa?)"
    },
    {
        "question": "Hồ Chí Minh được coi là linh hồn của cuộc kháng chiến chống Pháp trong giai đoạn nào? (073-356-8678)",
        "options": {
            "A": "1946-1954",
            "B": "1945-1954",
            "C": "1930-1945",
            "D": "1939-1945"
        },
        "answer": "A",
        "explanation": "Giáo trình xác định giai đoạn 1946-1954 Người lãnh đạo cuộc kháng chiến chống Pháp; tư tưởng phát triển qua kháng chiến và kiến quốc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 34-35."
    },
    {
        "question": "Nội dung quá độ lên chủ nghĩa xã hội theo Hồ Chí Minh phải tiến hành",
        "options": {
            "A": "Chủ yếu là lĩnh vực kinh tế",
            "B": "Chủ yếu là lĩnh vực văn hóa",
            "C": "Trên mọi mặt của xã hội",
            "D": ""
        },
        "answer": "C",
        "explanation": "Thời kỳ quá độ cải biến toàn diện chính trị, kinh tế, văn hóa và quan hệ xã hội, không chỉ thay đổi một lĩnh vực riêng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-63.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Quan điểm nào sau đây thuộc vấn đề tiêu chuẩn cán bộ theo tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Đạo đức cán bộ",
            "B": "Đạo đức cách mạng",
            "C": "Đạo đức lãnh đạo",
            "D": ""
        },
        "answer": "B",
        "explanation": "Cán bộ phải có cả đức và tài, trong đó đạo đức cách mạng là gốc, giúp sử dụng năng lực đúng mục tiêu phục vụ dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 79-81,124-126.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Quan điểm nào sau đây thuộc vấn đề tiêu chuẩn cán bộ theo tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Trung thành với Đảng",
            "B": "Trung thành với nhân dân",
            "C": "Trung thành với nhà nước",
            "D": ""
        },
        "answer": "A",
        "explanation": "Trung thành lý tưởng và đường lối của Đảng là yêu cầu cán bộ; phải thể hiện bằng hành động, năng lực và trách nhiệm, gắn trung thành lợi ích dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 79-81.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Quan điểm nào sau đây thuộc vấn đề tiêu chuẩn cán bộ theo tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Có năng lực tổ chức thực tiễn",
            "B": "Có năng lực tổ chức lãnh đạo",
            "C": "Có năng lực tổ chức chỉ huy",
            "D": ""
        },
        "answer": "A",
        "explanation": "Cán bộ cần tài để tổ chức thực hiện đường lối và giải quyết công việc; phẩm chất tốt phải kết hợp năng lực thực tiễn, không chỉ có kiến thức lý thuyết.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 79-81,86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Quan điểm nào sau đây thuộc vấn đề tiêu chuẩn cán bộ theo tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Liên hệ mật thiết với Đảng",
            "B": "Liên hệ mật thiết với nhân dân",
            "C": "Liên hệ mật thiết với mọi người",
            "D": ""
        },
        "answer": "B",
        "explanation": "Gắn bó, lắng nghe và học hỏi dân giúp cán bộ nắm thực tế, phục vụ đúng lợi ích dân; đó là yêu cầu phẩm chất và phương pháp công tác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-81.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, Mặt trận dân tộc thống nhất là nơi quy tụ mọi tổ chức và cá nhân yêu nước người Việt Nam, bao gồm cả những người:",
        "options": {
            "A": "Định cư ở nước ngoài",
            "B": "Đang sống ở các nước cùng Châu lục",
            "C": "Định cư ở các nước theo con đường xã hội chủ nghĩa",
            "D": "Các cá nhân thuộc tổ chức phi chính phủ"
        },
        "answer": "A",
        "explanation": "Mặt trận bao gồm người Việt Nam yêu nước cả trong và ngoài nước; nơi cư trú không loại trừ trách nhiệm và đóng góp với Tổ quốc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100,102."
    },
    {
        "question": "Cách mạng giải phóng dân tộc muốn giành được thắng lợi cần phải:",
        "options": {
            "A": "Tiến hành chủ động và sáng tạo",
            "B": "Dựa vào sự thắng lợi của cách mạng ở các nước thuộc địa khác.",
            "C": "Dựa vào thắng lợi của cách mạng vô sản ở chính quốc.",
            "D": "Tiến hành song hành với cách mạng vô sản ở chính quốc ."
        },
        "answer": "A",
        "explanation": "Cách mạng thuộc địa có sức mạnh và điều kiện riêng, có thể thắng trước chính quốc; vì vậy phải chủ động, tự lực và sáng tạo, không chờ bên ngoài.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 49-51."
    },
    {
        "question": "Hồ Chí Minh cho rằng: \"Người cách mạng phải có (....) làm nền tảng, mới hoàn thành được nhiệm vụ cách mạng vẻ vang\".",
        "options": {
            "A": "Trí tuệ",
            "B": "Phương pháp cách mạng",
            "C": "Đạo đức cách mạng",
            "D": "Ý chí cách mạng"
        },
        "answer": "C",
        "explanation": "Đạo đức tạo động cơ đúng, sức bền và niềm tin của dân; nhiệm vụ cách mạng khó khăn đòi hỏi nền tảng ấy để hoàn thành.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 124-125."
    },
    {
        "question": "Hồ Chí Minh lưu ý(NHUNG HOÀNG)",
        "options": {
            "A": "Đảng cầm quyền, Đảng lãnh đạo để cho dân làm chủ",
            "B": "Đảng cầm quyền, Đảng lãnh đạo để cho dân quản lý",
            "C": "Đảng cầm quyền, Đảng lãnh đạo để cho dân giám sát",
            "D": ""
        },
        "answer": "A",
        "explanation": "Sự lãnh đạo của Đảng nhằm bảo đảm quyền lực thuộc dân, dân được thực hiện quyền làm chủ; không biến vai trò cầm quyền thành đặc quyền của tổ chức hay cán bộ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 55,82-86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, đặc điểm của cách mạng tư sản là:",
        "options": {
            "A": "Độc lập dân tộc",
            "B": "Đấu tranh giải phóng dân tộc thuộc địa",
            "C": "Không đến nơi",
            "D": "Xây dựng nhà nước công nông"
        },
        "answer": "C",
        "explanation": "Cách mạng tư sản vẫn để tồn tại áp bức, bóc lột người lao động; không giải phóng triệt để nên được đánh giá là không đến nơi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-47."
    },
    {
        "question": "Chủ trương \"Ỳ Pháp cầu tiến bộ\", \"khai dân trí chấn dân khí, hậu dân sinh\" là đường lối của nhà yêu nước nào?",
        "options": {
            "A": "Phan Châu Trinh",
            "B": "Phan Bội Châu",
            "C": "Hoàng Hoa Thám",
            "D": "Hồ Chí Minh"
        },
        "answer": "A",
        "explanation": "Phan Châu Trinh theo khuynh hướng cải cách, dựa Pháp để nâng dân trí, dân khí, dân sinh. Giáo trình nêu phong trào của ông nhưng chưa chép đủ khẩu hiệu trong câu hỏi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 19-20,29."
    },
    {
        "question": "Theo Hồ Chí Minh, trình độ văn hóa của nhân dân nâng cao sẽ giúp cho chúng ta đẩy mạnh công cuộc gì? Chọn phương án chính xác nhất",
        "options": {
            "A": "Khôi phục kinh tế",
            "B": "Khôi phục kinh tế, phát triển dân chủ",
            "C": "Phát triển dân chủ",
            "D": "Khôi phục văn hóa"
        },
        "answer": "B",
        "explanation": "Nâng dân trí giúp dân hiểu và thực hiện quyền làm chủ, nâng năng lực lao động; văn hóa hỗ trợ cả phát triển dân chủ và kinh tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 58,119,122."
    },
    {
        "question": "Hồ Chí Minh viết",
        "options": {
            "A": "Một Đảng mà giấu giếm khuyết điểm của mình là một đảng hỏng",
            "B": "Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải xóa bỏ",
            "C": "Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải thay thế",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giấu khuyết điểm làm mất khả năng sửa chữa và tiến bộ; Đảng phải nhận lỗi, không sợ phê bình, tự chỉnh đốn để giữ uy tín và sức mạnh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 80.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Đâu là đáp án chính xác nhất về Đảng theo tư tưởng Hồ Chí Minh? A. Một Đảng mà giấu giếm khuyết điểm của mình là một đảng hỏng B. Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải xóa bỏ C. Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải thay thế D. Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải thay đổi)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong thời gian ở nước ngoài, Nguyễn Tất Thành đã làm những công việc gì?(NHUNG HOÀNG)",
        "options": {
            "A": "Đốt lò, bán báo",
            "B": "Thợ ảnh, làm bánh",
            "C": "Phụ bếp, cào tuyết",
            "D": "Tất cả các công việc"
        },
        "answer": "D",
        "explanation": "Trải nghiệm lao động và sống ở nhiều nước giúp Người hiểu người lao động và chủ nghĩa thực dân. PDF không liệt kê đầy đủ mọi nghề trong A, B, C, nên chưa xác nhận từng công việc riêng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 27,29-30."
    },
    {
        "question": "Theo văn kiện Đại hội XI của Đảng Cộng sản Việt Nam (2011), Tư tưởng Hồ Chí Minh là tư tưởng về:",
        "options": {
            "A": "Những vấn đề cơ bản của cách mạng Việt Nam",
            "B": "Những vấn đề cơ bản của cách mạng thế giới",
            "C": "Những vấn đề cơ bản của dân tộc",
            "D": "Những vấn đề cơ bản của nhân loại"
        },
        "answer": "A",
        "explanation": "Định nghĩa Đại hội XI xác định phạm vi là những vấn đề cơ bản của cách mạng Việt Nam; đó là hệ thống quan điểm toàn diện, sâu sắc chứ không một vấn đề đơn lẻ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 5."
    },
    {
        "question": "Quan điểm: \"Đảng Cộng sản Việt Nam lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động\" được nêu lần đầu tiên trong văn kiện của Đại hội đại biểu toàn quốc lần thứ mấy của Đảng?",
        "options": {
            "A": "Đại hội đại biểu toàn quốc lần thứ VI",
            "B": "Đại hội đại biểu toàn quốc lần thứ VII",
            "C": "Đại hội đại biểu toàn quốc lần thứ IX",
            "D": "Đại hội đại biểu toàn quốc lần thứ XI"
        },
        "answer": "B",
        "explanation": "Giáo trình xác định Đại hội VII năm 1991 là mốc Đảng nêu lấy Mác-Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 8."
    },
    {
        "question": "Nguyên tắc cơ bản trong nghiên cứu tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Thống nhất giữa lí luận gắn liền và thực tiễn",
            "B": "Thống nhất giữa tính Đảng và tính thực tiễn",
            "C": "Thống nhất giữa tính khoa học và thực tiễn",
            "D": "Quan điểm gắn liền với thực tiễn"
        },
        "answer": "A",
        "explanation": "Lý luận định hướng hoạt động, thực tiễn kiểm nghiệm và bổ sung lý luận; nghiên cứu tư tưởng phải giữ hai mặt thống nhất, tránh lý luận suông hoặc kinh nghiệm chủ nghĩa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 11-12."
    },
    {
        "question": "Đâu là chuẩn mực đạo đức cách mạng trong tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Cần, kiệm, liêm, chính, chí công vô tư.",
            "B": "Cần, kiệm, liêm, chính, sáng suốt.",
            "C": "Cần, kiệm, liêm, chính, tự do.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Cần, kiệm, liêm, chính, chí công vô tư là nhóm chuẩn mực gắn công việc và đời sống hằng ngày, hướng hành vi vào lợi ích chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 128-130.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Đoạn viết dưới đây ghi tóm tắt lời giải thích của Hồ Chí Minh về cần, kiệm, liêm, chính. Hỏi: Điểm tóm tắt nào đã bị ghi nhầm nội dung? A. Cần là lao động cần cù, siêng năng, lao động có kế hoạch, sáng tạo và có năng suất lao động cao... B. Kiệm là không xa xỉ, không hoang phí, không bừa bãi... C. Liêm là luôn tôn trọng của công và của dân, không tham tiền của, địa vị, danh tiếng. D. Chính là trong sạch, không tham lam đồng xu, hạt thóc của nhà nước, của dân.)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là chuẩn mực đạo đức cách mạng trong tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Thương yêu con người, sống có tình nghĩa",
            "B": "Thương yêu con người, sống có lý",
            "C": "Thương yêu con người, sống có trách nhiệm",
            "D": ""
        },
        "answer": "A",
        "explanation": "Thương yêu con người phải thể hiện bằng hành động, tôn trọng quyền và giúp người tiến bộ; không chỉ là tình cảm chung hoặc lời nói.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 130-131.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là chuẩn mực đạo đức cách mạng trong tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Có tinh thần quốc tế trong sáng",
            "B": "Có tinh thần quốc tế cao đẹp",
            "C": "Có tinh thần quốc tế chân chính",
            "D": ""
        },
        "answer": "A",
        "explanation": "Quốc tế trong sáng là đoàn kết, tôn trọng và giúp nhân dân các nước vì hòa bình, độc lập, tiến bộ, chống hẹp hòi và phân biệt dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 131-132.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Cụ Hoàng Thị Loan đã có đức tính gì ảnh hưởng tới Hồ Chí Minh?",
        "options": {
            "A": "Lòng nhân hậu và mẫn cảm",
            "B": "Sự yêu thương và vị tha",
            "C": "Tần tào và đảm đang",
            "D": "Từ bi và vị tha"
        },
        "answer": "A",
        "explanation": "Giáo trình ghi trực tiếp tấm lòng nhân hậu, mẫn cảm và nếp sống tần tảo, nhân đức của Hoàng Thị Loan ảnh hưởng sâu sắc các con.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 28."
    },
    {
        "question": "Phẩm chất nào dưới đây không có trong nhân tố chủ quan dẫn đến hình thành tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Một trái tim yêu nước thương dân, sẵn sàng chịu đựng hy sinh",
            "B": "Tư duy độc lập, tự chủ, sáng tạo, đầu óc phê phán tình tường, sáng suốt",
            "C": "Bản lĩnh kiên định, luôn tin vào nhân dân, khiêm tốn, bình dị, ham học hỏi",
            "D": "Ham công danh, phú quý"
        },
        "answer": "D",
        "explanation": "Phẩm chất chủ quan là lý tưởng cứu nước, tư duy độc lập, sáng tạo và năng lực thực tiễn; ham công danh, phú quý trái mục tiêu phục vụ dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 26-28."
    },
    {
        "question": "Lực lượng làm nền tảng cho khối đại đoàn kết dân tộc theo tư tưởng Hồ Chí Minh là",
        "options": {
            "A": "Công nhân",
            "B": "Công nhân, nông dân",
            "C": "Học trò, nhà buôn",
            "D": "Công nhân, nông dân, lao động trí óc"
        },
        "answer": "D",
        "explanation": "Công nhân, nông dân và trí thức là nền tảng của đại đoàn kết; nền tảng vững cho phép tập hợp thêm các lực lượng yêu nước khác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100,103."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam là đảng",
        "options": {
            "A": "Của xã hội",
            "B": "Của nhân dân lao động và của dân tộc",
            "C": "Của dân, do dân và vì dân",
            "D": ""
        },
        "answer": "B",
        "explanation": "Đảng mang bản chất công nhân nhưng lợi ích công nhân thống nhất lợi ích nhân dân và dân tộc; vì vậy không chỉ phục vụ riêng người xuất thân công nhân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48,72-73.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "\"Tinh thần yêu nước chân chính khác hẳn với tinh thần \"vị quốc\" của bọn đế quốc phản động. Nó là một bộ phận của tỉnh thần quốc tế\" là câu nói được Hồ Chí Minh khẳng định trong Báo cáo chính trị của Đại hội đại biểu toàn quốc lần thứ mấy",
        "options": {
            "A": "Lần thứ I",
            "B": "Lần thứ II",
            "C": "Lần thứ III",
            "D": "Lần thứ IV"
        },
        "answer": "B",
        "explanation": "Giáo trình giải thích yêu nước chân chính gắn quốc tế vô sản, không phải vị kỷ của đế quốc. Đoạn này chưa dẫn nguyên văn câu kèm tên báo cáo; đáp án Đại hội II cần đối chiếu thêm nguồn trích.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48,107,131-132.\nGhi chú trong tài liệu: ( tháng 2 năm 1951)"
    },
    {
        "question": "Hồ Chí Minh chỉ ra căn bệnh nguy hiểm nhất đối với cán bộ nhà nước là gì?",
        "options": {
            "A": "Chủ nghĩa cá nhân",
            "B": "Tham ô, lãng phí",
            "C": "Kéo bè kéo cánh",
            "D": "Lợi ích cá nhân"
        },
        "answer": "A",
        "explanation": "Chủ nghĩa cá nhân là nguyên nhân chủ quan sinh nhiều tiêu cực, làm cán bộ dùng quyền để tư lợi; vì vậy phải chống từ gốc cùng với hoàn thiện cơ chế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 65,92."
    },
    {
        "question": "Để có thể tận dụng thời cơ, vượt qua thách thức, trên cơ sở nhận thức và vận dụng sáng tạo tư tưởng Hồ Chí Minh, cần tập trung vào vấn đề nào?(NHUNG HOÀNG)",
        "options": {
            "A": "Kiên định phương pháp cách mạng",
            "B": "Kiên định cách mạng",
            "C": "Kiên định theo chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh",
            "D": "Kiên định con đường xây dựng đất nước"
        },
        "answer": "C",
        "explanation": "Vận dụng sáng tạo trong hoàn cảnh mới vẫn phải kiên định nền tảng và mục tiêu; không dao động về lý tưởng cũng không sao chép cách làm cũ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 8-9,67-69."
    },
    {
        "question": "Hồ Chí Minh cho rằng(NHUNG HOÀNG)",
        "options": {
            "A": "Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sinh tồn",
            "B": "Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sống còn",
            "C": "Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự trường tồn",
            "D": ""
        },
        "answer": "A",
        "explanation": "Định nghĩa văn hóa theo nghĩa rộng bao gồm sáng tạo và phương thức sinh hoạt đáp ứng đời sống, sinh tồn; không thu hẹp thành riêng nghệ thuật hay học vấn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nguyễn Tất Thành ở Anh vào thời gian nào?",
        "options": {
            "A": "1911-1912",
            "B": "1912-1913",
            "C": "1914-1917",
            "D": "1911-1915"
        },
        "answer": "C",
        "explanation": "Giáo trình khái quát hành trình ở nhiều nước giai đoạn 1911-1917 nhưng không ghi riêng khoảng ở Anh 1914-1917. Mốc C chưa thể xác nhận trực tiếp bằng PDF này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29-30."
    },
    {
        "question": "Hồ Chí Minh dạy học ở trường Dục Thanh - Phan Thiết trong khoảng thời gian nào?",
        "options": {
            "A": "Năm 1909 - 1910",
            "B": "Năm 1909 - 1911",
            "C": "Năm 1908 - 1909",
            "D": "Năm 1910 - 1911"
        },
        "answer": "D",
        "explanation": "Giáo trình xác nhận Người dạy ở Dục Thanh trước khi ra đi năm 1911 và nói hoạt động năm 1910; đoạn này không ghi trọn khoảng thời gian 1910-1911 theo dạng của đề.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 28-29."
    },
    {
        "question": "Theo Hồ Chí Minh, những tiêu cực của đội ngũ cán bộ trong hoạt động của bộ máy nhà nước là:",
        "options": {
            "A": "Đặc quyền, đặc lợi.",
            "B": "Tham ô, lãng phí, quan liêu.",
            "C": "Tư túng, chia rẽ, kiêu ngạo.",
            "D": "Tất cả các phương án."
        },
        "answer": "D",
        "explanation": "Đặc quyền, tham ô, lãng phí, quan liêu, tư túng, chia rẽ và kiêu ngạo đều làm bộ máy xa dân, suy thoái; D tổng hợp các nhóm tiêu cực.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 91-93."
    },
    {
        "question": "Câu nói của Hồ Chí Minh \"Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công đại thành cũng\" đó là cần phải đoàn kết ở đâu?",
        "options": {
            "A": "Đoàn kết trong đảng, đoàn kết dân tộc và đoàn kết quốc tế",
            "B": "Đoàn kết trong đảng, đoàn kết quân đội và đoàn kết dân tộc",
            "C": "Đoàn kết dân tộc, đoàn kết tôn giáo tín ngưỡng và đồng bào ngoài nước",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đoàn kết nội bộ Đảng tạo nền tảng đoàn kết dân tộc, kết hợp với đoàn kết quốc tế để tăng sức mạnh tổng hợp; không chỉ một phạm vi riêng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77,99,106-112.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Một nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ theo tư tưởng Hồ Chí Minh phải là:",
        "options": {
            "A": "Một nhà nước hợp hiến.",
            "B": "Một nhà nước thống nhất, có chủ quyền quốc gia.",
            "C": "Một nhà nước của dân, do dân, vì dân.",
            "D": "Một nhà nước không có tiêu cực, không có đặc quyền đặc lợi."
        },
        "answer": "A",
        "explanation": "Tổng tuyển cử, hiến pháp và thiết chế hợp pháp tạo cơ sở cho quyền lực nhà nước; hợp hiến là yêu cầu nền tảng, nhưng còn phải thực thi pháp luật nghiêm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86-88."
    },
    {
        "question": "Theo Hồ Chí Minh, không phải mọi con người đêu trở thành động lực, mà phải là những con người như thế nào?",
        "options": {
            "A": "Được giác ngộ và tổ chức",
            "B": "Có đạo đức",
            "C": "Có năng lực",
            "D": "Có trình độ và hiểu biết"
        },
        "answer": "A",
        "explanation": "Lực lượng con người phát huy khi hiểu mục tiêu và được tổ chức hành động; sự giác ngộ và tổ chức biến tiềm năng thành động lực thực tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99,102,138-140."
    },
    {
        "question": "Hồ Chí Minh cho rằng thầy cô giáo trong chế độ ta cần phải góp phần vào:",
        "options": {
            "A": "Công cuộc xây dựng XHCN",
            "B": "Công cuộc kháng chiến chống mỹ cứu nước",
            "C": "Công cuộc xây dựng xã hội mới",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo dục đào tạo lớp người có đạo đức, kiến thức và năng lực làm chủ, góp phần xây dựng xã hội mới; giáo viên giữ vai trò trực tiếp trong nhiệm vụ ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 122,138-140.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Điểm giống trong tư tưởng về xây dựng nhà nước của Hồ Chí Minh và các bậc tiền nhân trong lịch sử là:",
        "options": {
            "A": "Dựa vào dân",
            "B": "Dựa vào bạo lực vũ trang",
            "C": "Dựa vào đạo đức cách mạng",
            "D": "Dựa vào tài năng, trí tuệ, phán đoán"
        },
        "answer": "A",
        "explanation": "Tư tưởng dựa dân kế thừa truyền thống dân là gốc; Hồ Chí Minh phát triển thành quyền làm chủ và nhà nước phục vụ dân, không chỉ dựa dân để củng cố quyền người cầm quyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 102,127-128."
    },
    {
        "question": "Nguyễn Ái Quốc đến Liên Xô lần đầu tiên học tại trường nào?",
        "options": {
            "A": "Trường quốc tế Lênin",
            "B": "Đại học Phương Đông",
            "C": "Viện nghiên cứu các vấn đề dân tộc và thuộc địa",
            "D": "Đại học Liên Xô"
        },
        "answer": "B",
        "explanation": "PDF trình bày hoạt động ở Liên Xô và Quốc tế Cộng sản nhưng chưa xác nhận trực tiếp tên trường trong lần đầu tới Liên Xô. B giữ theo bộ câu hỏi và cần thêm tư liệu tiểu sử.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-33."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, Quản lý nhà nước là quản lý bằng bộ máy, bằng pháp luật và bằng nhiều biện pháp khác nhau trong đó quan trọng bậc nhất là:",
        "options": {
            "A": "Hiến pháp",
            "B": "Quyền lực",
            "C": "Mệnh lệnh",
            "D": "Hình phạt"
        },
        "answer": "A",
        "explanation": "Hiến pháp tạo nền tảng pháp lý cao nhất cho tổ chức và quyền lực nhà nước; quản lý phải căn cứ hiến pháp và toàn bộ hệ thống pháp luật, không chỉ mệnh lệnh hay hình phạt.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86-88."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc:",
        "options": {
            "A": "Là vấn đề cơ bản quyết định thành công của cách mạng.",
            "B": "Là vấn đề có ý nghĩa sách lược, quyết định thành công của cách mạng.",
            "C": "Là vấn đề cơ bản có ý nghĩa chiến lược, quyết định thành công của cách mạng.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Đại đoàn kết là chiến lược nhất quán, quyết định thành bại trong mọi giai đoạn; phương pháp có thể thay đổi nhưng chủ trương không thể bị xem là sách lược tạm thời.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98.\nGhi chú trong tài liệu: (Hồ Chí Minh đã khẳng định vị trí, vai trò của đại đoàn kết toàn dân tộc như thế nào? A. Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng B. Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa sống còn, quyết định thành công cách mạng C. Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa lịch sử, quyết định thành công của cách mạng D. Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa đặc biệt quan trọng, quyết định thành công của cách)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Văn kiện nào của Đảng Lao động Việt Nam đã khẳng định: \"Dân tộc ta, nhân dân ta, non sông đất nước ta đã sinh ra Hồ Chủ Tịch, người anh hùng dân tộc vĩ đại, và chính Người đã làm rạng rỡ dân tộc ta, nhân dân ta và non sông đất nước ta\"?",
        "options": {
            "A": "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ II của Đảng",
            "B": "Điếu văn của Ban Chấp hành Trung ương Đảng Lao động Việt Nam tại Lễ Truy điệu Chủ tịch Hồ Chí Minh",
            "C": "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ VI của Đảng",
            "D": "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ VII của Đảng"
        },
        "answer": "B",
        "explanation": "Giáo trình dẫn Điếu văn của Ban Chấp hành Trung ương Đảng sau khi Người qua đời, tôn vinh mối liên hệ giữa dân tộc và sự nghiệp Hồ Chí Minh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 7."
    },
    {
        "question": "Khẩu hiệu Tự do - Bình đẳng - Bác Ái ra đời ở đâu?",
        "options": {
            "A": "Đại cách mạng Pháp",
            "B": "Cách mạng Tân Hợi của Tôn Trung Sơn",
            "C": "Cải cách Minh Trị - Nhật Bản",
            "D": "Phong trào Duy Tân của Phan Châu Trinh"
        },
        "answer": "A",
        "explanation": "Giáo trình gắn khẩu hiệu Tự do-Bình đẳng-Bác ái với Đại Cách mạng Pháp năm 1789; Người quan tâm tìm hiểu từ thời học tiểu học.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam mang bản chất gì?(NHUNG HOÀNG)",
        "options": {
            "A": "Mang bản chất giai cấp công nhân, dân tộc",
            "B": "Mang bản chất giai cấp công nhân, nhân dân lao động và dân tộc",
            "C": "Mang bản chất giai cấp công nhân, con người",
            "D": "Mang bản chất giai cấp công nhân"
        },
        "answer": "D",
        "explanation": "Bản chất công nhân thể hiện qua nền tảng Mác-Lênin, mục tiêu và nguyên tắc của Đảng; thống nhất với vai trò đại diện nhân dân và dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72,75."
    },
    {
        "question": "Tìm phương án sai(NHUNG HOÀNG) Khái niệm tư tưởng Hồ Chí Minh mà Đại hội IX (2001) nêu lên bao gồm:",
        "options": {
            "A": "Bản chất cách mạng và khoa học của tư tưởng Hồ Chí Minh",
            "B": "Nguồn gốc tư tưởng, lý luận của tư tưởng Hồ Chí Minh",
            "C": "Nội dung tư tưởng Hồ Chí Minh",
            "D": "Kết cấu tư tưởng Hồ Chí Minh"
        },
        "answer": "D",
        "explanation": "Khái niệm nêu bản chất, nội dung, nguồn gốc và giá trị của tư tưởng; không trình bày một kết cấu chi tiết của toàn bộ hệ thống, nên D không thuộc cách khái quát ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 5-8."
    },
    {
        "question": "Theo Hồ Chí Minh, xây dựng khối đại đoàn kết toàn dân để tập hợp lực lượng, không được phép bỏ sót một lực lượng nào miễn không là Việt gian, không phản bội lại quyền lợi của dân chúng phải:(NHUNG HOÀNG)",
        "options": {
            "A": "Đứng vững trên lập trường nhân dân lao động, giải quyết hài hoà mối quan hệ giai cấp - dân tộc.",
            "B": "Đứng vững trên lập trường giai cấp nông dân, giải quyết hài hoà mối quan hệ giai cấp - dân tộc.",
            "C": "Đứng vững trên lập trường giai cấp công nhân, giải quyết hài hoà mối quan hệ giai cấp - dân tộc.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Giáo trình yêu cầu đứng trên lập trường công nhân, giải quyết hài hòa giai cấp-dân tộc và không bỏ người trung thành lợi ích Tổ quốc, nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo Hồ Chí Minh, xãy dựng khối đại đoàn kết toàn dẫn phải đũng vũng trên lập trường nào? A. Lập trường giai cấp công nhân, giải quyết hài hòa mỗi quan hệ giai cấp - dân tộc B. Lập trường giai cấp tư sản, ứu tiên đấu tranh giai cấp C. Lập trường giai cấp nông dân, ưu tiên đấu tranh ruộng đất D. Lập trường trí thức, ưu tiên phát triển khoa học công nghệ)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong các luận điểm sau, luận điểm nào là của Hồ Chí Minh?",
        "options": {
            "A": "Vô sản tất cả các nước, đoàn kết lại",
            "B": "Vô sản tất cả các nước và các dân tộc bị áp bức đoàn kết lại",
            "C": "Vô sản tất cả các nước liên hiệp lại",
            "D": "Lao động tất cả các nước, đoàn kết lại"
        },
        "answer": "D",
        "explanation": "Tinh thần đoàn kết người lao động toàn thế giới phù hợp nội dung quốc tế vô sản, nhưng PDF không ghi nguyên văn khẩu hiệu này cùng tên tác giả; D chưa được xác nhận trực tiếp từ giáo trình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 108,131-132."
    },
    {
        "question": "Vận dụng tư tưởng Hồ Chí Minh cần phải nắm vững nguyên tắc:",
        "options": {
            "A": "Quan điểm lịch sử thế giới",
            "B": "Quan điểm lịch sử Việt Nam",
            "C": "Quan điểm lịch sử cụ thể",
            "D": "Quan điểm lịch sử toàn diện"
        },
        "answer": "C",
        "explanation": "Phải xem tư tưởng trong điều kiện hình thành, phát triển và nhiệm vụ cụ thể; bỏ bối cảnh hoặc áp dụng máy móc sẽ hiểu và vận dụng sai.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 12-13."
    },
    {
        "question": "Để tăng cường tính nghiêm minh của pháp luật đi đôi với đẩy mạnh giáo dục đạo đức cách mạng, Hồ Chí Minh đã kết kết hợp nhuần nhuyễn giữa:",
        "options": {
            "A": "\"đức trị\" và \"pháp trị\".",
            "B": "\"nhân trị\" và \"pháp trị\".",
            "C": "\"pháp trị\" và \"tiền lệ\".",
            "D": "\"đức trị\" và \"tiền lệ\"."
        },
        "answer": "A",
        "explanation": "Đức trị giáo dục động cơ, phẩm chất; pháp trị tạo quy tắc và chế tài. Kết hợp hai mặt giúp pháp luật nghiêm mà nhân văn, đạo đức đi vào thực tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 89-90,93."
    },
    {
        "question": "Câu nói \"Đồng bào Nam Bộ là dân nước Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi được Bắc trong tác phẩm nào?",
        "options": {
            "A": "Thư gửi đồng bảo Nam Bộ",
            "B": "Nam kỳ tự trị",
            "C": "Bức thư gửi đồng chí Lê Duẩn",
            "D": "Thành đồng tổ quốc"
        },
        "answer": "A",
        "explanation": "Giáo trình dẫn Thư gửi đồng bào Nam Bộ khi khẳng định Nam Bộ thuộc Việt Nam; câu nói nhấn mạnh độc lập phải gắn thống nhất, toàn vẹn lãnh thổ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 45."
    },
    {
        "question": "Hồ Chí Minh mất bao nhiêu năm bôn ba nước ngoài để tìm đường cứu nước?",
        "options": {
            "A": "10 năm",
            "B": "25 năm",
            "C": "30 năm",
            "D": "35 năm"
        },
        "answer": "C",
        "explanation": "Từ ra đi tháng 6/1911 đến về nước tháng 1/1941 là gần 30 năm; con số 30 trong đề là cách tính khái quát hành trình hoạt động ở nước ngoài.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29,33."
    },
    {
        "question": "Hồ Chí Minh yêu cầu: \"phải phát huy hết ..., phải lột cho hết tinh thần dân tộc, để cổ vũ cho đồng bào ta, để giáo dục cho con cháu ta\"",
        "options": {
            "A": "Cốt cách dân tộc",
            "B": "Hồn cốt dân tộc",
            "C": "Văn hóa dân tộc",
            "D": "Truyền thống dân tộc"
        },
        "answer": "A",
        "explanation": "Cốt cách dân tộc là gốc của văn hóa và cần được phát huy trong giao lưu, giáo dục; PDF ủng hộ nội dung A nhưng không chép nguyên văn toàn bộ câu điền này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 119-121."
    },
    {
        "question": "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa Mác là gì?",
        "options": {
            "A": "Bản chất cách mạng",
            "B": "Chủ nghĩa nhân đạo triệt để",
            "C": "Phương pháp làm việc biện chứng",
            "D": "Bản chất khoa học"
        },
        "answer": "C",
        "explanation": "Mác-Lênin cung cấp thế giới quan, phương pháp luận biện chứng và khoa học để phân tích thực tế. Chưa tìm thấy câu đánh giá ưu điểm lớn nhất nguyên văn, nên C được liên hệ về phương pháp, không coi là trích dẫn trực tiếp.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 10,25-26."
    },
    {
        "question": "Luận điểm sáng tạo của Hồ Chí Minh về cách mạng thuộc địa dựa trên cơ sở nào?",
        "options": {
            "A": "Tinh thần đấu tranh cách mạng của các dân tộc ở các nước thuộc địa",
            "B": "Tinh thần đấu tranh của giai cấp vô sản ở chính quốc",
            "C": "Sự thức tỉnh của các dân tộc thuộc địa",
            "D": "Thuộc địa là khâu yếu nhất trong sợi dây xích của chủ nghĩa đế quốc"
        },
        "answer": "A",
        "explanation": "Nhân dân thuộc địa có tinh thần và tiềm năng đấu tranh lớn, không phụ thuộc thụ động vào chính quốc; cơ sở ấy cho phép cách mạng thuộc địa thắng trước.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 50-51."
    },
    {
        "question": "Hồ Chí Minh cho rằng bản chất của Pháp và Nhật:",
        "options": {
            "A": "Chẳng khác gì nhau",
            "B": "Khác nhau",
            "C": "Rất đặc biệt",
            "D": ""
        },
        "answer": "A",
        "explanation": "Pháp và Nhật đều là lực lượng thống trị, xâm lược cần chống; giáo trình trình bày sự thay đổi đối tượng trực tiếp theo hoàn cảnh nhưng không dẫn nguyên văn câu chẳng khác gì nhau.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 19-22,33-34.\nGhi chú trong tài liệu: (Khi so sánh vẽ bản chất của Nhật và Pháp, Hồ chí Minh nhận định như thế nào? A. Chẳng khác gì nhau B. Khác nhau C. Rất đặc biệt D. Giống nhau)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nguyễn Ái Quốc gửi bản \"Bản yêu sách của nhân dân An Nam\" tới Hội nghị Vécxây, đòi chính phủ Pháp thừa nhận các quyền tự do, dân chủ và bình đẳng của nhân dân Việt Nam vào thời gian nào?(NHUNG HOÀNG)",
        "options": {
            "A": "6/1917",
            "B": "6/1918",
            "C": "6/1919",
            "D": "6/1920"
        },
        "answer": "C",
        "explanation": "Bản Yêu sách của nhân dân An Nam gửi ngày 18/6/1919 tới Hội nghị Vécxây; vì vậy tháng 6/1919 là mốc đúng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29,42."
    },
    {
        "question": "Theo Hồ Chí Minh, trong Nhà nước vì dân, từ Chủ tịch nước đến công chức bình thường đều phải làm công bộc, làm đầy tớ cho nhân dân chứ không phải làm: (NHUNG HOÀNG)",
        "options": {
            "A": "Tướng",
            "B": "Quan",
            "C": "Quan cách mạng",
            "D": "Trâu, ngựa"
        },
        "answer": "C",
        "explanation": "Cán bộ nhận quyền từ dân và phục vụ dân; tự coi mình là quan cách mạng, đứng trên dân là lạm quyền, trái quan hệ dân chủ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 84,86."
    },
    {
        "question": "Theo Hồ Chí Minh, chủ nghĩa xã hội phải do :",
        "options": {
            "A": "Nhân dân lao động làm chủ",
            "B": "Giai cấp công nhân làm chủ",
            "C": "Giai cấp nông dân làm chủ",
            "D": ""
        },
        "answer": "A",
        "explanation": "Nhân dân lao động là người chủ của xã hội mới, tự xây dựng xã hội dưới sự lãnh đạo của Đảng; không chỉ là người làm thuê cho giai cấp bóc lột.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53,55,57.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, con người Việt Nam trong thời đại mới phải có:",
        "options": {
            "A": "3 phẩm chất cơ bản",
            "B": "4 phẩm chất cơ bản",
            "C": "5 phẩm chất cơ bản",
            "D": "6 phẩm chất cơ bản"
        },
        "answer": "B",
        "explanation": "Bốn nhóm chuẩn mực là trung-hiếu; cần kiệm liêm chính, chí công vô tư; thương yêu con người; quốc tế trong sáng. Chúng không đồng nhất với ba nguyên tắc tu dưỡng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 127-132."
    },
    {
        "question": "Nguyễn Tất Thành ở Mỹ vào thời gian nào?",
        "options": {
            "A": "1911-1912",
            "B": "1912-1913",
            "C": "1914-1917",
            "D": "1911-1915"
        },
        "answer": "B",
        "explanation": "PDF khái quát quá trình làm việc và khảo nghiệm ở nhiều nước nhưng chưa ghi trực tiếp khoảng ở Mỹ 1912-1913. Không thể xác nhận mốc B chỉ bằng giáo trình này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29-30."
    },
    {
        "question": "Hồ Chí Minh quân tâm mối quan hệ với Trung Quốc trên tinh thần.",
        "options": {
            "A": "\"Vừa là đồng chí, vừa là đồng đội\"",
            "B": "\"Vừa là đồng đội, vừa là đồng chí\".",
            "C": "\"Vừa là đồng chí, vừa là anh em\".",
            "D": ""
        },
        "answer": "C",
        "explanation": "Giáo trình nêu củng cố hữu nghị, hợp tác với Trung Quốc, một nước láng giềng có quan hệ lâu đời; chưa dẫn nguyên văn cụm vừa đồng chí, vừa anh em trong câu hỏi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 110.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, nhà nước do dân thể hiện ở chỗ:",
        "options": {
            "A": "Do nhân dân quyết định",
            "B": "Do nhân dân chi phối",
            "C": "Do nhân dân áp đặt",
            "D": "Do nhân dân kiểm soát"
        },
        "answer": "D",
        "explanation": "Dân có quyền giám sát, phê bình và bãi miễn đại biểu không xứng đáng; kiểm soát quyền lực là biểu hiện dân làm chủ, không chỉ bầu bộ máy rồi giao toàn quyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 84-85,90-91."
    },
    {
        "question": "Theo Hồ Chí Minh, xây dựng đạo đức mới, trước hết là thực hành đạo đức cách mạng, thực hành.....",
        "options": {
            "A": "Chí công vô tư",
            "B": "Cần kiệm liêm chính",
            "C": "Trung với nước, hiếu với dân",
            "D": "Cần, kiệm, liêm, chính, chí công vô tư"
        },
        "answer": "D",
        "explanation": "Nhóm đức tính này gắn hành vi hằng ngày: lao động, tiết kiệm, trong sạch, ngay thẳng và công tâm; thực hành chúng hướng công việc về lợi ích chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 128-130."
    },
    {
        "question": "Nội dung nào không đúng về giá trị lý luận và thực tiễn của Tư tưởng Hồ Chí Minh về vấn đề dân tộc và cách mạng giải phóng dân tộc: (NHUNG HOÀNG)",
        "options": {
            "A": "Làm phong phú học thuyết Mác-Lênin về cách mạng thuộc địa.",
            "B": "Soi đường thắng lợi cho cách mạng giải phóng dân tộc ở Việt Nam",
            "C": "Nền tảng tư tưởng và kim chỉ nam cho hành động của cách mạng Việt Nam",
            "D": "Là tiền đề cho thắng lợi của Cách mạng tháng 8"
        },
        "answer": "D",
        "explanation": "CẦN KIỂM TRA CÁCH HỎI: Giáo trình xác nhận tư tưởng soi đường thắng lợi cho Cách mạng Tháng Tám, nên D không sai rõ về thực chất, chỉ hẹp hơn giá trị tổng quát. Không nên giải thích rằng tư tưởng không góp phần tạo thắng lợi ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 34,36-37."
    },
    {
        "question": "Theo Hồ Chí Minh, mục tiêu của chủ nghĩa xã hội gồm những nội dung nào sau đây?(NHUNG HOÀNG)",
        "options": {
            "A": "Chính trị, kinh tế, văn hóa xã hội và dân chủ",
            "B": "Chính trị, dân chủ, kinh tế, tiến bộ",
            "C": "Chính trị, kinh tế, văn hóa xã hội, con người",
            "D": "Chính trị, kinh tế, văn hóa, tiến bộ"
        },
        "answer": "C",
        "explanation": "Mục tiêu xã hội mới bao gồm chế độ chính trị, phát triển kinh tế, văn hóa, quan hệ xã hội và con người; không thể chỉ chọn tăng trưởng kinh tế riêng lẻ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 57-61."
    },
    {
        "question": "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa Tam dân của Tôn Trung Sơn là gì?",
        "options": {
            "A": "Chống phong kiến.",
            "B": "Đấu tranh vì tự do, dân chủ.",
            "C": "Phù hợp với điều kiện thực tế nước ta.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Người tiếp thu có chọn lọc dân tộc, dân quyền, dân sinh của Tôn Trung Sơn và vận dụng vào Việt Nam; không thay thế nền tảng Mác-Lênin bằng chủ nghĩa Tam dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Lối sống ích kỷ, chỉ biết có riêng mình, thu vén cho riêng mình, chỉ thấy công lao của mình mà quên công lao của người khác. Theo Hồ Chí Minh là gì?",
        "options": {
            "A": "Chủ nghĩa cá nhân",
            "B": "Chủ nghĩa vị kỷ",
            "C": "Chủ nghĩa tư bản",
            "D": "Phong cách tiểu tư sản"
        },
        "answer": "A",
        "explanation": "Ích kỷ, thu vén và chỉ nhận công lao mình là biểu hiện đặt lợi ích riêng lên chung, làm hại đoàn kết; đó là chủ nghĩa cá nhân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 65,135."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, luận điểm Đảng Cộng sản là nhân tố quyết định hàng đầu để đưa cách mạng Việt Nam đi đến thắng lợi là:",
        "options": {
            "A": "Xác định vị thế cầm quyền của Đảng.",
            "B": "Xác định vai trò lãnh đạo của Đảng.",
            "C": "Xác định mục đích của Đảng.",
            "D": "Xác định nhiệm vụ của Đảng."
        },
        "answer": "B",
        "explanation": "Đảng cung cấp đường lối và tổ chức để dẫn dắt lực lượng cách mạng; luận điểm quyết định hàng đầu xác định vai trò lãnh đạo, không phải nguồn gốc ra đời.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 71-72."
    },
    {
        "question": "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp cho con người",
            "B": "Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp cho xã hội",
            "C": "Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp cho nhân loại",
            "D": ""
        },
        "answer": "A",
        "explanation": "Văn hóa, văn nghệ bồi dưỡng lòng yêu nước, lý tưởng, tình cảm, niềm tin; giáo dục tư tưởng và tình cảm đúng giúp con người hành động có mục đích.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 121-122.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Nâng cao dân trí",
            "B": "Nâng cao nhân lực",
            "C": "Nâng cao dân tài",
            "D": ""
        },
        "answer": "A",
        "explanation": "Văn hóa giáo dục xóa mù chữ và nâng hiểu biết, giúp dân nắm quy luật xã hội và thực hiện quyền làm chủ; đó là nâng cao dân trí.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118,122.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Bồi dưỡng những phẩm chất tốt đẹp và phong cách lành mạnh cho con người",
            "B": "Bồi dưỡng những phẩm chất tốt đẹp và phong cách lành mạnh cho xã hội",
            "C": "Bồi dưỡng những phẩm chất tốt đẹp và phong cách lành mạnh cho nhân dân",
            "D": ""
        },
        "answer": "A",
        "explanation": "Văn hóa đạo đức, lối sống nâng phẩm giá và phong cách lành mạnh, hướng con người tới chân-thiện-mỹ; đối tượng giáo dục trực tiếp là con người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 122.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh",
        "options": {
            "A": "Cải tạo xã hội",
            "B": "Cải tạo thế giới",
            "C": "Cải tạo cộng đồng",
            "D": ""
        },
        "answer": "A",
        "explanation": "Văn hóa tác động tới nhận thức, giá trị và hành động, góp phần cải biến xã hội. Tuy nhiên giáo trình 2021 không liệt kê cải tạo xã hội như một chức năng riêng trong danh sách ba chức năng của bộ câu hỏi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 119-123.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "mở rộng hiểu biết, nâng cao dân trí.",
            "B": "mở rộng hiểu biết, nâng cao quan trí.",
            "C": "mở rộng hiểu biết, nâng cao trình độ.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo dục mở rộng tri thức, diệt giặc dốt và nâng dân trí; kiến thức phải giúp người dân hiểu đời sống, lao động và thực hiện quyền làm chủ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118,122.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Bồi dưỡng những phẩm chất, phong cách và lối sống tốt đẹp, lành mạnh; hướng con người đến chân, thiện, mỹ để hoàn thiện xã hội.",
            "B": "Bồi dưỡng những phẩm chất, phong cách và lối sống tốt đẹp, lành mạnh; hướng con người đến chân, thiện, mỹ để hoàn thiện bản thân.",
            "C": "Bồi dưỡng những phẩm chất, phong cách và lối sống tốt đẹp, lành mạnh; hướng con người đến chân, thiện, mỹ để hoàn thiện con người.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Văn hóa không chỉ tăng kiến thức mà còn nâng phẩm chất, phong cách, lối sống và khả năng hướng tới chân-thiện-mỹ; B bao quát nội dung này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 121-122.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Luận điểm \"Đoàn kết, đoàn kết, đại đoàn kết; Thành công, thành công, đại thành công\" của Hồ Chí Minh được trích từ tác phẩm:",
        "options": {
            "A": "Bài nói chuyện tại trong buổi Bế mạc Đại hội thành lập Mặt trận Tổ Quốc Việt Nam",
            "B": "Bài nói chuyện tại Hội nghị mở rộng Ủy ban Mặt trận Tổ quốc Việt Nam",
            "C": "Bài nói chuyện tại Đại hội đại biểu Mặt trận Tổ Quốc Việt Nam lần thứ II",
            "D": "Buổi nói chuyện với cán bộ, chiến sĩ Đại đoàn Quân Tiên Phong"
        },
        "answer": "C",
        "explanation": "Giáo trình dẫn câu đoàn kết-thành công và chỉ nguồn Hồ Chí Minh Toàn tập, tập 13, trang 119; đoạn chính chưa ghi tên bài nói. C cần đối chiếu thêm văn bản gốc nếu muốn xác nhận tên tác phẩm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99."
    },
    {
        "question": "Mặt trận dân tộc thống nhất trong tư tưởng Hồ Chí Minh được xây dựng như thế nào?",
        "options": {
            "A": "Là nơi tập hợp mọi người dân ở trong nước Việt Nam",
            "B": "Là tổ chức tập hợp ngẫu nhiên quần chúng nhân dân",
            "C": "Là khối đại đoàn kết chặt chẽ có tổ chức trên nền tảng khối liên minh công - nông - trí thức do Đảng Cộng sản lãnh đạo",
            "D": "Là nơi quy tụ mọi người Việt Nam định cư ở nước ngoài, dù ở bất cứ phương trời nào"
        },
        "answer": "C",
        "explanation": "Mặt trận là khối đoàn kết rộng rãi nhưng có nền tảng công-nông-trí và Đảng lãnh đạo; tổ chức chặt chẽ giúp biến đoàn kết thành sức mạnh thực tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103."
    },
    {
        "question": "Trong Mặt trận dân tộc thống nhất, Đảng Cộng sản đóng vai trò là gì?",
        "options": {
            "A": "Thành viên của Mặt trận dân tộc thống nhất",
            "B": "Lực lượng lãnh đạo Mặt trận dân tộc thống nhất",
            "C": "Vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận dân tộc thông nhất",
            "D": "Đại biểu của giai cấp công nhân trong Mặt trận dân tộc thống nhất"
        },
        "answer": "C",
        "explanation": "Đảng không đứng ngoài Mặt trận: vừa tham gia như thành viên vừa lãnh đạo bằng đường lối đúng, đáp ứng mục tiêu và lợi ích chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103."
    },
    {
        "question": "Hồ Chí Minh nhấn mạnh vấn đề nào sau đây trong quan hệ giữa cán bộ nhà nước với nhân dân",
        "options": {
            "A": "Kinh trọng nhân dân",
            "B": "Tự tôn dân tộc",
            "C": "Nghiêm khắc",
            "D": "Phục tùng"
        },
        "answer": "A",
        "explanation": "Dân là chủ, cán bộ là người phục vụ; kính trọng dân và quyền làm chủ là điều kiện để giữ lòng tin, không lên mặt hoặc ra oai với dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 84-86,128."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam ra đời trên cơ sở của những yếu tố nào?",
        "options": {
            "A": "Chủ nghĩa Mác - Lênin, phong trào công nhân, phong trào cách mạng thế giới.",
            "B": "Chủ nghĩa Mác - Lênin, phong trào yêu nước Việt Nam.",
            "C": "Phong trào công nhân, phong trào yêu nước Việt Nam, phong trào cách mạng thế giới.",
            "D": "Chủ nghĩa Mác - Lênin, phong trào công nhân, phong trào yêu nước Việt Nam."
        },
        "answer": "D",
        "explanation": "Chủ nghĩa Mác-Lênin kết hợp phong trào công nhân và yêu nước tạo cơ sở ra đời Đảng; D đầy đủ cả ba yếu tố đặc thù Việt Nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72."
    },
    {
        "question": "Hồ Chí Minh cho rằng xây dựng nhà nước trong sạch vững mạnh cần phải làm gì?",
        "options": {
            "A": "Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức cách mạng",
            "B": "Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức cán bộ",
            "C": "Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức quần chúng",
            "D": "Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức công - nông"
        },
        "answer": "A",
        "explanation": "Chống tiêu cực cần pháp luật nghiêm minh và giáo dục đạo đức; chỉ giáo dục thiếu chế tài hoặc chỉ trừng phạt thiếu tu dưỡng đều chưa đủ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 89-93."
    },
    {
        "question": "Luận điểm \"Công cuộc giải phóng anh em chỉ có thể thực hiện được bằng sự nỗ lực của bản thân anh em\" là của:(NHUNG HOÀNG)",
        "options": {
            "A": "C. Mắc",
            "B": "Ph. Ăngghen",
            "C": "VILênin",
            "D": "Hồ Chí Minh"
        },
        "answer": "D",
        "explanation": "Giáo trình dẫn lời kêu gọi người bị áp bức tự nỗ lực giải phóng, nhấn mạnh tính chủ động và tự lực của cách mạng thuộc địa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 51."
    },
    {
        "question": "Trong những nhiệm vụ cấp bách của Nhà nước Việt Nam Dân chủ cộng hòa, khi nói về vấn đề thứ hai - nạn dốt, Hồ Chí Minh đã đề nghị mở một chiến dịch gì? Chọn phương án chính xác nhất(NHUNG HOÀNG)",
        "options": {
            "A": "Một chiến dịch xây dựng đời sống mới",
            "B": "Một chiến dịch để chống nạn mù chữ",
            "C": "Một chiến dịch tuyên truyền nền giáo dục mỗi",
            "D": "Một chiến dịch xây dựng nền văn hóa mới"
        },
        "answer": "B",
        "explanation": "Chống nạn dốt trực tiếp bằng xóa mù chữ, giúp mọi người biết đọc, biết viết và nâng dân trí. PDF không dẫn trọn bài nói những nhiệm vụ cấp bách nhưng xác nhận định hướng này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118,122."
    },
    {
        "question": "Theo Hồ Chí Minh độc lập, tự do là:",
        "options": {
            "A": "Quyền lợi của tất cả các quốc gia",
            "B": "Quyền thiêng liêng và bất khả xâm phạm của tất cả các dân tộc",
            "C": "Đặc quyền của mỗi một dân tộc",
            "D": "Quyền thiêng liêng của tất cả các dân tộc"
        },
        "answer": "B",
        "explanation": "Quyền độc lập, tự do của dân tộc được suy từ các quyền cơ bản của con người; mọi dân tộc đều có quyền ấy và không thể bị xâm phạm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-43."
    },
    {
        "question": "Hồ Chí Minh cho rằng",
        "options": {
            "A": "Đạo đức là gốc của người cách mạng",
            "B": "Đạo đức là gốc của người xã hội",
            "C": "Đạo đức là gốc của người công chúng",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đạo đức là nguồn nuôi dưỡng và nền tảng hành động cách mạng; tài năng phải đặt trên gốc đạo đức để được dân tin và phục vụ đúng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 123-125.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Đâu là quan điểm đúng với tư tưởng Hồ Chí Minh về người cách mạng)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chính Minh nhấn mạnh khuyết điểm của thanh niên là",
        "options": {
            "A": "Bệnh anh hùng",
            "B": "Tự cao",
            "C": "Tự đại",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo trình yêu cầu khiêm tốn, tu dưỡng và chống chủ nghĩa cá nhân ở sinh viên nhưng chưa trực tiếp gọi khuyết điểm là bệnh anh hùng. Chưa xác nhận nguyên văn của A từ PDF này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 143-147.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng:",
        "options": {
            "A": "Đạo đức nhân văn xã hội chủ nghĩa là sức cuốn hút của chủ nghĩa cộng sản",
            "B": "Đạo đức nhân văn xã hội chủ nghĩa là sức cuốn hút của chủ nghĩa xã hội",
            "C": "Đạo đức nhân văn xã hội chủ nghĩa là sức cuốn hút của chủ nghĩa dân chủ",
            "D": ""
        },
        "answer": "B",
        "explanation": "Sức hấp dẫn của chủ nghĩa xã hội trước hết ở các giá trị đạo đức cao đẹp và gương sống người cộng sản; đây là sức thuyết phục nhân văn của xã hội mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 126.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, bọn đế quốc thực dân tuyên truyền khẩu hiệu \"độc lập tự do\" thực chất là che đậy bản chất:",
        "options": {
            "A": "\"ăn cướp\" và \"giết người\"",
            "B": "\"ăn cắp\" và \"hại dân\"",
            "C": "\"bóc lột\" và \"đàn áp\"",
            "D": "\"cướp bóc\" và \"đàn áp\""
        },
        "answer": "A",
        "explanation": "Giáo trình phân tích thực dân áp bức, bóc lột và việc đấu tranh vạch tội ác; chưa dẫn nguyên văn hai từ ăn cướp, giết người trong câu này, nên A chỉ được liên hệ về nội dung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-47,29-30."
    },
    {
        "question": "Hồ Chí Minh tìm thấy con đường cứu nước giải phóng dân tộc trong thời kì nào?",
        "options": {
            "A": "Từ 1911 đến 1920",
            "B": "Từ 1921 đến 1930",
            "C": "Từ 1890 đến 1911",
            "D": "Từ 1930 đến 1945"
        },
        "answer": "A",
        "explanation": "Giai đoạn 1911-1920 khảo nghiệm thực tế, đọc Luận cương và lựa chọn Quốc tế Cộng sản giúp Người xác định con đường cứu nước vô sản.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29-30.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Giai đoạn nào sau đây hình thành cơ bản tư tưởng Hồ Chí Minh trong việc tìm thấy con đường cứu nước, giải phóng dân tộc ? A. 1911 đến 1930 B. 1911 đến 1920 C. 1911 đến 1935 D. 1908 đến 1911)"
    },
    {
        "question": "Đâu là luận điểm sáng tạo của Hồ Chí Minh về vấn đề lãnh đạo của Đảng",
        "options": {
            "A": "Lý luận về Đảng Cộng sản cầm quyền",
            "B": "Tư duy của Đảng Cộng sản",
            "C": "Đường lối của Đảng Cộng sản",
            "D": ""
        },
        "answer": "A",
        "explanation": "Lý luận về Đảng cầm quyền gắn vai trò lãnh đạo với đạo đức, trách nhiệm phục vụ và kiểm soát bởi dân; đây là phát triển tư tưởng xây dựng Đảng trong điều kiện nắm chính quyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 73-78.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Tư tưởng văn hoá phương Tây nào sau đây ảnh hưởng đến sự hình thành tư tưởng dân chủ Hồ Chí Minh trước khi người ra đi tìm đường cứu nước?",
        "options": {
            "A": "Truyền thống văn hoá dân chủ, tiến bộ của Đức",
            "B": "Truyền thống văn hoá dân chủ, tiến bộ của Pháp",
            "C": "Chủ nghĩa thực chứng Hoa Kỳ",
            "D": "Triết học phương Tây"
        },
        "answer": "B",
        "explanation": "Từ học tiểu học, Người quan tâm khẩu hiệu và giá trị tự do, bình đẳng của cách mạng Pháp; trải nghiệm phương Tây sau này giúp tiếp thu, phát triển các giá trị đó.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24."
    },
    {
        "question": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn thắng lợi:",
        "options": {
            "A": "Phải đi theo con đường cách mạng vô sản.",
            "B": "Phải đi theo con đường cách mạng Pháp, Mỹ.",
            "C": "Phải đi theo con đường cách mạng tháng Mười Nga",
            "D": "Phải đi theo con đường cách mạng của các bậc tiền bối Việt Nam."
        },
        "answer": "A",
        "explanation": "Người thấy cách mạng tư sản không giải phóng triệt để; cách mạng vô sản mở con đường gắn độc lập dân tộc với giải phóng người lao động và xã hội mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-48."
    },
    {
        "question": "Theo Hồ Chí Minh, muốn tăng cường đoàn kết quốc tế trong cuộc đấu tranh vì mục tiêu chung, các Đảng Cộng sản phải tiến hành có hiệu quả việc giáo dục chủ nghĩa yêu nước chân chính kết hợp với:",
        "options": {
            "A": "Chủ nghĩa vô sản.",
            "B": "Chủ nghĩa xã hội.",
            "C": "Chủ nghĩa quốc tế.",
            "D": "Chủ nghĩa Mác - Lênin."
        },
        "answer": "A",
        "explanation": "CẦN KIỂM TRA THUẬT NGỮ: Giáo trình ghi chủ nghĩa quốc tế vô sản, không phải chủ nghĩa vô sản ở A. C nêu quốc tế nhưng cũng chưa đầy đủ; đáp án cũ thiếu một thành tố quan trọng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 107."
    },
    {
        "question": "Theo Hồ Chí Minh, nhà nước vì dân là",
        "options": {
            "A": "Do nhân dân lập nên",
            "B": "Quyền lực của nhà nước và xã hội thuộc về nhân dân",
            "C": "Tất cả các phương án",
            "D": "Nhà nước lấy lợi ích chính đáng của nhân dân làm mục tiêu"
        },
        "answer": "C",
        "explanation": "CẦN KIỂM TRA ĐÁP ÁN: A thuộc nhà nước do dân, B thuộc nhà nước của dân, còn D trực tiếp định nghĩa nhà nước vì dân. Vì hỏi riêng vì dân, D phù hợp hơn C theo cách phân biệt của giáo trình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83-86."
    },
    {
        "question": "Nguyễn Ái Quốc là người Việt Nam thứ mấy tham gia vào Đảng Cộng sản Pháp?",
        "options": {
            "A": "Thứ nhất",
            "B": "Thứ hai",
            "C": "Thứ ba",
            "D": "Thứ tư"
        },
        "answer": "A",
        "explanation": "Tại Đại hội Tua cuối năm 1920, Người tham gia sáng lập Đảng Cộng sản Pháp và trở thành người cộng sản Việt Nam đầu tiên; A phù hợp mốc ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30."
    },
    {
        "question": "Hồ Chí Minh cho rằng, phong trào cộng sản công nhân quốc tế trở thành lực lượng quyết định vẫn mệnh của loài người không chỉ do chiến lược và sách lược thiên tài của cách mạng vô sản, mà còn do",
        "options": {
            "A": "Những phẩm chất đạo đức cao quý làm cho chủ nghĩa cộng sản trở thành một sức mạnh vô địch",
            "B": "Vũ khí, đạn dược hiện đại làm cho chủ nghĩa cộng sản trở thành một sức mạnh vô địch",
            "C": "Khoa học, kỹ thuật tiên tiến làm cho chủ nghĩa cộng sản trở thành một sức mạnh vô địch",
            "D": ""
        },
        "answer": "A",
        "explanation": "Phẩm chất đạo đức cao quý tạo niềm tin và sức hấp dẫn, góp phần sức mạnh phong trào cộng sản; chiến lược, sách lược đúng không phải yếu tố duy nhất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 126.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh \" Tất cả.. trong nước là của toàn thể nhân dân Việt Nam\".",
        "options": {
            "A": "Quyền hành",
            "B": "Quyền lực",
            "C": "Quyền bính",
            "D": "Quyền binh"
        },
        "answer": "C",
        "explanation": "Quyền bính là quyền lực chính trị của nhà nước; mọi quyền ấy thuộc nhân dân, bộ máy chỉ thực hiện sự ủy thác, không sở hữu quyền riêng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83-85."
    },
    {
        "question": "Khi nói về vấn đề độc lập dân tộc và giai cấp, Hồ Chí Minh cho rằng:",
        "options": {
            "A": "Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa nhân văn",
            "B": "Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa nhân đạo",
            "C": "Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa quốc tế",
            "D": "Phải kết hợp nhuẫn nhuyễn giữa giai cấp với dần tộc, chủ nghĩa xã hội và độc lập dần tộc, chủ nghĩa yêu nước và chủ nghĩa quốc tế đại đồng"
        },
        "answer": "C",
        "explanation": "Độc lập dân tộc mở đường giải phóng giai cấp và con người, gắn chủ nghĩa xã hội; yêu nước chân chính thống nhất tinh thần quốc tế, không khép kín dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 65-67,107,137-138."
    },
    {
        "question": "Đâu là quan điểm của Hồ Chí Minh về xây dựng con người",
        "options": {
            "A": "Con người cụ thể, lịch sử",
            "B": "Con người cụ thể, văn hóa",
            "C": "Con người cụ thể, xã hội",
            "D": "Con người lịch sử, văn hóa"
        },
        "answer": "A",
        "explanation": "Người xem con người theo giới tính, nghề nghiệp, địa vị và bối cảnh lịch sử cụ thể; không xét một con người trừu tượng, không nguồn gốc xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 137."
    },
    {
        "question": "Đâu là quan điểm của Hồ Chí Minh về xây dựng con người mới",
        "options": {
            "A": "Con người là mục tiêu, là động lực",
            "B": "Con người là mục tiêu, là phương châm",
            "C": "Con người là mục tiêu, là chiến lược",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giải phóng và phát triển con người là mục tiêu; con người qua lao động, đấu tranh, sáng tạo lại quyết định thành công, nên đồng thời là động lực.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 137-139.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Ngoại ngữ nào sau đây được Hồ Chí Minh sử dụng trong thời gian học tập ở trường Quốc học Huế?",
        "options": {
            "A": "Tiếng Anh",
            "B": "Tiếng Pháp",
            "C": "Tiếng Trung",
            "D": "Tiếng Nga"
        },
        "answer": "B",
        "explanation": "Giáo trình trình bày môi trường học Pháp-bản xứ và Quốc học, nhưng không ghi trực tiếp ngôn ngữ dùng tại Quốc học trong dạng câu hỏi này. Tiếng Pháp phù hợp bối cảnh, chưa phải xác nhận nguyên văn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24,28-29."
    },
    {
        "question": "Theo Hồ Chí Minh, con đường quá độ lên CNXH ở Việt Nam là:",
        "options": {
            "A": "Quá độ lên chủ nghĩa xã hội không qua giai đoạn phát triển tư bản chủ nghĩa.",
            "B": "Quá độ lên chủ nghĩa xã hội không qua giai đoạn phát triển xã hội phong kiến.",
            "C": "Quá độ lên chủ nghĩa xã hội không qua giai đoạn phát triển xã hội dân chủ.",
            "D": "Quá độ lên chủ nghĩa xã hội không qua giai đoạn phát triển cộng sản chủ nghĩa."
        },
        "answer": "A",
        "explanation": "Đặc điểm lớn nhất là từ nền nông nghiệp lạc hậu lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản; đó là điều kiện quy định nhiệm vụ và bước đi quá độ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62."
    },
    {
        "question": "Trong mối quan hệ giữa văn hóa, kinh tế, chính trị, theo Hồ Chí Minh chế độ chính trị và nền kinh tế được coi là",
        "options": {
            "A": "Nền tảng và quyết định tính chất của văn hóa",
            "B": "Cơ sở và quyết định đến bản chất của văn hóa",
            "C": "Cái quyết định đến văn hóa",
            "D": "Cơ sở phát triển văn hóa"
        },
        "answer": "A",
        "explanation": "Chính trị và kinh tế tạo nền tảng, quyết định tính chất văn hóa; văn hóa thuộc thượng tầng nhưng có tác động tích cực trở lại, không hoàn toàn thụ động.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 58,119."
    },
    {
        "question": "Tính chất nhân văn trong bao lực cách mạng của Hồ Chí Minh là:",
        "options": {
            "A": "Con đường bạo lực cách mạng gắn bó hữu cơ nhân đạo, tự do",
            "B": "Con đường cách mạng bạo lực gắn bó hữu cơ với nhân văn, hòa bình",
            "C": "Con đường cách mạng bạo lực gắn bó hữu cơ với tự do, hòa bình",
            "D": "Con đường cách mạng bạo lực gắn bó hữu cơ với nhân đạo, hòa bình"
        },
        "answer": "D",
        "explanation": "Bạo lực cách mạng nhằm bảo vệ con người trước áp bức; phải ưu tiên hòa bình và hạn chế tổn thất, nên gắn với nhân đạo chứ không cổ vũ bạo lực vô điều kiện.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 51-52."
    },
    {
        "question": "Theo Hồ Chí Minh, \"dân là chủ\" để đề cập đến điều gì?",
        "options": {
            "A": "Đề cập tới vị trí của dân",
            "B": "Đề cập tới trách nhiệm của dân",
            "C": "Đề cập tới vị thế của dân",
            "D": "Đề cập tới năng lực của dân"
        },
        "answer": "C",
        "explanation": "Dân là chủ xác định vị thế chủ thể tối cao của quyền lực, khác dân làm chủ nói về thực hiện quyền, nghĩa vụ và năng lực của dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83,85."
    },
    {
        "question": "Ngoại ngữ nào sau đây được Hồ Chí Minh học đầu tiên?",
        "options": {
            "A": "Tiếng Anh",
            "B": "Tiếng Pháp",
            "C": "Tiếng Trung",
            "D": "Tiếng Nga"
        },
        "answer": "B",
        "explanation": "CẦN LƯU Ý CÁCH HỎI: PDF ghi Người học ở trường Pháp-bản xứ từ 1905 và trước đó theo học các nhà nho, nhưng không xác định ngoại ngữ đầu tiên. Muốn chọn Pháp cần làm rõ nghĩa ngoại ngữ và phân biệt học chữ Hán với học tiếng Trung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24,28.\nGhi chú trong tài liệu: (Tiếng Pháp là ngoại ngữ mà Bác Hồ được học đầu tiên, trên cả hai phương diện học chữ và học nói, còn tiếng Trung khi nhỏ tuổi thì Bác chỉ được học chữ chứ không được học nói.)"
    },
    {
        "question": "Chủ nghĩa nào sau đây ảnh hưởng đến sự hình thành tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Chủ nghĩa dân tộc của Grady.",
            "B": "Chủ nghĩa dân chủ của Kenedy.",
            "C": "Chủ nghĩa tam dân của Tôn Trung Sơn.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Hồ Chí Minh tiếp thu ở chủ nghĩa Tam dân những điểm phù hợp với Việt Nam: dân tộc độc lập, dân quyền tự do, dân sinh hạnh phúc. Đây là một yếu tố của tinh hoa văn hóa phương Đông, không thay thế nền tảng chủ nghĩa Mác - Lênin.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong những câu nói sau đây, câu nào không phải là của Hồ Chí Minh?",
        "options": {
            "A": "\"Muốn được dân yêu, muốn được lòng dân, trước hết phải yêu dân, phải đặt quyền lợi của dân trên hết thảy, phải có một tinh thần chí công vô tư\".",
            "B": "\"Chúng ta đã xây dựng nên nước Việt Nam Dân chủ Cộng hòa. Nhưng nếu nước độc lập mà dân không được hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì\".",
            "C": "\"Chính phủ nhân dân bao giờ cũng phải đặt quyền lợi của dân lên trên hết thảy. Việc gì có lợi cho dân thì phải hết sức làm. Việc gì hại đến dẫn thì phải hết sức tránh\".",
            "D": "\"Khoan thư sức dân làm kế sâu rễ bền gốc\"."
        },
        "answer": "D",
        "explanation": "Giáo trình dẫn các quan điểm vì dân của Hồ Chí Minh, nhưng không ghi câu “Khoan thư sức dân làm kế sâu rễ bền gốc” là lời của Người. Đáp án D là kết quả của bộ câu hỏi gốc; giáo trình này chưa cung cấp căn cứ trực tiếp để xác định tác giả câu đó.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86."
    },
    {
        "question": "Theo Hồ Chí Minh, vấn đề cốt lõi của cách mạng giải phóng dân tộc thuộc địa là",
        "options": {
            "A": "Vấn đề tự do dân chủ",
            "B": "Vấn đề độc lập dân tộc",
            "C": "Vấn đề ruộng đất",
            "D": ""
        },
        "answer": "B",
        "explanation": "Giành độc lập dân tộc là yêu cầu đầu tiên để thoát khỏi sự thống trị của thực dân. Độc lập phải thực chất, đầy đủ và gắn với tự do, hạnh phúc của nhân dân, nên đây là nội dung cốt lõi của vấn đề dân tộc thuộc địa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-45.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Câu nói \"Đảng là đạo đức, đảng là văn minh\" được chủ tịch Hồ Chí minh đưa ra ở:",
        "options": {
            "A": "Di chúc - 1969",
            "B": "Diễn văn kỷ niệm 30 năm thành lập Đảng 1960",
            "C": "Diễn văn khai mạc đại hội đại biểu toàn quốc lần thứ II tháng 2 - 1962",
            "D": "Diễn văn khai mạc đại hội đại biểu toàn quốc lần thứ III của Đảng năm 1960"
        },
        "answer": "B",
        "explanation": "Giáo trình đặt nhận định Đảng là đạo đức, là văn minh trong bài nói kỷ niệm 30 năm thành lập Đảng năm 1960. Nhận định nhấn mạnh phẩm chất và trách nhiệm của một Đảng lãnh đạo vì lợi ích dân tộc, nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 73."
    },
    {
        "question": "Theo Hồ Chí Minh, mâu thuẫn chủ yếu ở thuộc địa, không thể điều hòa được là gì.",
        "options": {
            "A": "Mâu thuẫn giữa dân tộc thuộc địa với thực dân, đế quốc",
            "B": "Mâu thuẫn giữa giai cấp công nhân với chủ nghĩa thực dân",
            "C": "Mâu thuẫn giữa giai cấp nông dân với giai cấp địa chủ bản xứ",
            "D": "Tất cả các phương án trên"
        },
        "answer": "A",
        "explanation": "Ách thống trị thực dân đặt toàn dân tộc vào tình trạng mất độc lập, khiến mâu thuẫn dân tộc thuộc địa với đế quốc xâm lược nổi lên hàng đầu. Vì vậy, giải phóng dân tộc là nhiệm vụ trước hết, dù xã hội vẫn có các mâu thuẫn giai cấp.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 19-20,46-47."
    },
    {
        "question": "Theo Hồ Chí Minh, mối quan hệ giữa văn hóa với kinh tế và chính trị như thế nào?",
        "options": {
            "A": "Văn hóa đứng ngoài kinh tế",
            "B": "Văn hóa đứng người chính trị",
            "C": "Văn hóa không thể đứng ngoài mà phải ở trong kinh tế và chính trị",
            "D": "Văn hóa đứng ngoài kinh tế và chính trị"
        },
        "answer": "C",
        "explanation": "Văn hóa gắn với kinh tế và chính trị, tác động trở lại hai lĩnh vực này. Nó phải tham gia xây dựng đời sống xã hội, bồi dưỡng con người và phục vụ nhiệm vụ cách mạng, không thể tồn tại biệt lập.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 119."
    },
    {
        "question": "Chọn đáp án đúng nhất: Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa quốc tế là nội dung gì trong tư tưởng Hồ Chí Minh:",
        "options": {
            "A": "Tư tưởng Hồ Chí Minh về vấn đề dân tộc",
            "B": "Tư tưởng Hồ Chí Minh về vấn đề giai cấp",
            "C": "Tư tưởng Hồ Chí Minh về đoàn kết quốc tế",
            "D": "Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội"
        },
        "answer": "A",
        "explanation": "Các cặp quan hệ trong câu hỏi cho thấy cách giải quyết vấn đề dân tộc theo lập trường cách mạng vô sản. Mục tiêu độc lập của dân tộc được gắn với chủ nghĩa xã hội và trách nhiệm đoàn kết với các dân tộc, lực lượng tiến bộ khác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-47,65-67,107."
    },
    {
        "question": "Trong bản Yêu sách của nhân dân An Nam, Hồ Chí Minh nhấn mạnh quốc gia cần phải có một:",
        "options": {
            "A": "Chế độ dân chủ",
            "B": "Chế độ ra các đạo luật",
            "C": "Chế độ công bằng",
            "D": "Chế độ ra sắc lệnh"
        },
        "answer": "B",
        "explanation": "Yêu sách của nhân dân An Nam đề nghị thay chế độ cai trị bằng sắc lệnh bằng chế độ ban hành các đạo luật. Ý nghĩa là yêu cầu quản lý bằng pháp luật và bảo đảm quyền của người dân, chống sự tùy tiện của chính quyền thuộc địa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86-87."
    },
    {
        "question": "Hãy chọn phương án đúng nhất. Theo Hồ Chí Minh, mục đích cơ bản của đoàn kết quốc tế là",
        "options": {
            "A": "Tạo sức mạnh tổng hợp cho cách mạng Việt Nam và góp phần cùng với nhân dẫn thế giới thực hiện thắng lợi các mục tiêu cách mạng",
            "B": "Hợp tác giáo dục và giao lưu văn hóa",
            "C": "Tranh thủ sự viện trợ của các nước bên ngoài",
            "D": "Học hỏi và trao đổi kinh nghiệm sản xuất"
        },
        "answer": "A",
        "explanation": "Đoàn kết quốc tế giúp kết hợp sức mạnh dân tộc với sức mạnh thời đại, tăng nguồn lực cho cách mạng Việt Nam. Đồng thời, Việt Nam góp sức vào các mục tiêu chung về hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 106-108."
    },
    {
        "question": "Hồ Chí Minh lưu ý trong công tác xây dựng mặt trận như sau.",
        "options": {
            "A": "Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu cụ thể",
            "B": "Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu cơ bản",
            "C": "Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu chung",
            "D": ""
        },
        "answer": "C",
        "explanation": "Mục tiêu chung và lợi ích chung là điểm quy tụ những lực lượng có hoàn cảnh, tôn giáo, quan điểm khác nhau. Mặt trận phải thống nhất trên cơ sở ấy, đồng thời tôn trọng những lợi ích riêng chính đáng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 101,103.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng đoàn kết toàn dân để: (NHUNG HOÀNG)",
        "options": {
            "A": "Phụng sự nhân dân",
            "B": "Phụng sự cách mạng",
            "C": "Phụng sự tổ quốc",
            "D": ""
        },
        "answer": "C",
        "explanation": "Giáo trình dẫn nhiệm vụ đoàn kết toàn dân, phụng sự Tổ quốc. Đoàn kết là phương thức tập hợp sức mạnh nhân dân để thực hiện mục tiêu chung của đất nước, không phải để bảo vệ lợi ích riêng của một nhóm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, Liêm là luôn tôn trọng của công và của dân. Phải:",
        "options": {
            "A": "\"trong sạch, không tham lam\" tiền của, địa vị, danh tiếng.",
            "B": "\"trong sáng, không tham lam\" tiền của, địa vị, danh tiếng.",
            "C": "\"trong sạch, không ham muốn\" tiền của, địa vị, danh tiếng.",
            "D": "\"trong sạch, không đòi hỏi\" tiền của, địa vị, danh tiếng."
        },
        "answer": "A",
        "explanation": "Liêm yêu cầu tôn trọng của công, của dân và giữ mình trong sạch, không tham tiền tài, địa vị hay danh tiếng. Đặc biệt, người có quyền phải tránh sử dụng chức vụ để chiếm lợi ích riêng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 129."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, con người mới xã hội chủ nghĩa là con người.",
        "options": {
            "A": "Kế thừa những giá trị tốt đẹp của con người truyền thống",
            "B": "Phá bỏ những truyền thống cũ",
            "C": "Hình thành những phẩm chất mới xã hội chủ nghĩa",
            "D": "Kế thừa những giá trị tốt đẹp của con người truyền thống hình thành những phẩm chất mới xã hội chủ nghĩa"
        },
        "answer": "D",
        "explanation": "Con người mới xã hội chủ nghĩa vừa kế thừa những giá trị tốt đẹp của con người Việt Nam, vừa có những phẩm chất phù hợp xã hội mới. Những phẩm chất đó gồm ý thức làm chủ, tinh thần tập thể, lao động và trách nhiệm với cộng đồng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 139."
    },
    {
        "question": "Hồ Chí Minh tiếp thu tư tưởng về đạo đức của Nho giáo trong việc xây dựng, đổi mới, phát triển, đạo đức trong công tác gì?",
        "options": {
            "A": "Xây dựng con người mới",
            "B": "Xây dựng Đảng về đạo đức",
            "C": "Xây dựng văn hóa mới",
            "D": "Xây dựng xã hội mới"
        },
        "answer": "B",
        "explanation": "Hồ Chí Minh tiếp thu có chọn lọc tư tưởng tu dưỡng đạo đức của Nho giáo và chuyển hóa thành đạo đức cách mạng. Việc xây dựng Đảng về đạo đức đòi hỏi cán bộ, đảng viên tự rèn luyện và đặt lợi ích nhân dân lên trên lợi ích riêng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 23,73."
    },
    {
        "question": "Nguyễn Ái Quốc vào Đảng Xã hội Pháp năm nào?",
        "options": {
            "A": "1917",
            "B": "1918",
            "C": "1919",
            "D": "1920"
        },
        "answer": "C",
        "explanation": "Giáo trình ghi Nguyễn Ái Quốc gia nhập Đảng Xã hội Pháp năm 1919. Đây là bước tham gia hoạt động chính trị ở Pháp, trước khi Người tán thành Quốc tế III và tham gia thành lập Đảng Cộng sản Pháp cuối năm 1920.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29."
    },
    {
        "question": "Theo Hồ Chí Minh, đạo đức mới chỉ có thể được xây dựng trên cơ sở sự tự giác tu dưỡng đạo đức của mỗi người thông qua hoạt động thực tiễn, phải kiên trì rèn luyện như:",
        "options": {
            "A": "việc rửa mặt hàng ngày.",
            "B": "việc đánh răng hàng ngày.",
            "C": "việc ăn uống hàng ngày",
            "D": "việc hít thở hàng ngày"
        },
        "answer": "A",
        "explanation": "Tu dưỡng đạo đức phải tự giác, thường xuyên, suốt đời và qua thực tiễn, nên cách so sánh với việc rửa mặt hằng ngày diễn tả tính liên tục. Lưu ý: giáo trình dùng trực tiếp phép so sánh rửa mặt ở mục tự phê bình và phê bình, còn mục đạo đức giải thích yêu cầu rèn luyện lâu dài.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 76,135-136."
    },
    {
        "question": "Hồ Chí Minh cho rằng, nhà nước của dân, do dân và vì dân phải",
        "options": {
            "A": "Là nhà nước hợp hiến",
            "B": "Là nhà nước dân chủ",
            "C": "Là nhà nước dân quyền",
            "D": ""
        },
        "answer": "B",
        "explanation": "Nhà nước của dân, do dân, vì dân lấy nhân dân làm chủ thể quyền lực và phục vụ lợi ích nhân dân. Vì thế, dân chủ thể hiện cả ở nguồn gốc quyền lực, cách tổ chức hoạt động và mục đích của Nhà nước.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83-86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng, nhà nước của dân, do dân và vì dân phải",
        "options": {
            "A": "Do ĐCS lãnh đạo và nhân dân làm chủ",
            "B": "Do nhân dân quản lý và nhân dân làm chủ",
            "C": "Do giai cấp công nhân lãnh đạo và nhân dân làm chủ",
            "D": ""
        },
        "answer": "A",
        "explanation": "Sự lãnh đạo của Đảng gắn với việc bảo đảm nhân dân thực sự làm chủ. Nhà nước chịu sự lãnh đạo về đường lối, tổ chức và kiểm tra của Đảng, đồng thời quyền lực nhà nước thuộc về nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 82-86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng, nhà nước của dân, do dân và vì dân phải mang bản chất",
        "options": {
            "A": "Giai cấp công nhân và mang bản chất dân tộc",
            "B": "Giai cấp công nhân và mang bản chất nhân văn",
            "C": "Giai cấp công nhân và mang bản chất nhân đạo",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo trình xác định Nhà nước mang bản chất giai cấp công nhân, thống nhất với tính nhân dân và tính dân tộc. Cần dùng chính xác “tính dân tộc” thay cho “bản chất dân tộc” trong lựa chọn A; đây không phải hai bản chất giai cấp song song.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 82-83.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu không phải là nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ theo tư tưởng hồ chí minh?",
        "options": {
            "A": "Mọi tư tưởng hành động phải tuân thủ tuyệt đối theo chủ nghĩa Mác - Lênin",
            "B": "Phải giữ vững được độc lập dân tộc",
            "C": "Phải đoàn kết, học tập kinh nghiệm từ thực tiễn",
            "D": "Xây đi đôi với chống"
        },
        "answer": "A",
        "explanation": "Đáp án A cần đọc thận trọng: giáo trình thực sự yêu cầu mọi tư tưởng, hành động dựa trên nền tảng chủ nghĩa Mác - Lênin, đồng thời vận dụng sáng tạo theo hoàn cảnh. Nếu A muốn nói tuân theo một cách máy móc, tuyệt đối hóa công thức thì không phù hợp; nếu chỉ nói kiên định nền tảng thì câu hỏi không có đáp án loại trừ rõ ràng. B, C, D đều tương ứng các nguyên tắc giáo trình nêu.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 63-65."
    },
    {
        "question": "Luận điểm nào là của Hồ Chí Minh?",
        "options": {
            "A": "Hãy xóa bỏ tình trạng người bóc lột người thì tình trạng dân tộc này bóc lột dân tộc khác sẽ bị xóa bỏ.",
            "B": "Khi mà sự đối kháng giữa các giai cấp trong nội bộ dân tộc không còn nữa thì sự thù địch giữa các dân tộc cũng đồng thời mất theo.",
            "C": "Giải phóng giai cấp là nhiệm vụ trung tâm, là điều kiện để giải phóng dân tộc.",
            "D": "Trong điều kiện các nước thuộc địa thì giải phóng dân tộc là cơ sở để giải phóng giai cấp, giải phóng con người."
        },
        "answer": "D",
        "explanation": "Ở thuộc địa, phải xóa ách thống trị ngoại bang trước để tạo điều kiện giải quyết vấn đề giai cấp và con người. Ba mục tiêu giải phóng gắn với nhau, nhưng giải phóng dân tộc có vị trí trước hết trong hoàn cảnh Việt Nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-47,137-138.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Đâu là luận điểm của Hồ Chí Minh? A. Hãy xóa bỏ tình trạng người bóc lột người thì tình trạng dẫn tộc này bóc lột dẫn tộc khác sẽ bị xóa B. Khi mà sự đối kháng giữa các giai cấp trong nội bộ dân tộc không còn nữa thì sự thù địch giữa các dân tộc cũng đồng thời mất theo. C. Giải phóng dân tộc gắn với giải phóng giai cấp, trong đó giải phóng dân tộc là trước hết, trên hết D. Giải phóng giai cấp là nhiệm vụ hàng đầu, là điêu kiện tiên quyết trong giãi phóng dẫn tộc.)"
    },
    {
        "question": "Tác phẩm \"Cần Kiêm Liêm Chính\" của Hồ Chí Minh được xuất bản vào thời gian nào?",
        "options": {
            "A": "Năm 1950",
            "B": "Năm 1947",
            "C": "Năm 1949",
            "D": "Năm 1948"
        },
        "answer": "C",
        "explanation": "Tác phẩm được chọn gắn với việc giải thích bốn phẩm chất cần, kiệm, liêm, chính và trách nhiệm tự rèn luyện. Tuy nhiên, các trang giáo trình trình bày nội dung đạo đức này chưa xác nhận trực tiếp mốc xuất bản năm 1949; mốc đó được giữ theo bộ câu hỏi gốc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 128-130."
    },
    {
        "question": "Hồ Chí Minh lưu ý Đảng về vấn đề đại đoàn kết dân tộc thông qua luận điểm",
        "options": {
            "A": "Đoàn kết không chỉ nằm ở chủ trương, đường lối, chính sách mà phải biến thành sức mạnh",
            "B": "Đoàn kết không chỉ nằm ở chủ trương, đường lối, chính sách mà phải biến thành tư tưởng",
            "C": "Đoàn kết không chỉ nằm ở chủ trương, đường lối, chính sách mà phải biến thành đường lối",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đoàn kết phải được tổ chức thành lực lượng thực tế thông qua vận động nhân dân, các đoàn thể và Mặt trận. Một chủ trương đúng chỉ phát huy tác dụng khi trở thành hành động thống nhất và sức mạnh thực hiện nhiệm vụ cách mạng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98-99,104-105.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Chế độ xã hội dưới sự lãnh đạo của Đảng Cộng sản và giai cấp công nhân, đánh đổ đế quốc và phong kiến,trên nền tảng công nông liên minh, nhân dân lao động làm chủ, nhân dân dân chủ chuyền chính theo tư tưởngMác - Lênin, theo Hồ Chí Minh đó là:",
        "options": {
            "A": "Chế độ chuyên chính vô sản",
            "B": "Chế độ dân chủ nhân dân",
            "C": "Chế độ dân chủ xã hội chủ nghĩa",
            "D": "Chế độ dân chủ mới"
        },
        "answer": "C",
        "explanation": "Đáp án C của bộ câu hỏi không khớp giáo trình. Đoạn mô tả trong câu hỏi được giáo trình dùng để giải thích “chế độ dân chủ mới”, tương ứng lựa chọn D. Đây là chế độ dưới sự lãnh đạo của Đảng và giai cấp công nhân, sau khi đánh đổ đế quốc, phong kiến, làm cơ sở tiến lên chủ nghĩa xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 54."
    },
    {
        "question": "Giai đoạn nào sau đây hình thành cơ bản tư tưởng Hồ Chí Minh về cách mạng Việt Nam?",
        "options": {
            "A": "1945 đến 1969",
            "B": "1930 đến 1945",
            "C": "1921 đến 1930",
            "D": "1911 đến 1920"
        },
        "answer": "C",
        "explanation": "Các hoạt động truyền bá lý luận, chuẩn bị tổ chức và xây dựng đường lối trong thập niên 1920 dẫn tới Cương lĩnh đầu năm 1930. Giáo trình gọi giai đoạn này là từ cuối năm 1920 đến đầu năm 1930; cách ghi 1921-1930 trong đáp án là cách chia mốc giản lược.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-31."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, độc lập, tự do được hiểu là",
        "options": {
            "A": "Quyền bất khả xâm phạm của tất cả các dân tộc",
            "B": "Quyền thiêng liêng và bất khả xâm phạm của tất cả các dân tộc",
            "C": "Quyền thiêng liêng của tất cả các dân tộc",
            "D": "Đặc quyền của mỗi một dân tộc"
        },
        "answer": "B",
        "explanation": "Hồ Chí Minh khẳng định mỗi dân tộc đều có quyền sống, tự do và độc lập. Quyền ấy không phải sự ban phát của nước lớn và không thể bị tước đoạt bằng sự thống trị hay xâm lược.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-43."
    },
    {
        "question": "Chọn phương án đúng nhất. Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam là",
        "options": {
            "A": "Đảng của giai cấp công nhân, đồng thời là đảng của dân tộc Việt Nam",
            "B": "Đông của giai cấp công nhân và nông dân Việt Nam",
            "C": "Đảng của giai cấp công nhân Đông Dương",
            "D": "Đảng của giai cấp công nhân Việt Nam"
        },
        "answer": "A",
        "explanation": "Đảng mang bản chất giai cấp công nhân, đồng thời đại diện cho lợi ích của nhân dân lao động và dân tộc Việt Nam. Hai mặt này thống nhất trong mục tiêu giải phóng dân tộc, xây dựng xã hội mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48,72.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo Hồ Chí Minh, Đảng Lao động Việt Nam là Đảng của ai?)"
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, lực lượng nào là chủ thể của khối đại đoàn kết dân tộc?",
        "options": {
            "A": "Công nhân",
            "B": "Toàn thể nhân dân",
            "C": "Nhân dân",
            "D": "Không xác định lực lượng chủ thể"
        },
        "answer": "B",
        "explanation": "Chủ thể của đại đoàn kết là toàn thể nhân dân Việt Nam, kể cả đồng bào ở nước ngoài có lòng yêu nước. Liên minh công nhân, nông dân, trí thức là nền tảng của khối ấy, không phải giới hạn toàn bộ thành phần tham gia.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Trong tư tưởng Hồ Chí Minh, lực lượng nào là chủ thể của khối đại đoàn kết dân tộc? a. Công nhân b. Công - nông c. Nhân dân d. Không xác định lực lượng chủ thể)"
    },
    {
        "question": "Theo Hồ Chí Minh, đoàn kết là",
        "options": {
            "A": "Truyền thống quý báu của dân tộc ta",
            "B": "Sức mạnh vô địch của dân tộc ta",
            "C": "Ý chí tự lực, tự cường của dân tộc ta",
            "D": ""
        },
        "answer": "A",
        "explanation": "Truyền thống đoàn kết được hình thành trong quá trình dựng nước, giữ nước và được Hồ Chí Minh kế thừa, phát triển. Trong Đảng, giữ gìn đoàn kết cũng là điều kiện để lãnh đạo và tập hợp nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 22,77.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng giải phóng dân tộc là sự nghiệp của",
        "options": {
            "A": "Toàn dân",
            "B": "Toàn quân",
            "C": "Toàn Đảng",
            "D": "Giai cấp công nhân"
        },
        "answer": "A",
        "explanation": "Giải phóng dân tộc cần tập hợp mọi lực lượng yêu nước, vì ách thực dân đe dọa lợi ích của toàn dân tộc. Công nhân và nông dân là lực lượng gốc, nhưng cách mạng không chỉ là việc riêng của hai giai cấp này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48-49."
    },
    {
        "question": "Hồ Chí Minh cho rằng giải phóng dân tộc là nhiệm vụ của cách mạng nào sau đây",
        "options": {
            "A": "Cách mạng nhân sinh tự do",
            "B": "Cách mạng dân chủ tư sản",
            "C": "Cách mạng XHCN",
            "D": ""
        },
        "answer": "C",
        "explanation": "Đáp án C cần kiểm tra lại. Giáo trình xác định giải phóng dân tộc là nhiệm vụ trước hết của cách mạng ở thuộc địa, được giải quyết theo con đường cách mạng vô sản rồi tiến lên chủ nghĩa xã hội. Không nên đồng nhất cách mạng giải phóng dân tộc với giai đoạn cách mạng xã hội chủ nghĩa; các lựa chọn hiện có chưa thể hiện đúng cách mạng dân tộc dân chủ nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-47,65.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Tư tưởng, văn hóa phương Tây lấy.",
        "options": {
            "A": "Cảm tính và khoa học làm tiêu chuẩn",
            "B": "Lý tính và khoa học là tiêu chuẩn",
            "C": "Tư duy và sự phản biện làm tiêu chuẩn",
            "D": "Sự phản biện và lý tính làm tiêu chuẩn"
        },
        "answer": "B",
        "explanation": "Giáo trình trình bày việc Hồ Chí Minh tiếp thu tư tưởng dân chủ, nhân quyền và tinh hoa văn hóa phương Tây một cách chọn lọc. Cụm “lý tính và khoa học là tiêu chuẩn” là khái quát trong bộ câu hỏi, chưa được giáo trình xác nhận trực tiếp thành một đặc trưng duy nhất của toàn bộ văn hóa phương Tây.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24-25."
    },
    {
        "question": "Hồ Chí Minh nhấn mạnh tầm quan trọng của mặt trận như sau",
        "options": {
            "A": "Mặt trận là khối đoàn kết chặt chẽ, lâu dài, thật sự, chân thành",
            "B": "Mặt trận là khối đoàn kết chặt chẽ, lâu dài, thật sự, chân chính",
            "C": "Mặt trận là khối đoàn kết chặt chẽ, lâu dài, thật sự, chân thực",
            "D": ""
        },
        "answer": "A",
        "explanation": "Mặt trận cần đoàn kết lâu dài, chặt chẽ, thực chất và chân thành giữa các thành viên. Điều này đòi hỏi vừa hợp tác trên lợi ích chung, vừa góp ý và khắc phục khác biệt bằng tinh thần xây dựng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103-104.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, luận điểm Đảng Cộng sản Việt Nam là sản phẩm của sự kết hợp giữa chủ nghĩa Mác-Lênin với phong trào công nhân và phong trào yêu nước là:",
        "options": {
            "A": "Xác định nhiệm vụ của Đảng.",
            "B": "Xác định bản chất của Đảng.",
            "C": "Xác định nguồn gốc ra đời của Đảng.",
            "D": "Xác định năng lực của Đảng."
        },
        "answer": "C",
        "explanation": "Luận điểm ba yếu tố giải thích nguồn gốc và quy luật ra đời của Đảng Cộng sản Việt Nam. Việc bổ sung phong trào yêu nước thể hiện sự vận dụng lý luận về đảng cộng sản vào hoàn cảnh một nước thuộc địa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72."
    },
    {
        "question": "Hồ Chí Minh ví tham nhũng như giặc(NHUNG HOÀNG)",
        "options": {
            "A": "Ngoại xâm",
            "B": "Mỹ",
            "C": "Nội xâm",
            "D": ""
        },
        "answer": "C",
        "explanation": "Tham ô, lãng phí, quan liêu bị ví là giặc nội xâm vì phá hoại bộ máy và lòng tin từ bên trong. Chúng làm suy yếu cách mạng ngay trong đội ngũ, nên phải phòng ngừa và xử lý nghiêm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 91-92.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo Hồ Chí Minh, tham ô, lãng phí được ví như giặc gì? A. Ngoại xâm B. Nội xâm C. Mỹ D. Giặc dốt)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, cách mạng XHCN phải tiến hành đồng thời với cách mạng nào?(NHUNG HOÀNG)",
        "options": {
            "A": "Cách mạng tư sản",
            "B": "Cách mạng dân tộc dân chủ nhân dân",
            "C": "Cách mạng văn hóa",
            "D": "Cách mạng giai cấp"
        },
        "answer": "B",
        "explanation": "Đáp án B phù hợp khi đặt trong hoàn cảnh đất nước tạm thời chia hai miền từ năm 1954: miền Bắc xây dựng chủ nghĩa xã hội, miền Nam tiếp tục cách mạng dân tộc dân chủ nhân dân. Hai nhiệm vụ được tiến hành đồng thời và cùng hướng tới độc lập, thống nhất; không nên hiểu đây là công thức bắt buộc cho mọi hoàn cảnh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 35."
    },
    {
        "question": "Yếu tố nào sau đây ảnh hưởng đến sự hình thành tư tưởng Hồ Chí Minh:",
        "options": {
            "A": "Lý luận và kinh nghiệm các cuộc cách mạng điển hình phương Tây",
            "B": "Kinh nghiệm các cuộc cách mạng điển hình ở phương Đông",
            "C": "Lý luận và thực tiễn các cuộc cách mạng điển hình trên thế giới",
            "D": "Bài học xương máu của cách mạng Việt Nam"
        },
        "answer": "C",
        "explanation": "Hồ Chí Minh khảo sát thực tiễn các nước, đánh giá cách mạng tư sản và tìm thấy ở Cách mạng Tháng Mười, chủ nghĩa Mác - Lênin con đường giải phóng phù hợp. Lý luận và kinh nghiệm cách mạng thế giới vì thế là một nguồn tác động đến sự hình thành tư tưởng Người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 21-22,29-30."
    },
    {
        "question": "Hồ Chí Minh nhắc cán bộ nhà nước phải biết",
        "options": {
            "A": "Học tập từ nhân dân",
            "B": "Tự tôn dân tộc trước nhân dân",
            "C": "Quan cách trước nhân dân",
            "D": ""
        },
        "answer": "A",
        "explanation": "Nhân dân có kinh nghiệm thực tiễn và là chủ thể của đất nước, nên cán bộ phải lắng nghe, học hỏi nhân dân. Học dân giúp quyết định sát nhu cầu đời sống và tránh quan liêu, xa thực tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78,85-86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh nhắc cán bộ nhà nước phải:",
        "options": {
            "A": "Có mối liên hệ mật thiết với đại diện của nhân dân",
            "B": "Có mối liên hệ mật thiết với giai cấp mình",
            "C": "Có mối liên hệ mật thiết với chính quyền",
            "D": "Có mối liên hệ mật thiết với nhân dân"
        },
        "answer": "D",
        "explanation": "Liên hệ mật thiết với nhân dân giúp cán bộ nắm nguyện vọng, chịu sự giám sát và phục vụ đúng lợi ích của dân. Xa dân sẽ làm suy yếu nền tảng của Đảng và Nhà nước.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78,86."
    },
    {
        "question": "Hồ chí minh nhắc cán bộ nhà nước phải biết làm điều gì?",
        "options": {
            "A": "làm lợi cho dân",
            "B": "lao động vì dân",
            "C": "phấn đấu vì dân",
            "D": "làm quan cách mạng"
        },
        "answer": "A",
        "explanation": "Mục đích của Nhà nước là mưu cầu tự do, hạnh phúc và lợi ích của nhân dân. Vì vậy, cán bộ phải lấy hiệu quả phục vụ dân làm thước đo hành động, chứ không lấy lợi ích cá nhân hay chức vụ làm mục tiêu.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86."
    },
    {
        "question": "Theo Hồ Chí Minh, quyền lãnh đạo Mặt trận của Đảng không phải do Đảng tự phong cho mình, mà phải được:",
        "options": {
            "A": "Nhân dân bỏ phiếu.",
            "B": "Trưng cầu dân ý.",
            "C": "Nhân dân thừa nhận.",
            "D": "Chính quyền cho phép."
        },
        "answer": "C",
        "explanation": "Đảng là thành viên và lực lượng lãnh đạo Mặt trận, nhưng sự lãnh đạo phải được các lực lượng và nhân dân thừa nhận. Uy tín đó hình thành từ đường lối đúng, năng lực vận động và sự gương mẫu, không từ việc tự phong quyền lãnh đạo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103."
    },
    {
        "question": "Đoạn viết dưới đây ghi tóm tắt lời giải thích của hồ chí minh về cần, kiệm, liêm, chính. hỏi: điểm tóm tắt nào đã bị ghi nhầm nội dung?",
        "options": {
            "A": "Cần là lao động cần cù, siêng năng, lao động có kế hoạch, sáng tạo và có năng suất lao động cao...",
            "B": "Kiệm là không xa xỉ, không hoang phí, không bừa bãi...",
            "C": "Liêm là luôn tôn trọng của công và của dân, không tham tiền của, địa vị, danh tiếng.",
            "D": "Chính là trong sạch, không tham lam đồng xu, hạt thóc của nhà nước, của dân."
        },
        "answer": "D",
        "explanation": "Nội dung “trong sạch, không tham lam” thuộc phẩm chất liêm, nên gán cho chính là ghi nhầm. Chính có nghĩa là ngay thẳng, đúng đắn trong quan hệ với mình, với người và với công việc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 129."
    },
    {
        "question": "Hồ Chí Minh cho rằng:",
        "options": {
            "A": "Đại đoàn kết dân tộc là vấn đề có ý nghĩa chiến lược, quyết định sự thành công của cách mạng",
            "B": "Đoàn kết dân tộc là vấn đề có ý nghĩa chiến lược tác động trực tiếp đến sự thành công của cách mạng",
            "C": "Đại đoàn kết toàn dân là vấn đề có ý nghĩa chiến lược, quyết định sự trưởng thành của cách mạng",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đại đoàn kết là vấn đề chiến lược xuyên suốt cách mạng vì sức mạnh của nhân dân quyết định thắng lợi. Hình thức tập hợp có thể thay đổi theo nhiệm vụ từng thời kỳ, nhưng yêu cầu đoàn kết không chỉ là một biện pháp tạm thời.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98-99.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc cần tiến hành bằng:",
        "options": {
            "A": "Con đường cách mạng bất bạo động",
            "B": "Con đường cách mạng bạo lực",
            "C": "Con đường cách mạng ôn hòa",
            "D": "Con đường cách mạng cải lương"
        },
        "answer": "B",
        "explanation": "Bạo lực cách mạng là sức mạnh của quần chúng, kết hợp lực lượng chính trị và lực lượng vũ trang để chống bạo lực phản cách mạng. Hồ Chí Minh đồng thời coi trọng hòa bình, thương lượng và chỉ sử dụng chiến tranh khi không thể tránh để bảo vệ độc lập.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 51-52."
    },
    {
        "question": "Theo Hồ Chí Minh, về bước đi trong thời kỳ quá độ, chúng ta phải:",
        "options": {
            "A": "Theo bước đi của các nước xã hội chủ nghĩa.",
            "B": "Căn cứ vào đặc điểm lịch sử cụ thể của nước ta từ đó có bước đi phù hợp.",
            "C": "Căn cứ vào đặc điểm lịch sử cụ thể của nước ta từ đó có bước đi phù hợp, đi bước nào vững chắc bước ấy.",
            "D": "Bước đi chậm, mạnh, vững chắc."
        },
        "answer": "C",
        "explanation": "Việt Nam có điểm xuất phát kinh tế, xã hội riêng, nên phải lựa chọn bước đi phù hợp và làm chắc từng bước. Học tập nước khác cần có chọn lọc, không nóng vội hoặc sao chép một mô hình sẵn có.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-64."
    },
    {
        "question": "Theo Hồ Chí Minh, nhân dân lao động làm chủ Nhà nước thì dẫn đến một hệ quả là nhân dân có quyền: (NHUNG HOÀNG)",
        "options": {
            "A": "Không chịu sự kiểm soát của Nhà nước",
            "B": "Kiểm soát Nhà nước",
            "C": "Không phải đóng thuế cho Nhà nước",
            "D": "Không phải tuân theo pháp luật"
        },
        "answer": "B",
        "explanation": "Quyền lực của Nhà nước do nhân dân trao, nên người dân có quyền giám sát và kiểm soát việc thực hiện quyền lực. Cán bộ phải chịu trách nhiệm trước dân, không được xem quyền được giao là đặc quyền riêng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 84,90-91."
    },
    {
        "question": "Theo Hồ Chí Minh, một trong những đặc điểm của Nhà nước pháp quyền là(NHUNG HOÀNG)",
        "options": {
            "A": "Nguyên tắc cơ bản của Nhà nước là hiệp thương dân chủ",
            "B": "Nhà nước lãnh đạo nhân dân thực hiện các nhiệm vụ cách mạng",
            "C": "Sự lãnh đạo của Đảng đối với Nhà nước",
            "D": "Nhà nước hợp hiến, hợp pháp"
        },
        "answer": "D",
        "explanation": "Nhà nước phải được thiết lập và hoạt động trên nền tảng Hiến pháp, pháp luật và sự lựa chọn hợp pháp của nhân dân. Việc tổ chức tổng tuyển cử, xây dựng Hiến pháp thể hiện yêu cầu đó đối với Nhà nước mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86-87."
    },
    {
        "question": "Trong di chúc Hồ Chí Minh viết rằng",
        "options": {
            "A": "Đảng phải có kế hoạch tốt để phát triển kinh tế, văn hóa",
            "B": "Đảng phải có kế hoạch tốt để phát triển kinh tế, chính trị",
            "C": "Đảng phải có kế hoạch tốt để phát triển kinh tế, xã hội",
            "D": "Đảng phải có lộ trình để phát triển các vấn đề xã hội cần thiết"
        },
        "answer": "A",
        "explanation": "Phát triển kinh tế và văn hóa nhằm nâng cao đời sống vật chất, tinh thần của nhân dân, phù hợp mục tiêu Hồ Chí Minh để lại. Giáo trình trình bày tinh thần Di chúc và các mục tiêu này, nhưng chưa dẫn nguyên văn đầy đủ câu về “kế hoạch tốt”; không dùng các trang đó để xác nhận từng chữ của trích dẫn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 35,58-59.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Đầu là câu trà lời chính xác nhất trong tác phẩm Di Chúc của Chủ tịch Hồ Chí Minh?)"
    },
    {
        "question": "Chọn phương án đúng nhất theo tư tưởng Hồ Chí Minh. Chủ nghĩa thực dân là kẻ thù của(073-356-8678)",
        "options": {
            "A": "Các dân tộc thuộc địa",
            "B": "Giai cấp công nhân",
            "C": "Giai cấp nông dân",
            "D": "Các dân tộc thuộc địa, giai cấp công nhân và nhân dân lao động toàn thế giới"
        },
        "answer": "D",
        "explanation": "Chủ nghĩa thực dân áp bức các dân tộc thuộc địa và gắn với hệ thống bóc lột của chủ nghĩa đế quốc. Vì vậy, đấu tranh chống thực dân có cơ sở liên kết nhân dân thuộc địa với giai cấp công nhân và nhân dân lao động ở các nước khác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 21-22,49-50,108."
    },
    {
        "question": "Theo Hồ Chí Minh, đại đoàn kết dân tộc phải luôn được nhận thức là vấn đề sống còn, quyết định:",
        "options": {
            "A": "Lực lượng của cách mạng.",
            "B": "Thắng lợi của cách mạng.",
            "C": "Thành bại của cách mạng.",
            "D": "Đích đến của cách mạng"
        },
        "answer": "C",
        "explanation": "Sự thống nhất và tập hợp được lực lượng nhân dân quyết định khả năng thực hiện mục tiêu cách mạng. Do đó, đại đoàn kết là vấn đề sống còn, liên quan trực tiếp đến thành bại, chứ không chỉ một lời kêu gọi tình cảm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98-99."
    },
    {
        "question": "Theo Hồ Chí Minh, động lực chủ yếu để phát triển đất nước là gì?",
        "options": {
            "A": "Sức mạnh đoàn kết của cả cộng đồng dân tộc",
            "B": "Sức mạnh của cá nhân con người",
            "C": "Sức mạnh thời đại",
            "D": "Vai trò lãnh đạo của Đảng"
        },
        "answer": "A",
        "explanation": "Sức mạnh cộng đồng được hình thành khi các lực lượng nhân dân cùng hướng đến lợi ích chung. Giáo trình nhấn mạnh nguồn lực con người, dân chủ và đoàn kết, trong đó con người là nhân tố quyết định sự phát triển.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 59-60,98."
    },
    {
        "question": "Theo Hồ Chí Minh, việc gì có hại cho dân dù nhỏ mấy cũng cố gắng:",
        "options": {
            "A": "Làm",
            "B": "Tránh",
            "C": "Học",
            "D": "Khắc phục"
        },
        "answer": "B",
        "explanation": "Lợi ích nhân dân là tiêu chuẩn đánh giá việc làm của Nhà nước và cán bộ. Vì thế, hành động gây hại cho dân phải tránh, kể cả khi tác hại nhỏ; không thể lấy quy mô nhỏ để biện minh cho việc làm sai.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86."
    },
    {
        "question": "Theo Hồ Chí Minh, ưu điểm lớn nhất của học thuyết Khổng Tử là gì?",
        "options": {
            "A": "Tinh thần hiếu học.",
            "B": "Quản lý xã hội bằng đạo đức.",
            "C": "Sự tu dưỡng đạo đức cá nhân.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Hồ Chí Minh tiếp thu có chọn lọc mặt tích cực của Nho giáo, đặc biệt việc tu dưỡng đạo đức và trách nhiệm của người hành động. Giáo trình xác nhận sự tiếp thu này, nhưng chưa dẫn nguyên văn nhận xét “ưu điểm lớn nhất” trong câu hỏi; không nên coi đó là đánh giá bao trùm mọi mặt của Nho giáo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 23.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Cách mạng giải phóng dân tộc muốn thắng lợi phải:",
        "options": {
            "A": "Có tổ chức đoàn thể lãnh đạo.",
            "B": "Có Đảng của giai cấp công nhân lãnh đạo.",
            "C": "Có một cá nhân xuất sắc lãnh đạo.",
            "D": "Có một giai cấp lãnh đạo."
        },
        "answer": "B",
        "explanation": "Đảng của giai cấp công nhân cung cấp đường lối, tổ chức và sự lãnh đạo để tập hợp sức mạnh toàn dân. Giáo trình xác định cách mạng giải phóng dân tộc muốn thắng lợi phải do Đảng Cộng sản lãnh đạo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48."
    },
    {
        "question": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn thắng lợi phải do ai lãnh đạo?",
        "options": {
            "A": "Đảng Cộng sản",
            "B": "Giai cấp công nhân",
            "C": "Giai cấp vô sản",
            "D": "Đảng của giai cấp tư sản"
        },
        "answer": "A",
        "explanation": "Đảng Cộng sản lãnh đạo việc xác định mục tiêu, đường lối và tổ chức lực lượng cách mạng. Nhờ đó, lòng yêu nước của quần chúng được chuyển thành phong trào có phương hướng và sức mạnh thống nhất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48."
    },
    {
        "question": "Theo Hồ Chí Minh, phải kiên quyết khắc phục kịp thời các phản động lực trong con người và tổ chức. Đó là:(NHUNG HOÀNG)",
        "options": {
            "A": "Chủ nghĩa cá nhân.",
            "B": "Chủ nghĩa vị kỷ",
            "C": "Phong cách tiểu tư sản",
            "D": "Phong cách tư sản"
        },
        "answer": "A",
        "explanation": "Chủ nghĩa cá nhân đặt lợi ích riêng lên trên lợi ích chung, sinh ra tham ô, quan liêu, chia rẽ và thiếu trách nhiệm. Nó cản trở động lực xây dựng xã hội mới, nên phải khắc phục cùng các biểu hiện tiêu cực khác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 61,65."
    },
    {
        "question": "Đâu là sự sáng tạo của Hồ Chí Minh về chủ nghĩa xã hội ở Việt Nam",
        "options": {
            "A": "Sáng tạo trong cách thức đi lên xây dựng chủ nghĩa xã hội",
            "B": "Phương pháp bạo lực cách mạng",
            "C": "Lựa chọn con đường đi lên xây dựng chủ nghĩa xã hội",
            "D": "Phân tích đúng tình hình nước ta"
        },
        "answer": "A",
        "explanation": "Sự sáng tạo thể hiện ở việc chọn con đường, bước đi và cách làm phù hợp một nước nông nghiệp lạc hậu quá độ lên chủ nghĩa xã hội. Hồ Chí Minh yêu cầu kiên định mục tiêu nhưng tránh rập khuôn kinh nghiệm nước khác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-64."
    },
    {
        "question": "Hồ Chí Minh vạch ra mâu thuẫn cơ bản của cách mạng dân tộc thuộc địa là",
        "options": {
            "A": "Nhân dân với thực dân, phong kiến",
            "B": "Nhân dân với thực dân, địa chủ",
            "C": "Nhân dân với thực dân, đế quốc",
            "D": ""
        },
        "answer": "C",
        "explanation": "Dưới ách thực dân, nhân dân thuộc địa bị tước quyền độc lập và bị áp bức, bóc lột. Mâu thuẫn với thực dân, đế quốc vì vậy là mâu thuẫn nổi bật phải giải quyết bằng cách mạng giải phóng dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 19-20,46-47.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Quy luật ra đời của Đảng Cộng sản Việt Nam được Hồ Chí Minh vạch ra:",
        "options": {
            "A": "Không khác với chủ nghĩa Mác-Lênin.",
            "B": "Trái ngược với chủ nghĩa Mác-Lênin.",
            "C": "Không liên quan đến chủ nghĩa Mác-Lênin.",
            "D": "Bổ sung vào kho tàng lý luận của chủ nghĩa Mác - Lênin."
        },
        "answer": "D",
        "explanation": "Bổ sung phong trào yêu nước vào sự kết hợp chủ nghĩa Mác - Lênin với phong trào công nhân làm rõ đặc điểm ra đời của Đảng ở Việt Nam. Đây là sự vận dụng, phát triển lý luận trong điều kiện thuộc địa, không phủ nhận vai trò của phong trào công nhân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72."
    },
    {
        "question": "Tư tưởng Hồ Chí Minh được hình thành và phát triển qua mấy giai đoạn?",
        "options": {
            "A": "3",
            "B": "4",
            "C": "5",
            "D": "6"
        },
        "answer": "C",
        "explanation": "Giáo trình chia quá trình hình thành, phát triển tư tưởng thành năm thời kỳ: trước tháng 6-1911; 1911-1920; cuối 1920-đầu 1930; đầu 1930-đầu 1941; đầu 1941-1969. Các mốc tương ứng sự chuyển biến về nhận thức, đường lối và thực tiễn lãnh đạo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 28-35."
    },
    {
        "question": "Để chuẩn bị thành lập Đảng Cộng sản Việt Nam, Nguyễn Ái Quốc đã từ Liên Xô về Trung Quốc năm nào?",
        "options": {
            "A": "1925",
            "B": "1927",
            "C": "1923",
            "D": "1924"
        },
        "answer": "D",
        "explanation": "Hoạt động ở Trung Quốc gắn với việc chuẩn bị tổ chức, đào tạo cán bộ và lập Hội Việt Nam Cách mạng Thanh niên năm 1925. Tuy nhiên, phần giáo trình này chưa nêu trực tiếp mốc chuyển từ Liên Xô về Trung Quốc năm 1924; đáp án D giữ theo bộ câu hỏi gốc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-31."
    },
    {
        "question": "\"Luận cương của V.I. Lênin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao. Tôi vui mừng đến phát khóc lên. Ngồi một mình trong buồng mà tôi nói to lên như đang nói trước quần chúng đông đảo: hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta\" Nguyễn Ái Quốc nói câu ấy khi đang ở đâu?",
        "options": {
            "A": "Anh",
            "B": "Trung Quốc",
            "C": "Pháp",
            "D": ""
        },
        "answer": "C",
        "explanation": "Nguyễn Ái Quốc đọc luận cương của Lênin khi đang hoạt động ở Pháp vào tháng 7-1920. Người tìm thấy lời giải về con đường giải phóng các dân tộc thuộc địa, dẫn đến bước chuyển sang lập trường cách mạng vô sản.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29-30,47.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Giá trị đạo đức nào sau đây ảnh hưởng chủ yếu đến sự hình thành tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Đạo đức Thiên chúa giáo",
            "B": "Đạo đức Phật giáo",
            "C": "Đạo đức Nho giáo",
            "D": ""
        },
        "answer": "C",
        "explanation": "Đạo đức Nho giáo, nhất là tư tưởng tu dưỡng và trách nhiệm với cộng đồng, là một nguồn văn hóa phương Đông được Hồ Chí Minh tiếp thu. Người đồng thời phê phán mặt bảo thủ, bất bình đẳng của Nho giáo và phát triển các giá trị phù hợp mục tiêu cách mạng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 23.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nguyễn Ái Quốc đến Liên Xô lần đầu khi nào?",
        "options": {
            "A": "1921",
            "B": "1922",
            "C": "1923",
            "D": "1924"
        },
        "answer": "C",
        "explanation": "Giáo trình đề cập hoạt động quốc tế của Nguyễn Ái Quốc và quá trình chuẩn bị cách mạng trong những năm 1920. Mốc đến Liên Xô lần đầu năm 1923 chưa được xác nhận trực tiếp ở nội dung đã đối chiếu; đây là dữ kiện giữ theo bộ câu hỏi gốc, cần nguồn tiểu sử để kiểm chứng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-31."
    },
    {
        "question": "Hồ Chí Minh không thừa nhận bản thân mình là:",
        "options": {
            "A": "Nhà khoa học",
            "B": "Nhà thơ",
            "C": "Nhà soạn nhac",
            "D": "Nhà chính trị chuyên nghiệp"
        },
        "answer": "B",
        "explanation": "Giáo trình bàn về quan niệm văn hóa và vai trò người nghệ sĩ, nhưng không đưa căn cứ trực tiếp cho câu hỏi Hồ Chí Minh tự nhận hay không tự nhận là nhà thơ. Vì vậy, B được giữ theo bộ câu hỏi gốc; không suy ra nhận định về cách Người tự gọi mình chỉ từ việc Người có sáng tác thơ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118,121-123."
    },
    {
        "question": "Nguồn gốc nào sau đây quyết định tư tưởng Hồ Chí Minh: (NHUNG HOÀNG)",
        "options": {
            "A": "Tư tưởng Tam dân của Tôn Trung Sơn",
            "B": "Tư tưởng của Khổng tử",
            "C": "Tư tưởng của chủ nghĩa Mác-Lênin",
            "D": "Tư tưởng của Giêsu"
        },
        "answer": "C",
        "explanation": "Chủ nghĩa Mác - Lênin cung cấp thế giới quan, phương pháp luận và con đường cách mạng vô sản cho Hồ Chí Minh. Giáo trình xác định đây là nguồn lý luận quyết định bước phát triển về chất của tư tưởng Người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 25-26."
    },
    {
        "question": "Người thầy giáo đầu tiên của Hồ Chí Minh là ai? (NHUNG HOÀNG)",
        "options": {
            "A": "Vương Thúc Quý",
            "B": "Phan Bội Châu",
            "C": "Nguyễn Sinh Sắc",
            "D": "Phan Châu Trình"
        },
        "answer": "C",
        "explanation": "Giáo trình ghi ảnh hưởng của cha là Nguyễn Sinh Sắc, người có tinh thần yêu nước và tư tưởng thương dân, đối với Hồ Chí Minh. Tuy nhiên, trang này chưa xác nhận trực tiếp danh xưng “người thầy giáo đầu tiên”; đáp án C là dữ kiện cần kiểm chứng thêm bằng nguồn tiểu sử.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 28."
    },
    {
        "question": "Nguyễn Ái Quốc tham dự Đại hội Tua, tán thành Quốc tế 3, tham gia thành lập Đảng Cộng sản Pháp thời gian nào?",
        "options": {
            "A": "12/1921",
            "B": "12/1918",
            "C": "12/1919",
            "D": "12/1920"
        },
        "answer": "D",
        "explanation": "Tại Đại hội Tours cuối tháng 12-1920, Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế III và tham gia thành lập Đảng Cộng sản Pháp. Sự kiện đánh dấu bước chuyển từ người yêu nước sang người cộng sản.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29-30."
    },
    {
        "question": "Theo Hồ Chí Minh, học chủ nghĩa Mác - Lênin nghĩa là gì?",
        "options": {
            "A": "Học thuộc các luận điểm lý luận.",
            "B": "Để sống với nhau có tình, có nghĩa.",
            "C": "Để chứng tỏ trình độ lý luận.",
            "D": "Tất cả các phương án."
        },
        "answer": "B",
        "explanation": "Học chủ nghĩa Mác - Lênin phải thể hiện bằng quan hệ có tình, có nghĩa với con người. Chỉ thuộc lý luận mà không biết thương yêu, giúp đỡ người khác thì chưa thể hiện đúng tinh thần học và thực hành.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 131."
    },
    {
        "question": "Tư tưởng Hồ Chí Minh được hình thành trong bối cảnh nào?",
        "options": {
            "A": "Chủ nghĩa tư bản đang trong giai đoạn tự do cạnh tranh.",
            "B": "Chủ nghĩa tư bản từ giai đoạn tự do cạnh tranh sang giai đoạn độc quyền.",
            "C": "Chủ nghĩa tư bản đang trong giai đoạn hình thành.",
            "D": "Chủ nghĩa xã hội đang trong giai đoạn phát triển."
        },
        "answer": "B",
        "explanation": "Sự chuyển sang chủ nghĩa đế quốc làm tăng xâm chiếm thuộc địa và mâu thuẫn giữa các dân tộc bị áp bức với đế quốc. Bối cảnh ấy, cùng Cách mạng Tháng Mười, tạo điều kiện lịch sử cho Hồ Chí Minh tìm con đường giải phóng mới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 21-22."
    },
    {
        "question": "Một trong những quan điểm cơ bản nghiên cứu tư tưởng Hồ Chí Minh là: (NHUNG HOÀNG)",
        "options": {
            "A": "Quan điểm đồng nhất",
            "B": "Quan điểm lịch sử cụ thể",
            "C": "Quan điểm cách mạng",
            "D": "Quan điểm phát triển"
        },
        "answer": "B",
        "explanation": "Quan điểm lịch sử cụ thể yêu cầu xem tư tưởng và hành động trong hoàn cảnh, thời điểm, nhiệm vụ thực tế đã hình thành chúng. Nhờ đó tránh áp dụng một nhận định vào mọi giai đoạn mà bỏ qua sự thay đổi của tình hình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 12."
    },
    {
        "question": "Quan điểm nào sau đây thuộc về một trong những cơ sở phương pháp luận khi nghiên cứu tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Quan điểm toàn diện và hệ thống",
            "B": "Quan điểm khách quan và cụ thể",
            "C": "Quan điểm cách mạng và khoa học",
            "D": "Quan điểm toàn diện và cụ thể"
        },
        "answer": "A",
        "explanation": "Quan điểm toàn diện và hệ thống yêu cầu xem các nội dung tư tưởng trong mối liên hệ, thống nhất với nhau. Không thể tách một câu nói khỏi toàn bộ mục tiêu và phương pháp của Hồ Chí Minh rồi giải thích phiến diện.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 12-13."
    },
    {
        "question": "Một trong những tiền đề tư tưởng, lí luận dẫn đến sự hình thành tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Giá trị truyền thống dân tộc Việt Nam",
            "B": "Giá trị văn hiến dân tộc Việt Nam",
            "C": "Giá trị tư tưởng dân tộc Việt Nam",
            "D": "Giá trị văn minh dân tộcViệt Nam"
        },
        "answer": "A",
        "explanation": "Giá trị truyền thống dân tộc như yêu nước, đoàn kết, nhân nghĩa, cần cù là nền tảng văn hóa mà Hồ Chí Minh kế thừa. Đây là một tiền đề tư tưởng, lý luận bên cạnh tinh hoa nhân loại và chủ nghĩa Mác - Lênin.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 22-23."
    },
    {
        "question": "Một trong những truyền thống tốt đẹp của tư tưởng và văn hoá Việt Nam được Hồ Chí Minh tiếp thu để hình thành tư tưởng của mình là:",
        "options": {
            "A": "Chủ nghĩa yêu nước Việt Nam.",
            "B": "Những mặt tích cực của Nho Giáo",
            "C": "Tư tưởng vị tha của Phật giáo",
            "D": "Tư tưởng bác ái của Thiên Chúa Giáo."
        },
        "answer": "A",
        "explanation": "Chủ nghĩa yêu nước là giá trị truyền thống nổi bật, thúc đẩy Hồ Chí Minh tìm đường cứu nước. Khi gặp chủ nghĩa Mác - Lênin, lòng yêu nước được gắn với con đường giải phóng dân tộc theo lập trường cách mạng vô sản.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 22."
    },
    {
        "question": "Vấn đề dân tộc trong tư tưởng Hồ Chí Minh trong thời đại cách mạng vô sản là vấn đề:",
        "options": {
            "A": "Vấn đề dân tộc chủ nghĩa",
            "B": "Vấn đề dân tộc thuộc địa",
            "C": "Vấn đề dân tộc phương Đông",
            "D": "Vấn đề dân tộc nói chung"
        },
        "answer": "B",
        "explanation": "Trọng tâm là quyền độc lập, tự do và con đường giải phóng của các dân tộc đang bị thực dân thống trị. Vì thế, trong bối cảnh câu hỏi, vấn đề dân tộc được xem xét chủ yếu dưới hình thức vấn đề dân tộc thuộc địa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-47."
    },
    {
        "question": "Khi ở Pháp Hồ Chí Minh đã sử dụng vật dụng nào để sưởi ấm?",
        "options": {
            "A": "Viên gạch",
            "B": "Hòn đá",
            "C": "Gối",
            "D": "Lò sưởi"
        },
        "answer": "A",
        "explanation": "Giáo trình nói về quá trình bôn ba và hoạt động của Hồ Chí Minh ở phương Tây, nhưng không kể chi tiết dùng viên gạch sưởi ấm tại Pháp. Đáp án A giữ theo bộ câu hỏi gốc; không thể dùng nội dung tổng quát của giáo trình để xác nhận giai thoại này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 29."
    },
    {
        "question": "Theo Hồ Chí Minh đối tượng cơ bản của cách mạng thuộc địa là ai?",
        "options": {
            "A": "Thực dân, tay sai phản động",
            "B": "Thực dân, đế quốc",
            "C": "Thực dân, tư sản",
            "D": "Thực dân, phong kiến"
        },
        "answer": "A",
        "explanation": "Cách mạng giải phóng dân tộc phải xóa ách thống trị của thực dân và các lực lượng tay sai cản trở độc lập. Việc xác định đối tượng đấu tranh dựa vào mâu thuẫn dân tộc chủ yếu, không đồng nhất mọi người có tài sản với kẻ thù.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 43,46-47."
    },
    {
        "question": "Theo Hồ Chí Minh, giải quyết vấn đề dân tộc luôn gắn với vấn đề : (NHUNG HOÀNG)",
        "options": {
            "A": "Xã hội",
            "B": "Người lao động",
            "C": "Giai cấp",
            "D": "Nông dân"
        },
        "answer": "C",
        "explanation": "Hồ Chí Minh giải quyết vấn đề dân tộc từ lập trường giai cấp công nhân, gắn độc lập với chủ nghĩa xã hội. Tuy vậy, trong điều kiện thuộc địa phải ưu tiên giải phóng dân tộc, không máy móc đặt đấu tranh giai cấp lên trước.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-47,65-67."
    },
    {
        "question": "Các luận điểm sau đây đều thể hiện tư tưởng dựa vào sức mình là chính. Luận điểm nào không phải của Hồ Chí Minh? (NHUNG HOÀNG)",
        "options": {
            "A": "Sự nghiệp giải phóng của giai cấp công nhân phải do bản thân giai cấp công nhân tự làm lấy.",
            "B": "Công cuộc giải phóng các dân tộc thuộc địa chỉ có thể thực hiện được bằng sự nỗ lực của bản thân các dân tộc đó.",
            "C": "Đem sức ta mà tự giải phóng cho ta.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo trình chứng minh Hồ Chí Minh yêu cầu các dân tộc thuộc địa tự nỗ lực giải phóng, đồng thời đoàn kết quốc tế. Tuy nhiên, việc phân biệt tác giả từng câu trích trong lựa chọn cần nguồn văn bản gốc; giáo trình chưa xác nhận trực tiếp tác giả của câu A, nên đáp án được giữ theo tài liệu câu hỏi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 49-51.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nguyễn Ái Quốc có tên là Hồ Chí Minh vào năm nào?",
        "options": {
            "A": "Năm 1942",
            "B": "Năm 1941",
            "C": "Năm 1943",
            "D": "Năm 1940"
        },
        "answer": "A",
        "explanation": "Giáo trình trình bày hoạt động của Người từ khi trở về nước và lãnh đạo cách mạng, nhưng chưa xác nhận trực tiếp thời điểm bắt đầu dùng tên Hồ Chí Minh năm 1942. Đây là mốc tiểu sử trong bộ câu hỏi, cần đối chiếu nguồn tiểu sử hoặc văn bản đương thời.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 33-35."
    },
    {
        "question": "Thực chất vấn đề dân tộc thuộc địa trong tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Thực hiện quyền tự quyết đối với tất cả các dân tộc.",
            "B": "Đòi quyền tự do dân chủ tối thiểu cho nhân dân.",
            "C": "Đấu tranh giải phóng các dân tộc thuộc địa khỏi sự áp bức, thống trị của nước ngoài, giành độc lập dân tộc, thành lập nhà nước dân tộc độc lập và đưa đất nước phát triển theo xu thế của t",
            "D": ""
        },
        "answer": "C",
        "explanation": "Nội dung phù hợp là chống ách thống trị thuộc địa, giành độc lập và lựa chọn hướng phát triển gắn với chủ nghĩa xã hội. Lưu ý: lựa chọn C trong tài liệu gốc bị cắt ở cuối câu, nên không thể xem phần văn bản bị thiếu là một trích dẫn hoàn chỉnh từ giáo trình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-47,65-66.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh hoạt động tại Thái Lan vào thời gian nào?",
        "options": {
            "A": "1933-1937",
            "B": "1930-1931",
            "C": "1932-1933",
            "D": "1928-1929"
        },
        "answer": "D",
        "explanation": "Giáo trình giới thiệu quá trình hoạt động và chuẩn bị cách mạng trong giai đoạn những năm 1920, nhưng chưa nêu trực tiếp thời gian ở Thái Lan 1928-1929. Đáp án D được giữ theo bộ câu hỏi gốc; mốc này cần nguồn tiểu sử bổ sung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-31."
    },
    {
        "question": "Hồ Chí Minh là người đấu tranh đòi quyền độc lập cho:(NHUNG HOÀNG)",
        "options": {
            "A": "Dân tộc Việt Nam .",
            "B": "Các dân tộc thuộc địa ở phương Đông.",
            "C": "Dân tộc Việt Nam và tất cả các dân tộc bị áp bức trên thế giới.",
            "D": "Dân tộc thuộc địa ở Đông Dương."
        },
        "answer": "C",
        "explanation": "Hồ Chí Minh khẳng định quyền độc lập, tự do của mọi dân tộc, đồng thời đấu tranh cho độc lập Việt Nam. Lập trường ấy kết hợp lòng yêu nước với đoàn kết và ủng hộ các dân tộc bị áp bức trên thế giới.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-43,108-111."
    },
    {
        "question": "Hồ Chí Minh đến Nga lần đầu tiên vào năm nào?",
        "options": {
            "A": "Năm 1923",
            "B": "Năm 1924",
            "C": "Năm 1928",
            "D": "Năm 1920"
        },
        "answer": "A",
        "explanation": "Câu này hỏi cùng mốc tiểu sử với câu đến Liên Xô lần đầu. Giáo trình đang dùng chưa xác nhận trực tiếp năm 1923, nên đáp án A giữ theo bộ câu hỏi gốc và cần kiểm chứng bằng nguồn tiểu sử; không suy ra mốc năm từ nội dung lý luận.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-31."
    },
    {
        "question": "Theo Hồ Chí Minh",
        "options": {
            "A": "Giải phóng dân tộc tạo tiền đề để giải phóng giai cấp",
            "B": "Giải phóng dân tộc tạo tiền đề để giải phóng nhân loại",
            "C": "Giải phóng dân tộc tạo tiền đề để giải phóng người lao động",
            "D": "Giải phóng dân tộc tạo tiền đề để giải phóng xã hội"
        },
        "answer": "A",
        "explanation": "Khi một dân tộc còn bị ngoại bang thống trị, nhân dân chưa có điều kiện tự quyết định vận mệnh xã hội. Giành độc lập tạo tiền đề để giải quyết áp bức giai cấp và bảo đảm con người được phát triển tự do.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-47,137-138."
    },
    {
        "question": "Hồ Chí Minh cho rằng:",
        "options": {
            "A": "Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc.",
            "B": "Độc lập, tự do là tất yếu đối với các dân tộc.",
            "C": "Độc lập, tự do là khát vọng thiêng liêng của mọi dân tộc.",
            "D": "Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của riêng dân tộc Việt Nam."
        },
        "answer": "A",
        "explanation": "Hồ Chí Minh mở rộng tư tưởng về quyền con người thành quyền sống, quyền tự do và độc lập của dân tộc. Mọi dân tộc đều bình đẳng về quyền đó, bất kể lớn hay nhỏ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-43."
    },
    {
        "question": "Các lực lượng thực hiện giải phóng dân tộc, giải phóng giai cấp, giải phóng con người theo tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Đảng cộng sản.",
            "B": "Khối đại đoàn kết dân tộc, đoàn kết toàn dân mà nòng cốt là liên minh công-nông-trí thức.",
            "C": "Các lực lượng cách mạng thế giới.",
            "D": "Tất cả các phương án."
        },
        "answer": "D",
        "explanation": "Đảng đảm nhiệm vai trò lãnh đạo; khối đại đoàn kết là lực lượng trong nước; các lực lượng cách mạng thế giới tạo sự phối hợp và hỗ trợ quốc tế. Các vai trò khác nhau cùng góp phần thực hiện mục tiêu giải phóng, nên chọn phương án tổng hợp.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48-49,100,106-108."
    },
    {
        "question": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc cần được tiến hành:(NHUNG HOÀNG)",
        "options": {
            "A": "Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc",
            "B": "Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản thế giới",
            "C": "Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng thuộc địa",
            "D": "Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng tư sản ở chính quốc"
        },
        "answer": "A",
        "explanation": "Nhân dân thuộc địa có khả năng tự phát huy lực lượng và điều kiện cách mạng của mình, không phải chờ cách mạng ở chính quốc. Luận điểm này khắc phục sự thụ động và đề cao tính chủ động, sáng tạo của phong trào giải phóng dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 49-51."
    },
    {
        "question": "Hồ Chí Minh trực tiếp chỉ huy chiến dịch nào sau đây trong kháng chiến chống Pháp?",
        "options": {
            "A": "Chiến dịch Đông Xuân",
            "B": "Chiến dịch Điện Biên Phủ",
            "C": "Chiến dịch Biên giới",
            "D": ""
        },
        "answer": "C",
        "explanation": "Giáo trình nêu vai trò lãnh đạo kháng chiến chống Pháp của Hồ Chí Minh nhưng không xác nhận việc “trực tiếp chỉ huy” một chiến dịch cụ thể. Cần phân biệt sự lãnh đạo, chỉ đạo của Chủ tịch Hồ Chí Minh với chức danh chỉ huy chiến dịch; cách diễn đạt câu hỏi và đáp án C phải được kiểm chứng bằng nguồn lịch sử quân sự.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 34-35.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, nhiệm vụ hàng đầu, trên hết, trước hết của cách mạng Việt Nam là :",
        "options": {
            "A": "Giải phóng dân tộc.",
            "B": "Giải phóng giai cấp.",
            "C": "Giải phóng con người.",
            "D": "Tất cả các phương án"
        },
        "answer": "A",
        "explanation": "Giải phóng dân tộc là nhiệm vụ trước hết vì ách thuộc địa tước quyền độc lập của toàn dân. Chỉ khi giải quyết yêu cầu này mới có nền tảng để tiếp tục thực hiện các mục tiêu xã hội và giải phóng con người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-47."
    },
    {
        "question": "Giải phóng con người theo tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Giải phóng con người với tư cách từng cá nhân",
            "B": "Giải phóng con người với tư cách là cả loài người.",
            "C": "Giải phóng con người với tư cách từng cá nhân và cả loài người.",
            "D": "Giải phóng những người bị bóc lột."
        },
        "answer": "C",
        "explanation": "Giải phóng con người vừa là giải phóng mỗi cá nhân khỏi áp bức, nghèo nàn và hạn chế phát triển, vừa là sự nghiệp chung của nhân loại. Nó gắn với giải phóng dân tộc, giai cấp và bảo đảm con người có điều kiện sống, học tập, phát triển.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 137-138."
    },
    {
        "question": "Theo Hồ Chí Minh, nội dung cốt lõi của vấn đề dân tộc thuộc địa là gì?",
        "options": {
            "A": "Tự do, dân chủ",
            "B": "Độc lập, tự do",
            "C": "Người cày có ruộng",
            "D": "Quyền con người"
        },
        "answer": "B",
        "explanation": "Độc lập, tự do là yêu cầu trung tâm của dân tộc bị thống trị. Giáo trình còn nhấn mạnh độc lập phải thực chất và gắn với hạnh phúc nhân dân, không chỉ là tên gọi hoặc hình thức nhà nước.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42-45."
    },
    {
        "question": "Cách mạng giải phóng dân tộc là sự nghiệp đoàn kết của:",
        "options": {
            "A": "Giai cấp công nhân.",
            "B": "Giai cấp công nhân và nông dân",
            "C": "Toàn dân, trên cơ sở liên minh công-nông.",
            "D": "Công - nông - trí thức"
        },
        "answer": "C",
        "explanation": "Mọi lực lượng yêu nước đều có thể tham gia sự nghiệp giải phóng dân tộc. Công nhân và nông dân là lực lượng gốc, tạo nền tảng vững chắc cho việc đoàn kết toàn dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48-49."
    },
    {
        "question": "Theo Hồ Chí Minh, nhiệm vụ lịch sử của thời kỳ quá độ ở nước ta là phải:",
        "options": {
            "A": "Xây dựng nền tảng vật chất và kỹ thuật của chủ nghĩa xã hội.",
            "B": "Cải tạo nền kinh tế cũ và xây dựng nền kinh tế mới.",
            "C": "Tất cả các phương án.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Nhiệm vụ kinh tế gồm cải tạo nền kinh tế cũ và xây dựng nền kinh tế mới để tạo nền tảng vật chất, kỹ thuật của chủ nghĩa xã hội. Hai nội dung bổ sung nhau, trong đó xây dựng là nhiệm vụ chủ chốt và lâu dài, nên phương án tổng hợp phù hợp.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-63.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh:",
        "options": {
            "A": "Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Việt Nam.",
            "B": "Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng thế giới",
            "C": "Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Đông Nam Á.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Hồ Chí Minh xem tiến lên chủ nghĩa xã hội là xu hướng phát triển khách quan, đồng thời gắn với con đường cách mạng Việt Nam. Tính tất yếu không có nghĩa mọi nước phải có cùng thời gian, hình thức hay bước đi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 54-55.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Hồ Chí Minh cho rằng: A. Sự ra đời của CNXH trên phạm vi quốc tế là quy luật phát triển của lịch sữ xã hội B. Sự ra đời của CNXH trên phạm vi quốc tế là quy luật phát triển của nhân loại C. Sự ra đời của CNXH trên phạm vi quốc tế là quy luật phát triển của lịch sử thế giới)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, nền kinh tế mà chúng ta xây dựng phải được tạo lập trên cơ sở:",
        "options": {
            "A": "Nền nông nghiệp hiện đại.",
            "B": "Nền công nghiệp hiện đại.",
            "C": "Khoa học kỹ thuật tiên tiến.",
            "D": "Chế độ công hữu về tư liệu sản xuất."
        },
        "answer": "D",
        "explanation": "Giáo trình xác định kinh tế xã hội chủ nghĩa dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về các tư liệu sản xuất chủ yếu. Cần giữ từ “chủ yếu”, vì không có nghĩa mọi vật dụng, mọi tài sản cá nhân đều phải là công hữu.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 56."
    },
    {
        "question": "Theo Hồ Chí Minh, trong thời kỳ quá độ còn tồn tại hình thức:",
        "options": {
            "A": "Sở hữu của nhà nước và sở hữu của hợp tác xã.",
            "B": "Sở hữu của người lao động riêng lẻ và sở hữu của nhà tư bản.",
            "C": "Tất cả các phương án.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Thời kỳ quá độ là quá trình cải tạo nền kinh tế cũ và xây dựng nền kinh tế mới, nên chưa thể đồng nhất với cơ cấu sở hữu của xã hội xã hội chủ nghĩa hoàn chỉnh. Tuy nhiên, giáo trình này chưa liệt kê trực tiếp đủ bốn hình thức sở hữu như các lựa chọn; đáp án tổng hợp C cần đối chiếu thêm văn bản gốc về kinh tế nhiều thành phần.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-63.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Con đường quá độ lên chủ nghĩa xã hội ở nước ta đươc Hồ Chí Minh vạch ra dựa trên: (073-356-8678)",
        "options": {
            "A": "Chủ nghĩa Mác-Lênin.",
            "B": "Chủ nghĩa dân chủ.",
            "C": "Sự kết hợp giữa chủ nghĩa Mác-lênin với thực tế Việt Nam.",
            "D": "Kết hợp giữa chủ nghĩa Tam dân và thực tế Việt Nam."
        },
        "answer": "C",
        "explanation": "Chủ nghĩa Mác - Lênin cung cấp nền tảng phương pháp, còn điều kiện Việt Nam quyết định cách vận dụng và bước đi cụ thể. Vì vậy, con đường quá độ phải kết hợp lý luận với thực tiễn, tránh cả xa rời nền tảng lẫn sao chép máy móc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 63-64."
    },
    {
        "question": "Theo Hồ Chí Minh, CNXH phải do:",
        "options": {
            "A": "Nhân dân lao động làm chủ",
            "B": "Giai cấp công nhân làm chủ",
            "C": "Giai cấp nông dân làm chủ",
            "D": "Công nhân - nông dân - trí thức làm chủ"
        },
        "answer": "A",
        "explanation": "Nhân dân lao động là chủ thể quyền lực và chủ thể xây dựng chủ nghĩa xã hội. Đảng lãnh đạo, nhưng sự nghiệp ấy phải dựa vào hoạt động chủ động của nhân dân và nhằm nâng cao đời sống nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 55,57."
    },
    {
        "question": "Nội dung nào không đúng với tư tưởng Hồ Chí Minh, để xác định bước đi và tìm cách làm của chủ nghĩa xã hội phù hợp với Việt Nam cần phải:",
        "options": {
            "A": "Theo bước đi của các nước xã hội chủ nghĩa, vừa làm vừa tìm kiếm mô hình phù hợp.",
            "B": "Quán triệt các nguyên lý cơ bản của chủ nghĩa Mác-Lênin về xây dựng chế độ mới, có thể tham khảo, học tập kinh nghiệm của các nước anh em.",
            "C": "",
            "D": ""
        },
        "answer": "A",
        "explanation": "Không được lấy bước đi của nước khác làm khuôn bắt buộc cho Việt Nam. Hồ Chí Minh yêu cầu học kinh nghiệm có chọn lọc và xuất phát từ điều kiện lịch sử, kinh tế, xã hội của nước mình để xác định cách làm phù hợp.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-64.\nTài liệu không có lựa chọn C, D."
    },
    {
        "question": "Theo Hồ Chí Minh, nội dung nào không đúng để phát huy động lực con người?(NHUNG HOÀNG)",
        "options": {
            "A": "Phát huy sức mạnh đoàn kết của cả cộng đồng dân tộc",
            "B": "Phát huy sức mạnh của cá nhân con người",
            "C": "Phát huy các yếu tố chính trị, tinh thần",
            "D": "Phát huy trí lực, tài lực và nhân lực của nhân dân"
        },
        "answer": "B",
        "explanation": "Đáp án B cần kiểm tra lại: phát huy năng lực từng cá nhân không đồng nghĩa với chủ nghĩa cá nhân. Giáo trình coi con người là động lực quan trọng và yêu cầu bảo đảm lợi ích cá nhân chính đáng trong sự hài hòa với tập thể. Vì vậy, không đủ căn cứ để loại B chỉ vì phương án nói đến sức mạnh cá nhân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 59-61,63."
    },
    {
        "question": "Quan điểm của Hồ Chí Minh là:",
        "options": {
            "A": "Tiến lên chủ nghĩa xã hội là bước phát triển tất yếu đối với các nước phương Đông.",
            "B": "Tiến lên chủ nghĩa xã hội là bước phát triển tất yếu của các nước đang phát triển.",
            "C": "Tiến lên chủ nghĩa xã hội là bước phát triển tất yếu của các nước trên thế giới.",
            "D": "Tiến lên chủ nghĩa xã hội là bước phát triển tất yếu ở Việt Nam sau khi nước nhà giành được độc lập theo con đường cách mạng vô sản."
        },
        "answer": "D",
        "explanation": "Sau khi giành độc lập theo con đường cách mạng vô sản, tiến lên chủ nghĩa xã hội là hướng phát triển để giải phóng nhân dân đầy đủ hơn. Độc lập tạo tiền đề, còn chủ nghĩa xã hội củng cố độc lập và bảo đảm đời sống tự do, hạnh phúc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 54-55,65-66."
    },
    {
        "question": "Ham muốn tột bậc của Hồ Chí Minh là gì?",
        "options": {
            "A": "Nước được độc lập",
            "B": "Dân được tự do",
            "C": "Đồng bào ai cũng có cơm ăn, áo mặc, được học hành",
            "D": "Tất cả các phương án"
        },
        "answer": "D",
        "explanation": "Ham muốn của Hồ Chí Minh bao gồm độc lập cho nước, tự do cho dân và điều kiện sống, học tập cho mọi người. Ba nội dung gắn nhau: độc lập phải đem lại lợi ích cụ thể cho nhân dân, nên chọn phương án tổng hợp.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 43-44."
    },
    {
        "question": "Trong bản di chúc, Hồ Chí Minh có viết điều mong muốn cuối cùng là:",
        "options": {
            "A": "Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh và góp phần xứng đáng vào sự nghiệp cách mạng thế giới.",
            "B": "Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh và góp phần xứng đáng vào sự nghiệp cách mạng khu vực.",
            "C": "Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh và góp phần xứng đáng vào sự nghiệp cách mạng chung.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo trình dẫn điều mong muốn cuối cùng trong Di chúc về một Việt Nam hòa bình, thống nhất, độc lập, dân chủ, giàu mạnh và đóng góp cho cách mạng thế giới. Nó kết hợp mục tiêu phát triển đất nước với trách nhiệm quốc tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 35.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là bản chất của CNXH trong tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Có xã hội dân sự",
            "B": "Có xã hội dân quyền",
            "C": "Có nền chính trị dân chủ",
            "D": ""
        },
        "answer": "C",
        "explanation": "Chủ nghĩa xã hội là xã hội do nhân dân lao động làm chủ, với quyền lực thuộc về nhân dân. Nền chính trị dân chủ là một đặc trưng cơ bản, bên cạnh kinh tế phát triển, văn hóa, đạo đức và quan hệ xã hội công bằng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 55.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, nhân tố nào sau đây quyết định thành công của thời kỳ quá độ lên CNXH:",
        "options": {
            "A": "Con người",
            "B": "Văn hóa",
            "C": "Xã hội",
            "D": "Chính trị"
        },
        "answer": "A",
        "explanation": "Con người tổ chức, sử dụng các nguồn lực và trực tiếp thực hiện công cuộc xây dựng xã hội mới. Vì vậy, phát huy dân chủ, lợi ích, năng lực và sự đoàn kết của nhân dân là yếu tố quyết định, còn các điều kiện vật chất cần được con người khai thác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 57,59-61."
    },
    {
        "question": "Hồ Chí Minh cho rằng chủ nghĩa xã hội",
        "options": {
            "A": "Phù hợp với các dân tộc phương Đông",
            "B": "Phù hợp với các dân tộc phương Tây",
            "C": "Phù hợp với các nước thuộc địa hơn các nước chính quốc",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo trình giải thích chủ nghĩa xã hội hướng tới giải phóng, ấm no và hạnh phúc, với con đường phát triển khác nhau tùy quốc gia. Tuy nhiên, nhận xét riêng rằng chủ nghĩa xã hội “phù hợp với các dân tộc phương Đông” chưa được dẫn trực tiếp; không nên hiểu mọi nước phương Đông đều có cùng hoàn cảnh hay mô hình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53-55.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo quan điểm của Hồ Chí Minh, đặc điểm của thời kỳ quá độ ở Việt Nam là gì?(NHUNG HOÀNG)",
        "options": {
            "A": "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không qua giai đoạn phát triển tư bản chủ nghĩa",
            "B": "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không qua giai đoạn phát triển xã hội dân chủ",
            "C": "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không qua giai đoạn phát triển xã hội phong kiến",
            "D": "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, thông qua giai đoạn phát triển tư bản chủ nghĩa"
        },
        "answer": "A",
        "explanation": "Đặc điểm nổi bật là Việt Nam xuất phát từ nền nông nghiệp lạc hậu và không trải qua giai đoạn phát triển tư bản chủ nghĩa. Điều đó khiến thời kỳ quá độ khó khăn, lâu dài và đòi hỏi xây dựng cơ sở vật chất, kỹ thuật từ điểm xuất phát thấp.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62."
    },
    {
        "question": "Theo Hồ Chí Minh, trong thời kỳ quá độ, nền kinh tế phải ưu tiên là:",
        "options": {
            "A": "Kinh tế hợp tác xã.",
            "B": "Kinh tế tư bản tư nhân.",
            "C": "Kinh tế thủ công và lao động riêng lẻ.",
            "D": "Kinh tế quốc doanh."
        },
        "answer": "D",
        "explanation": "Giáo trình ghi kinh tế quốc doanh có vai trò lãnh đạo nền kinh tế quốc dân và phải được ưu tiên phát triển. Đồng thời, Nhà nước cần khuyến khích, hướng dẫn, giúp đỡ kinh tế hợp tác xã, chứ không chỉ chăm lo một thành phần.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 58."
    },
    {
        "question": "Theo Hồ Chí Minh, cách mạng XHCN do:",
        "options": {
            "A": "Đảng lãnh đạo",
            "B": "Giai cấp công nhân lãnh đạo",
            "C": "Tầng lớp trí thức lãnh đạo",
            "D": "Công - nông - trí lãnh đạo"
        },
        "answer": "A",
        "explanation": "Đảng lãnh đạo việc xác định đường lối và tổ chức công cuộc xây dựng chủ nghĩa xã hội. Nhân dân là chủ thể thực hiện, nên sự lãnh đạo phải phát huy quyền làm chủ và sức mạnh của nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 57,67.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo Hồ Chí Minh, cách mạng xã hội chủ nghĩa phải tiến hành do ai lãnh đạo? A. Giai cấp nông dân và công nhân lãnh đạo B. Giai cấp công nhân lãnh đạo C. Tầng lớp trí thức lãnh đạo D. Giai cấp nông dân lãnh đạo)"
    },
    {
        "question": "Nội dung nào không có trong cách tiếp cận của Hồ Chí Minh về chủ nghĩa xã hội:",
        "options": {
            "A": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội trên phương diện kinh tế.",
            "B": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ khát vọng giải phóng dân tộc Việt Nam.",
            "C": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội trên phương diện đạo đức.",
            "D": "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ văn hóa."
        },
        "answer": "A",
        "explanation": "Đáp án A không phù hợp nếu hiểu câu hỏi theo nghĩa Hồ Chí Minh không tiếp cận chủ nghĩa xã hội về kinh tế. Giáo trình trình bày rõ các góc tiếp cận và đặc trưng kinh tế như lực lượng sản xuất hiện đại, công hữu về tư liệu sản xuất chủ yếu. Vì vậy, không thể loại phương diện kinh tế khỏi quan niệm của Người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53-56."
    },
    {
        "question": "Quan điểm nào sau đây là tư cách Đảng viên theo tư tưởng Hồ Chí Minh?(NHUNG HOÀNG)",
        "options": {
            "A": "Đặt lợi ích của Đảng, của con người lên trên hết",
            "B": "Đặt lợi ích của Đảng, của nhân dân lên trên hết",
            "C": "Đặt lợi ích của Đảng, của đất nước lên trước hết",
            "D": ""
        },
        "answer": "B",
        "explanation": "Đảng viên phải ưu tiên lợi ích của Đảng, cách mạng và nhân dân, không dùng tổ chức để tìm lợi riêng. Yêu cầu này gắn với việc chống chủ nghĩa cá nhân và thực hiện trách nhiệm phục vụ nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 79-80.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Bản chất giai cấp công nhân của Đảng Cộng sản Việt Nam thể hiện ở:",
        "options": {
            "A": "Số lượng Đảng viên trong Đảng.",
            "B": "Trình độ Đảng viên trong Đảng.",
            "C": "Nền tảng lý luận, mục tiêu, đường lối, nguyên tắc tổ chức của Đảng.",
            "D": "Tất cả các phương án."
        },
        "answer": "C",
        "explanation": "Bản chất giai cấp công nhân thể hiện ở nền tảng chủ nghĩa Mác - Lênin, mục tiêu, đường lối và nguyên tắc tổ chức. Không thể chỉ căn cứ thành phần xuất thân của từng đảng viên để xác định bản chất của toàn Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48,72,75."
    },
    {
        "question": "Theo Hồ Chí Minh, người cán bộ phải có đủ đức và tài, phẩm chất và năng lực, trong đó:",
        "options": {
            "A": "Đức là phẩm chất gốc.",
            "B": "Tài là phẩm chất gốc.",
            "C": "Năng lực là phẩm chất gốc.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đức định hướng mục tiêu và cách sử dụng tài, nên là gốc của người cán bộ. Tuy nhiên, có đức mà thiếu năng lực cũng không hoàn thành công việc; yêu cầu đầy đủ là vừa có phẩm chất, vừa có năng lực phục vụ dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 124-125.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh gọi đồng bào Miền nam với cái tên thân thương và trìu mến đó là",
        "options": {
            "A": "Thành đồng tổ quốc",
            "B": "Anh hùng bất khuất",
            "C": "Anh dũng kiên cường",
            "D": "Giai cấp cách mệnh"
        },
        "answer": "A",
        "explanation": "Giáo trình dẫn thư Hồ Chí Minh gửi đồng bào Nam Bộ và tình cảm gắn bó giữa các miền của một nước thống nhất. Tuy nhiên, danh xưng “Thành đồng Tổ quốc” chưa được dẫn trực tiếp ở phần này; đáp án A giữ theo tài liệu câu hỏi và cần văn bản gốc để xác nhận cách gọi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 45."
    },
    {
        "question": "Theo Hồ Chí Minh, Muốn lãnh đạo được nhân dân lao động, trước hết Đảng phải có:",
        "options": {
            "A": "Tư cách, phẩm chất, năng lực cần thiết.",
            "B": "Quyền lực chính trị.",
            "C": "Tiềm lực kinh tế.",
            "D": "Chính quyền."
        },
        "answer": "A",
        "explanation": "Đảng muốn lãnh đạo phải có đạo đức, uy tín, đường lối và năng lực tổ chức thực hiện. Vai trò lãnh đạo không chỉ dựa vào danh nghĩa, mà được chứng minh bằng phẩm chất và kết quả phục vụ nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 73-75,79-81."
    },
    {
        "question": "Theo Hồ Chí Minh, công tác cán bộ là:",
        "options": {
            "A": "Công tác gốc của chính quyền.",
            "B": "Công tác của Đảng.",
            "C": "Công tác gốc của Đảng.",
            "D": "Công tác của chính quyền."
        },
        "answer": "C",
        "explanation": "Cán bộ là lực lượng triển khai đường lối và quyết định hiệu quả công việc, nên công tác cán bộ có vị trí nền tảng. Việc lựa chọn, đào tạo, sử dụng và kiểm tra cán bộ phải đúng để bảo đảm hoạt động của Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 81."
    },
    {
        "question": "\"Lực lượng của giai cấp công nhân và nhân dân lao động là rất to lớn, là vô cùng vô tận. Nhưng lực lượng ấy cần có (....) mới chắc chắn thắng lợi\"",
        "options": {
            "A": "Chính quyền tổ chức",
            "B": "Đảng lãnh đạo",
            "C": "Nhà nước quản lý",
            "D": "Đoàn thể lãnh đạo"
        },
        "answer": "B",
        "explanation": "Lực lượng quần chúng rất lớn nhưng cần đường lối và tổ chức thống nhất để chuyển thành sức mạnh cách mạng. Đảng thực hiện vai trò lãnh đạo, tập hợp và định hướng lực lượng ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 71-72."
    },
    {
        "question": "Theo Hồ Chí Minh, quyền lực thuộc về nhân dân là bản chất, là nguyên tắc của chế độ mới, một khi xa rời nguyên tắc này, Đảng sẽ trở thành:",
        "options": {
            "A": "Đối lập với nhà nước.",
            "B": "Đối lập với nhân dân.",
            "C": "Đối lập với chế độ.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Quyền lực thuộc về nhân dân là cơ sở của chế độ mới và cũng là nền tảng để Đảng lãnh đạo. Nếu xa dân, không tôn trọng quyền làm chủ, Đảng sẽ đi ngược lợi ích của chính lực lượng mà mình phục vụ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78,83-84.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng Cán bộ, Đảng viên phải lưu ý cái gì có hại cho dân dù nhỏ đến máy cũng phải",
        "options": {
            "A": "Tránh",
            "B": "Đề phòng",
            "C": "Vượt qua",
            "D": ""
        },
        "answer": "A",
        "explanation": "Cán bộ phải đặt quyền lợi nhân dân lên trên và tránh mọi việc gây hại cho dân. Tác hại nhỏ không làm một việc sai trở nên chấp nhận được; nguyên tắc này nhấn mạnh trách nhiệm trong từng hành động.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh cho rằng:",
        "options": {
            "A": "Do lời nói và việc làm, đảng viên, đoàn viên và cán bộ làm cho dân tin, dân phục, dân yêu",
            "B": "Do hành động của đảng viên, đoàn viên và cán bộ làm cho dân tin, dân phục, dân yêu",
            "C": "Do lời nói và việc làm, đảng viên, đoàn viên và cán bộ làm cho dân ấm no, hạnh phúc",
            "D": ""
        },
        "answer": "A",
        "explanation": "Uy tín của cán bộ được tạo bởi sự thống nhất giữa lời nói và việc làm, cùng hiệu quả phục vụ dân. Gương mẫu thực tế giúp dân tin và tự nguyện làm theo, thay vì chỉ dựa vào lời tuyên truyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 78,132-133.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong hệ thống các quan điểm của Hồ Chí Minh về Đảng Cộng sản, quan điểm nào không phải thật sự là sự sáng tạo riêng của Người góp phần cụ thể hóa và phát triển lý luận Mác - Lênin về Đảng Cộng sản?",
        "options": {
            "A": "Mối quan hệ biện chứng giữa tính phổ biến và tính đặc thù của quy luật hình thành Đảng vô sản kiểu mới trong điều kiện từng nước.",
            "B": "Quan điểm về sự thống nhất biện chứng giữa bản chất giai cấp công nhân với tính dân tộc và tính nhân dân của Đảng.",
            "C": "Quan niệm về Đảng Cộng sản cầm quyền và các yếu tố bảo đảm vai trò cầm quyền của Đảng.",
            "D": "Quan điểm về những vấn đề có tính nguyên tắc trong xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh."
        },
        "answer": "D",
        "explanation": "Đáp án D được giữ theo bộ câu hỏi: các nguyên tắc xây dựng Đảng có nền tảng chung trong lý luận Mác - Lênin. Tuy nhiên, giáo trình cũng trình bày sự vận dụng và cách diễn đạt sáng tạo của Hồ Chí Minh đối với các nguyên tắc ấy; không đủ căn cứ để khẳng định toàn bộ nội dung D đều không có đóng góp sáng tạo của Người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72-76."
    },
    {
        "question": "Hồ Chí Minh sử dụng bộ phận nào trong cơ thể con người để chỉ tầm quan trọng của đoàn kết trong đảng",
        "options": {
            "A": "Con ngươi",
            "B": "Bàn tay",
            "C": "Trái tim",
            "D": "Khối óc"
        },
        "answer": "A",
        "explanation": "Hình ảnh con ngươi diễn tả đoàn kết trong Đảng là điều quý giá, nhạy cảm, phải hết sức giữ gìn. Giáo trình nhấn mạnh sự thống nhất và trách nhiệm bảo vệ đoàn kết để Đảng có sức mạnh lãnh đạo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77."
    },
    {
        "question": "Một trong những nguyên tắc xây dựng Đảng của Hồ Chí Minh là:",
        "options": {
            "A": "Tập thể phê bình và tự phê bình",
            "B": "Phê bình và tự phê bình",
            "C": "Phê bình và tập thể phê bình",
            "D": "Tự phê bình và cùng phê bình"
        },
        "answer": "B",
        "explanation": "Tự phê bình và phê bình giúp mỗi người, tổ chức nhận ra khuyết điểm và sửa chữa để tiến bộ. Việc này phải thường xuyên, chân thành, có tình đồng chí, nhằm xây dựng chứ không công kích hay che giấu sai lầm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 76."
    },
    {
        "question": "Theo Hồ Chí Minh, dân chủ là tư tưởng phải được tự do. Tự do là đối với mọi vấn đề, mọi người tự do bày tỏ ý kiến của mình, góp phần tìm ra:",
        "options": {
            "A": "Chân lý.",
            "B": "Thực tiễn.",
            "C": "Lý lẽ.",
            "D": "Nguyên tắc."
        },
        "answer": "A",
        "explanation": "Tự do thảo luận giúp tập hợp hiểu biết và tìm ra ý kiến đúng, từ đó hình thành quyết định chung. Sau khi dân chủ bàn bạc và đi đến quyết định, mọi người phải thống nhất thực hiện.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75."
    },
    {
        "question": "Hồ Chí Minh ví công việc phê bình và tự phê bình như:",
        "options": {
            "A": "Rửa mặt hằng ngày",
            "B": "Ăn cơm hàng ngày",
            "C": "Học tập hàng ngày",
            "D": "Uống nước hàng ngày"
        },
        "answer": "A",
        "explanation": "So sánh với rửa mặt hằng ngày nhấn mạnh tự phê bình và phê bình phải diễn ra thường xuyên. Đó là cách phòng ngừa, phát hiện và sửa khuyết điểm, không phải chỉ tiến hành khi đã có sai phạm lớn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 76."
    },
    {
        "question": "Một trong những nguyên tắc xây dựng Đảng của Hồ Chí Minh là:",
        "options": {
            "A": "Tập trung hợp tác",
            "B": "Tập trung dân chủ",
            "C": "Tập trung thống nhất",
            "D": "Hợp tác dân chủ"
        },
        "answer": "B",
        "explanation": "Tập trung dân chủ kết hợp quyền thảo luận, đóng góp ý kiến với sự thống nhất tổ chức và hành động. Dân chủ là cơ sở của tập trung, còn tập trung bảo đảm ý kiến chung được thực hiện hiệu quả.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75."
    },
    {
        "question": "Hồ Chí Minh nhận thức cán bộ là cái dây chuyền của bộ máy, là mắt khâu trung gian nối liền giữa: (NHUNG HOÀNG)",
        "options": {
            "A": "Nhà nước với nhân dân.",
            "B": "Đảng với dân.",
            "C": "Đảng, Nhà nước với nhân dân.",
            "D": "Đảng với Nhà nước."
        },
        "answer": "C",
        "explanation": "Cán bộ chuyển đường lối, chính sách đến dân và phản ánh tình hình, nguyện vọng của dân với Đảng, Nhà nước. Vì vậy, cán bộ là khâu nối quyết định việc đường lối đúng có được thực hiện đúng trong đời sống hay không.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 81."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, nhân tố quyết định hàng đầu để đưa cách mạng Việt Nam đến thắng lợi là: (NHUNG HOÀNG)",
        "options": {
            "A": "Đoàn kết dân tộc",
            "B": "Đoàn kết giai cấp",
            "C": "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
            "D": "Phải có Đảng Cộng sản"
        },
        "answer": "D",
        "explanation": "Đảng Cộng sản cung cấp đường lối và tổ chức thống nhất cho cách mạng. Vai trò quyết định này gắn với việc Đảng lãnh đạo đúng và dựa vào nhân dân, không phủ nhận nhân dân là lực lượng làm nên thắng lợi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 71-72."
    },
    {
        "question": "Đại đoàn kết dân tộc được xác định là nhiệm vụ nào trong những nhiệm vụ dưới đây của Đảng và của toàn dân tộc ta?",
        "options": {
            "A": "Cơ bản của Đảng và của dân tộc",
            "B": "Hàng đầu của Đảng và của dân tộc",
            "C": "Quan trọng của Đảng và của dân tộc ta",
            "D": "Thiết yếu"
        },
        "answer": "B",
        "explanation": "Đại đoàn kết là nhiệm vụ hàng đầu của Đảng và toàn dân tộc vì cách mạng là sự nghiệp của nhân dân. Đảng phải đưa yêu cầu ấy vào đường lối, tổ chức và hoạt động thực tế để quy tụ sức mạnh chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 99."
    },
    {
        "question": "Nguyên tắc tối cao để đoàn kết rộng rãi trong quần chúng nhân dân là:",
        "options": {
            "A": "Yêu dân, tin dân, dựa vào dân, vì hạnh phúc của nhân dân",
            "B": "Đoàn kết trên cơ sở độc lập tự chủ",
            "C": "Đoàn kết chặt chẽ, chân thành",
            "D": "Đoàn kết trên cơ sở tự nguyện"
        },
        "answer": "A",
        "explanation": "Tin dân, dựa vào dân và phục vụ hạnh phúc của dân là cơ sở để đoàn kết rộng rãi. Nhân dân vừa có lợi ích cần được bảo đảm, vừa có khả năng và kinh nghiệm để thực hiện mục tiêu chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 101-102."
    },
    {
        "question": "Hồ Chí Minh minh cho rằng \"đoàn kết phải gắn với (....), (....) để tăng cường đoàn kết\".",
        "options": {
            "A": "Đấu tranh",
            "B": "Lợi ích",
            "C": "Tự do",
            "D": "Dân chủ"
        },
        "answer": "A",
        "explanation": "Đoàn kết không phải bỏ qua mọi khác biệt hay khuyết điểm; cần góp ý, đấu tranh xây dựng để củng cố thống nhất. Mục tiêu của đấu tranh là tăng cường đoàn kết trên lợi ích chung, không gây chia rẽ hoặc công kích cá nhân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103-104."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, nền tảng của khối đại đoàn kết dân tộc là:",
        "options": {
            "A": "Liên minh công-nông",
            "B": "Liên minh công-nông, lao động trí óc.",
            "C": "Liên minh công-nông và các tầng lớp lao động khác.",
            "D": "Liên minh công-nông và các lực lượng yêu nước khác."
        },
        "answer": "B",
        "explanation": "Liên minh công nhân, nông dân và trí thức là nền tảng của khối đại đoàn kết. Trên nền tảng đó, phải tập hợp rộng rãi các lực lượng yêu nước khác, không thu hẹp khối đoàn kết vào riêng ba nhóm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100,103."
    },
    {
        "question": "Hồ Chí Minh chỉ ra nguyên tắc xây dựng mặt trận:",
        "options": {
            "A": "Mặt trận phải hoạt động theo nguyên tắc hiệp thương dân chủ",
            "B": "Mặt trận phải hoạt động theo nguyên tắc hiệp thương dân quyền",
            "C": "Mặt trận phải hoạt động theo nguyên tắc hiệp thương quần chúng",
            "D": ""
        },
        "answer": "A",
        "explanation": "Hiệp thương dân chủ là cùng bàn bạc, thống nhất mục tiêu và cách hành động giữa các thành viên Mặt trận. Nó chống áp đặt, dân chủ hình thức và giúp dung hòa lợi ích riêng chính đáng với lợi ích chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Khẩu hiệu chiến lược: \"Giai cấp vô sản tất cả các nước và các dân tộc bị áp bức, đoàn kết lại\" là của:",
        "options": {
            "A": "C. Mác",
            "B": "Ph. Ăngghen",
            "C": "V.I.Lênin",
            "D": "Hồ Chí Minh"
        },
        "answer": "C",
        "explanation": "Nội dung khẩu hiệu gắn đoàn kết vô sản quốc tế với các dân tộc bị áp bức, phù hợp vai trò lý luận của Lênin đối với vấn đề thuộc địa. Tuy nhiên, giáo trình chưa dẫn trực tiếp khẩu hiệu này kèm tác giả tại các trang đối chiếu; đáp án C giữ theo bộ câu hỏi, cần nguồn văn bản gốc để xác nhận trích dẫn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 21-22,50.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Khẩu hiệu chiến lược: \"Vô sản toàn thế giới và các dân tộc bị áp bức, đoàn kết lại\" là của ai?)"
    },
    {
        "question": "Theo Hồ Chí Minh, xây dựng nhà nước trong sạch vững mạnh cần phải:",
        "options": {
            "A": "Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức cách mạng",
            "B": "Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức cán bộ",
            "C": "Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức quần chúng",
            "D": ""
        },
        "answer": "A",
        "explanation": "Pháp luật nghiêm minh tạo kỷ cương và xử lý vi phạm, còn giáo dục đạo đức giúp phòng ngừa sai trái từ ý thức. Kết hợp hai mặt tạo nền tảng xây dựng Nhà nước trong sạch, không chỉ dựa vào xử phạt hoặc chỉ khuyên bảo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 89-90,93.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Chọn phương án trả lời đúng nhất theo tư tưởng Hồ Chí Minh về bản chất của nhà nước Việt Nam?",
        "options": {
            "A": "Mang bản chất giai cấp công nhân.",
            "B": "Có tính dân tộc, tính nhân dân sâu sắc.",
            "C": "Có sự thống nhất bản chất giai cấp công nhân với tính nhân dân và tính dân tộc.",
            "D": "Mang tính dân tộc."
        },
        "answer": "C",
        "explanation": "Nhà nước mang bản chất giai cấp công nhân, đồng thời phục vụ nhân dân và đại diện lợi ích dân tộc. Ba mặt thống nhất vì mục tiêu của Nhà nước mới là độc lập, quyền làm chủ và hạnh phúc của nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 82-83."
    },
    {
        "question": "Theo Hồ Chí Minh, kỷ cương, phép nước thời nào cũng luôn được đề cao và phải được áp dụng cho tất cả mọi người. Từ đó Người đưa ra yêu cầu:",
        "options": {
            "A": "Pháp luật phải thẳng tay trừng trị những kẻ bất liêm, bất kỳ kẻ ấy ở địa vị nào, làm nghề nghiệp gì.",
            "B": "Phải cảm hoá những người có lỗi lầm, kéo họ đi với cách mạng, giáo dục những người mắc khuyết điểm để họ tránh phạm pháp.",
            "C": "Tất cả các phương án.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Pháp luật phải xử lý nghiêm người vi phạm, không phân biệt địa vị, đồng thời coi trọng giáo dục và cảm hóa. Hai yêu cầu cùng nhằm bảo vệ kỷ cương và giúp con người sửa lỗi, nên phương án tổng hợp phù hợp.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 89-90,93.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh nói: \"Đạo đức cũ như người đầu ngược xuống đất chân chổng lên trời. Đạo đức mới như người hai chân đứng vững được dưới đất, đầu: (NHUNG HOÀNG)",
        "options": {
            "A": "ngửng lên trời\".",
            "B": "ngửa lên trời\".",
            "C": "chổng lên trời\".",
            "D": ""
        },
        "answer": "A",
        "explanation": "Hình ảnh người đứng vững, đầu ngẩng lên diễn tả sự thay đổi căn bản của đạo đức mới. Trung, hiếu được chuyển từ quan hệ phục tùng vua sang trách nhiệm với nước và nhân dân, nâng cao địa vị con người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 127.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh: đức là gốc của tài hồng là gốc của chuyên phẩm chất là gốc của năng lực. Tài là thể hiện cụ thể của:",
        "options": {
            "A": "Đức trong hiệu quả hành động.",
            "B": "Năng lực trong hiệu quả hành động.",
            "C": "Kỹ năng trong hiệu quả hành động.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Tài giúp người cán bộ biến phẩm chất tốt thành kết quả công việc có ích. Đức là gốc, nhưng phải được chứng minh qua hành động và hiệu quả phục vụ, nên đức và tài cần thống nhất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 124-125.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, nhân dân được xác định vị trí như thế nào của cách mạng?",
        "options": {
            "A": "Là mục tiêu của cách mạng",
            "B": "Là động lực của cách mạng",
            "C": "Vừa là mực tiêu vừa là động lực của cách mạng",
            "D": "Là người bạn đường của cách mạng"
        },
        "answer": "C",
        "explanation": "Nhân dân là mục tiêu vì cách mạng nhằm giải phóng, nâng cao đời sống con người; là động lực vì chính nhân dân thực hiện cách mạng. Hai vai trò gắn nhau: phải phát huy sức dân và đem thành quả trở lại phục vụ dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 138."
    },
    {
        "question": "Theo Hồ Chí Minh, Cần là siêng năng, chăm chỉ lao động có kế hoạch, có hiệu quả, có năng suất cao với tinh thần:",
        "options": {
            "A": "Tự lực cánh sinh.",
            "B": "Chịu khó.",
            "C": "Cầu thị.",
            "D": "Nỗ lực."
        },
        "answer": "A",
        "explanation": "Cần không chỉ là làm nhiều mà còn là lao động có kế hoạch, sáng tạo, năng suất và hiệu quả. Tự lực cánh sinh nhấn mạnh sự chủ động, tránh lười biếng, ỷ lại vào người khác.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 128-129."
    },
    {
        "question": "Theo Hồ Chí Minh, con người luôn có xu hướng vươn lên cái Chân - Thiện - Mỹ, mặc dù:",
        "options": {
            "A": "\"có thế này, có thế khác\".",
            "B": "\"có giàu, có nghèo\".",
            "C": "« có thiện, có ác ».",
            "D": "« có sang, có hèn »"
        },
        "answer": "A",
        "explanation": "Con người có mặt tốt, mặt xấu và có thể thay đổi qua giáo dục, tự rèn luyện, hoàn cảnh sống. Vì vậy, không nên đóng khung một người bằng khuyết điểm hiện tại; cần giúp họ phát triển các giá trị chân, thiện, mỹ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 134,136-137."
    },
    {
        "question": "Theo Hồ Chí Minh, Hiếu với dân thể hiện ở chỗ thương dân, tin dân, phục vụ nhân dân hết lòng. Vì thế, phải gần dân, kính trọng và học tập nhân dân, phải dựa vào dân và lấy:",
        "options": {
            "A": "dân làm gốc.",
            "B": "dân làm chỗ dựa.",
            "C": "dân làm điểm tựa.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Hiếu với dân là thương, tin, kính trọng và hết lòng phục vụ nhân dân. Lấy dân làm gốc đòi hỏi gần dân, học dân và dựa vào sức dân, thay vì đứng trên dân hoặc chỉ làm theo ý chủ quan.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 127-128.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đạo đức được Hồ chí Minh coi là gì của người cách mạng?",
        "options": {
            "A": "Là sức mạnh của người cách mạng",
            "B": "Là cái gốc của người cách mạng",
            "C": "Là văn hóa của người cách mạng",
            "D": "Tất cả các phương án"
        },
        "answer": "B",
        "explanation": "Đạo đức là nền tảng để người cách mạng giữ đúng mục tiêu và vượt qua khó khăn, cám dỗ. Có tài mà thiếu đạo đức sẽ không thể lãnh đạo nhân dân một cách đúng đắn, nên đạo đức được ví như gốc cây, nguồn sông.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 124."
    },
    {
        "question": "Đâu là nguyên tắc đoàn kết quốc tế trong tư tưởng Hồ Chí Minh?",
        "options": {
            "A": "Đoàn kết trên cơ sở độc lập, tự chủ, tự lực, tự cường.",
            "B": "Đoàn kết trên cơ sở dựa vào sức mình là chính, nhận sự giúp đỡ quốc tế.",
            "C": "Đoàn kết trên cơ sở nhận sự giúp đỡ quốc tế và có nghĩa vụ quốc tế.",
            "D": "Đoàn kết trên cơ sở kêu gọi sự giúp đỡ của các lực lượng tiến bộ trên thế giới"
        },
        "answer": "A",
        "explanation": "Đoàn kết quốc tế phải dựa trên nội lực và quyền tự quyết của dân tộc. Tự lực, tự cường không loại trừ hợp tác, mà tạo thế chủ động để tiếp nhận giúp đỡ và phối hợp bình đẳng với bên ngoài.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 111-112."
    },
    {
        "question": "Theo Hồ Chí Minh, để quy tụ được mọi lực lượng vào khối đại đoàn kết toàn dân, cần phải có:",
        "options": {
            "A": "Chính sách và phương pháp phù hợp.",
            "B": "Lòng khoan dung rộng lớn.",
            "C": "Tinh thần thương yêu con người.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Các lực lượng có lợi ích, hoàn cảnh và hình thức sinh hoạt khác nhau, nên phải có chính sách cùng phương pháp vận động phù hợp. Đoàn kết cần được tổ chức qua đoàn thể, Mặt trận và công tác dân vận thực chất.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100-105.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Lực lượng chủ yếu của khối đại đoàn kết dân tộc theo tư tưởng Hồ Chí Minh là:",
        "options": {
            "A": "Công nhân",
            "B": "Công nhân, nông dân",
            "C": "Học trò, nhà buôn",
            "D": "Công nhân, nông dân, lao động trí óc."
        },
        "answer": "D",
        "explanation": "Công nhân, nông dân và lao động trí óc là lực lượng nền tảng của khối đại đoàn kết. Tuy nhiên, chủ thể toàn khối vẫn là mọi người Việt Nam yêu nước, không chỉ những lực lượng nòng cốt này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 100."
    },
    {
        "question": "Hồ Chí Minh cho rằng",
        "options": {
            "A": "Đại đoàn kết là vấn đề chiến lược",
            "B": "Đại đoàn kết là vấn đề sách lược",
            "C": "Đại đoàn kết là vấn đề thời đại",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đại đoàn kết là định hướng lâu dài, xuyên suốt toàn bộ tiến trình cách mạng. Mỗi thời kỳ có hình thức và yêu cầu cụ thể khác nhau, nhưng vai trò chiến lược của đoàn kết không thay đổi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98-99.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, để thực hành đoàn kết rộng rãi, cần có niềm tin vào (....).",
        "options": {
            "A": "Dân",
            "B": "Đảng",
            "C": "Chính quyền",
            "D": ""
        },
        "answer": "A",
        "explanation": "Tin dân nghĩa là tin vào sức mạnh, khả năng và lòng yêu nước của nhân dân. Niềm tin ấy là cơ sở để mở rộng đoàn kết và tổ chức cho dân chủ động tham gia, thay vì xem dân chỉ là người thụ động nhận chỉ dẫn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 102.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, để lãnh đạo mặt trận, Đảng phải:",
        "options": {
            "A": "Có chính sách mặt trận đúng đắn",
            "B": "Có chính sách đoàn kết đúng đắn",
            "C": "Có chính sách tập hợp đúng đắn",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đảng cần đường lối, chính sách Mặt trận đúng để thống nhất các lực lượng trên mục tiêu chung. Quyền lãnh đạo còn phải được chứng minh bằng uy tín, sự gương mẫu và năng lực vận động, thuyết phục các thành viên.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đối với phong trào cộng sản và công nhân, quốc tế, Hồ Chí Minh giương cao ngọn cờ độc lập dân tộc gắn liền với chủ nghĩa xã hội, thực hiện đoàn kết thống nhất trên nền tảng của chủ nghĩa Mác-Lênin và:",
        "options": {
            "A": "Chủ nghĩa Mác - Lênin, có lý, có tình.",
            "B": "Chủ nghĩa quốc tế vô sản, có tình, có nghĩa.",
            "C": "Chủ nghĩa quốc tế vô sản, có lý, có tình.",
            "D": "Chủ nghĩa yêu nước, có tình, có nghĩa"
        },
        "answer": "C",
        "explanation": "Đoàn kết với phong trào cộng sản, công nhân quốc tế dựa trên chủ nghĩa Mác - Lênin và chủ nghĩa quốc tế vô sản. Có lý, có tình yêu cầu vừa giữ nguyên tắc, vừa tôn trọng, thông cảm và giúp đỡ nhau một cách chân thành.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 111."
    },
    {
        "question": "Theo Hồ Chí Minh, thực hiện đại đoàn kết dân tộc phải gắn liền với đoàn kết quốc tế đại đoàn kết dân tộc phải là:",
        "options": {
            "A": "Cơ sở cho việc thực hiện đoàn kết quốc tế.",
            "B": "Chỗ dựa cho việc thực hiện đoàn kết quốc tế.",
            "C": "Chỗ đứng cho việc thực hiện đoàn kết quốc tế",
            "D": ""
        },
        "answer": "A",
        "explanation": "Khối đoàn kết trong nước tạo nội lực để thực hiện hợp tác quốc tế có hiệu quả. Sự giúp đỡ bên ngoài quan trọng nhưng không thay thế sức mạnh của dân tộc; phải kết hợp nội lực với ngoại lực.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 106-107,112.\nGhi chú trong tài liệu: (Kiểu hỏi khác: Theo Hồ Chí Minh thực hiện đại đoàn kết dân tộc phải gắn liền với đoàn kết quốc tế nhằm mục đích gì? A. Giữ gìn sức mạnh dân tộc B. Giữ gìn sức mạnh thời đại C. Tăng cường sức mạnh thời đại D. Tạo sức mạnh tổng hợp cho cách mạng chiến thắng kẻ thù)\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đối với Hồ Chí Minh, phải biết \"dễ (1....) lần không dân cũng chịu, khó (2....) lần dân liệu cũng xong\".",
        "options": {
            "A": "1.vạn 2.trăm",
            "B": "1.trăm 2.vạn",
            "C": "1.nghìn 2.triệu",
            "D": "1.triệu 2.nghìn"
        },
        "answer": "B",
        "explanation": "Giáo trình dẫn câu dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong. Cách nói nhấn mạnh vai trò quyết định của sự tham gia, đồng thuận và sáng tạo của nhân dân đối với công việc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 138."
    },
    {
        "question": "Theo Hồ Chí Minh hình thức tổ chức của khối đại đoàn kết dân tộc là:",
        "options": {
            "A": "Mặt trận dân tộc thống nhất",
            "B": "Các đoàn thể quần chúng nhân dân",
            "C": "Đảng Cộng sản",
            "D": "Chính quyền"
        },
        "answer": "A",
        "explanation": "Mặt trận dân tộc thống nhất là hình thức tổ chức tập hợp các lực lượng yêu nước thành khối đoàn kết. Nó biến tinh thần đoàn kết thành cơ cấu phối hợp và hành động có mục tiêu chung.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 102-104."
    },
    {
        "question": "Hồ Chí Minh khái quát dân chủ có nghĩa là gì? (NHUNG HOÀNG)",
        "options": {
            "A": "Dân là chủ và dân làm chủ",
            "B": "Dân là người chủ",
            "C": "Dân làm quản lý",
            "D": "Dân làm người chủ"
        },
        "answer": "A",
        "explanation": "Dân là chủ chỉ địa vị chủ thể quyền lực; dân làm chủ chỉ việc thực hiện quyền ấy trong thực tế. Dân chủ vì vậy cần cả quyền được công nhận và điều kiện, năng lực để người dân tham gia, kiểm tra, quyết định.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83-85."
    },
    {
        "question": "Theo Hồ Chí Minh, Nhà nước vì dân là một Nhà nước lấy lợi ích chính đáng của nhân dân làm mục tiêu, tất cả đều vì lợi ích của nhân dân, ngoài ra:",
        "options": {
            "A": "Không có bất cứ một lợi ích nào khác.",
            "B": "Chỉ có lợi ích tự thân của Nhà nước.",
            "C": "Không có bất cứ lợi ích không chính đáng nào khác.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Nhà nước vì dân lấy lợi ích, nguyện vọng chính đáng của nhân dân làm mục đích hoạt động. Cụm không có lợi ích nào khác cần hiểu là không có lợi ích riêng đối lập với dân hoặc đặc quyền cho bộ máy, chứ không phủ nhận việc điều hòa các lợi ích chính đáng trong xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 86.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Tìm ra nội dung không đúng trong tư tưởng Hồ Chí Minh về Dân chủ trong các lĩnh vực của đời sống xã hội:",
        "options": {
            "A": "Việc bảo đảm quyền con người, quyền công dân.",
            "B": "Phương thức tổ chức xã hội.",
            "C": "Kết hợp nhuần nhuyễn cả pháp luật và đạo đức trong quản lý xã hội.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Đáp án C cần phân biệt về phạm vi: kết hợp pháp luật và đạo đức thuộc phương thức quản lý, xây dựng Nhà nước, không phải cách liệt kê riêng các biểu hiện dân chủ. Tuy nhiên, nội dung C vẫn là quan điểm đúng được giáo trình nêu, nên không nên gọi nó sai với toàn bộ tư tưởng Hồ Chí Minh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83-85,93.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong một cách thể hiện khác về vấn đề \"Đảng của ai\", theo Hồ Chí Minh, Đảng là của:",
        "options": {
            "A": "Giai cấp",
            "B": "Dân tộc",
            "C": "Nhân loại",
            "D": "Nhân dân"
        },
        "answer": "B",
        "explanation": "Đảng có bản chất giai cấp công nhân, đồng thời đại diện nhân dân lao động và dân tộc Việt Nam. Cách nói Đảng của dân tộc nhấn mạnh lợi ích chung mà Đảng phục vụ, không thay thế nền tảng giai cấp và lý luận của Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48,72."
    },
    {
        "question": "Trong các yếu tố hình thành Đảng Cộng sản Việt Nam, đâu là yếu tố sáng tạo của Hồ Chí Minh?",
        "options": {
            "A": "Chủ nghĩa Mác - Lênin",
            "B": "Phong trào công nhân",
            "C": "Tư tưởng yêu nước truyền thống",
            "D": "Phong trào yêu nước"
        },
        "answer": "C",
        "explanation": "Điểm sáng tạo trong quy luật ra đời của Đảng là bổ sung phong trào yêu nước vào sự kết hợp với chủ nghĩa Mác - Lênin và phong trào công nhân. Lựa chọn C ghi “tư tưởng yêu nước truyền thống” chưa thật chính xác bằng “phong trào yêu nước”, vì giáo trình nói về một phong trào thực tiễn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72."
    },
    {
        "question": "Tìm phương án giải thích sai trong luận điểm của Hồ Chí Minh \"Đảng cầm quyền vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân\".",
        "options": {
            "A": "Người lãnh đạo là xác định quyền lãnh đạo duy nhất của Đảng đối với toàn bộ xã hội và khi có chính quyền, Đảng lãnh đạo chính quyền nhà nước.",
            "B": "Lãnh đạo phải bằng giáo dục, thuyết phục, nghĩa là Đảng phải làm cho dân tin, dân phục để dân theo.",
            "C": "Là người lãnh đạo Đảng phải sâu sát, gắn bó mật thiết với nhân dân, lắng nghe ý kiến của dân, khiêm tốn học hỏi nhân dân và phải kiểm soát nhân dân.",
            "D": "\"đầy tớ\" có nghĩa là tận tâm, tận lực phụng sự nhân dân nhằm đem lại quyền lợi và lợi ích cho nhân dân."
        },
        "answer": "C",
        "explanation": "Phần sai của C là “phải kiểm soát nhân dân”. Đảng và cán bộ phải học hỏi, phục vụ và chịu sự kiểm soát của nhân dân; không được đảo ngược quan hệ thành người dân là đối tượng bị kiểm soát để phục vụ lợi ích của Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78,84,91."
    },
    {
        "question": "Theo Hồ Chí Minh:",
        "options": {
            "A": "Làm cách mạng để cải tạo xã hội cũ thành xã hội mới là một sự nghiệp vẻ vang",
            "B": "Làm cách mạng để cải tạo xã hội cũ thành xã hội mới là một công việc vẻ vang",
            "C": "Làm cách mạng để cải tạo xã hội cũ thành xã hội mới là một nghề nghiệp vẻ vang",
            "D": ""
        },
        "answer": "A",
        "explanation": "Cải tạo xã hội cũ và xây dựng xã hội mới là sự nghiệp lớn, khó khăn nhưng hướng đến giải phóng và hạnh phúc con người. Vì vậy, người cách mạng cần đạo đức, ý chí, năng lực và sự bền bỉ để hoàn thành nhiệm vụ vẻ vang ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-63,124.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng cầm quyền vừa là người lãnh đạo, vừa là:",
        "options": {
            "A": "người thầy trung thành của nhân dân.",
            "B": "người hầu trung thành của nhân dân.",
            "C": "người đầy tớ trung thành của nhân dân.",
            "D": "người lính trung thành của nhân dân."
        },
        "answer": "C",
        "explanation": "Đảng lãnh đạo bằng đường lối, tổ chức và sự gương mẫu, đồng thời hết lòng phục vụ nhân dân. Hai vai trò thống nhất: lãnh đạo là để dân được làm chủ và có cuộc sống tốt hơn, không để Đảng hưởng đặc quyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78."
    },
    {
        "question": "Trong hệ thống tổ chức đảng, Hồ Chí Minh rất coi trọng vai trò của:",
        "options": {
            "A": "Đảng bộ.",
            "B": "Chi ủy.",
            "C": "Chi bộ.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Chi bộ là nơi đảng viên trực tiếp sinh hoạt, thực hiện nhiệm vụ và gắn với cơ sở, nên có vai trò quan trọng trong xây dựng Đảng. Giáo trình yêu cầu từng chi bộ hoàn thành nhiệm vụ, toàn tâm phục vụ nhân dân; chưa cung cấp ở phần này một hệ thống phân tích riêng đầy đủ về chi bộ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77,81.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, nền tảng tư tưởng của Đảng phải dựa trên:",
        "options": {
            "A": "Chủ nghĩa Mác-Lênin.",
            "B": "Nguyên tắc tập trung dân chủ.",
            "C": "Nguyên tắc phê bình và tự phê bình.",
            "D": "Chủ nghĩa xã hội khoa học."
        },
        "answer": "A",
        "explanation": "Chủ nghĩa Mác - Lênin là nền tảng tư tưởng và kim chỉ nam giúp Đảng thống nhất mục tiêu, phương pháp. Việc học tập phải gắn vận dụng sáng tạo với thực tế Việt Nam, tránh chỉ học thuộc hoặc áp dụng máy móc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng cầm quyền là Đảng tiếp tục lãnh đạo sự nghiệp cách mạng trong điều kiện Đảng lãnh đạo quần chúng nhân dân giành được quyền lực nhà nước và:(NHUNG HOÀNG)",
        "options": {
            "A": "Đảng gương mẫu lãnh đạo bộ máy nhà nước đó.",
            "B": "Đảng trực tiếp lãnh đạo bộ máy nhà nước đó.",
            "C": "Đảng khiêm nhường lãnh đạo bộ máy nhà nước đó.",
            "D": "Đảng gián tiếp lãnh đạo bộ máy nhà nước đó."
        },
        "answer": "B",
        "explanation": "Sau khi giành chính quyền, Đảng tiếp tục lãnh đạo cách mạng và lãnh đạo Nhà nước do nhân dân làm chủ. Lãnh đạo bộ máy nhà nước phải thông qua đường lối, tổ chức và kiểm tra, không có nghĩa Đảng thay cơ quan nhà nước giải quyết mọi công việc hành chính.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78,82."
    },
    {
        "question": "Nội dung nào không đúng với tư tưởng Hồ Chí Minh về Thái độ, phương pháp tự phê bình và phê bình:",
        "options": {
            "A": "Phải tiến hành thuờng xuyên như người ta rửa mặt hằng ngày.",
            "B": "Phải thẳng thắn, chân thành, trung thực, không nể nang, không giấu giếm và cũng không thêm bớt khuyết điểm.",
            "C": "\"Phải có tình đồng chí thương yêu lẫn nhau\".",
            "D": "Phải khôn khéo biến hóa cho phù hợp."
        },
        "answer": "D",
        "explanation": "Tự phê bình, phê bình đòi hỏi thẳng thắn, trung thực, chân thành và tình đồng chí. “Khôn khéo biến hóa” không phải nguyên tắc được giáo trình nêu và không thể được dùng để né tránh, thêm bớt hoặc che giấu khuyết điểm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 76."
    },
    {
        "question": "Theo Hồ Chí Minh, bản chất của Đảng:",
        "options": {
            "A": "Không thay đổi khi có chính quyền trong tay.",
            "B": "Luôn thay đổi khi có chính quyền trong tay.",
            "C": "Đôi khi thay đổi khi có chính quyền trong tay.",
            "D": "Đã thay đổi khi có chính quyền trong tay."
        },
        "answer": "A",
        "explanation": "Có chính quyền làm thay đổi điều kiện và trách nhiệm hoạt động, không làm Đảng mất bản chất giai cấp công nhân hay mục tiêu phục vụ nhân dân. Trái lại, Đảng phải tự chỉnh đốn để chống những nguy cơ thoái hóa khi cầm quyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 72-74,77-78."
    },
    {
        "question": "Đối với Hồ Chí Minh, muôn việc thành công hay thất bại là do:",
        "options": {
            "A": "Cán bộ giỏi hay dốt",
            "B": "Cán bộ tốt hay kém.",
            "C": "Công việc dễ hay khó",
            "D": ""
        },
        "answer": "B",
        "explanation": "Cán bộ biến đường lối thành công việc thực tế, nên phẩm chất và năng lực của cán bộ ảnh hưởng trực tiếp kết quả. Cán bộ tốt giúp tổ chức đúng và gần dân; cán bộ kém có thể làm chính sách đúng thất bại khi thực hiện.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 81.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "\"Việc gì đã được đông người bàn bạc kỹ lưỡng rồi, kế hoạch định rõ ràng rồi, thì cần phải giao cho một người hoặc một nhóm ít người phụ trách theo kế hoạch đó mà thi hành. Như thế mới có chuyên trách, công việc mới chạy. Nếu không có ..... thì sẽ sinh cái tệ người này ủy cho người kia, người kia ủy cho người nọ, kết quả là không ai thi hành. Như thế thì việc gì cũng không xong\"",
        "options": {
            "A": "Tập thể lãnh đạo",
            "B": "Cá nhân phụ trách",
            "C": "Cá nhân lãnh đạo",
            "D": "Tập thể phụ trách"
        },
        "answer": "B",
        "explanation": "Sau khi tập thể thảo luận và thống nhất kế hoạch, cần giao trách nhiệm rõ cho cá nhân hoặc nhóm phụ trách. Nếu không, việc dễ bị đùn đẩy, không ai chịu trách nhiệm, nên tập thể lãnh đạo phải gắn với cá nhân phụ trách.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng lãnh đạo phải bằng:",
        "options": {
            "A": "Mệnh lệnh, đòi hỏi, yêu cầu dân chúng.",
            "B": "Dạy dỗ, chỉ bảo dân chúng.",
            "C": "Giáo dục, thuyết phục, tuyên truyền, giác ngộ dân chúng.",
            "D": "Pháp luật, kỷ luật đối với dân chúng."
        },
        "answer": "C",
        "explanation": "Lãnh đạo phải giúp nhân dân hiểu mục tiêu và tự giác tham gia thông qua giáo dục, tuyên truyền, vận động, thuyết phục. Cách làm ấy phát huy quyền làm chủ, trái với áp đặt mệnh lệnh hoặc cưỡng bức dân theo ý chủ quan.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78,103,105."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam là Đảng của:",
        "options": {
            "A": "Giai cấp công nhân.",
            "B": "Giai cấp công nhân, nhân dân lao động và của dân tộc Việt Nam.",
            "C": "Nhân dân lao động",
            "D": "Giai cấp công nhân, nhân dân lao động"
        },
        "answer": "B",
        "explanation": "Đảng mang bản chất giai cấp công nhân và đồng thời đại diện lợi ích nhân dân lao động, dân tộc Việt Nam. Vì vậy, mục tiêu của Đảng gắn với độc lập, giải phóng và đời sống của toàn dân, không phải lợi ích riêng của một tổ chức.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48,72."
    },
    {
        "question": "Theo Hồ Chí Minh, Đảng không phải là một tổ chức tự thân, mà có tổ chức chặt chẽ và vì vậy, mục đích, tôn chỉ của Đảng là \"tận tâm\", \"tận lực\", \"phụng sự\" và \"trung thành\" với:",
        "options": {
            "A": "Lợi ích của dân tộc Việt Nam",
            "B": "Lợi ích của Đảng",
            "C": "Lợi ích của giai cấp công nhân",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đảng được tổ chức để thực hiện mục tiêu cách mạng và phục vụ dân tộc, nhân dân. Tận tâm, tận lực, phụng sự và trung thành diễn tả trách nhiệm đặt lợi ích chung lên trên lợi ích cá nhân hoặc tổ chức tự thân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 73,78.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, luận điểm Đảng Cộng sản Việt Nam là \"Đảng của giai cấp công nhân, đồng thời là Đảng của dân tộc Việt Nam\" nhằm:",
        "options": {
            "A": "Xác định vị thế cầm quyền của Đảng.",
            "B": "Xác định bản chất giai cấp của Đảng.",
            "C": "Xác định chức năng của Đảng.",
            "D": "Xác định vai trò lãnh đạo của Đảng."
        },
        "answer": "B",
        "explanation": "Luận điểm nói rõ bản chất giai cấp công nhân và sự thống nhất với lợi ích dân tộc của Đảng. Nó không phải luận điểm về các yếu tố tạo nên sự ra đời của Đảng; nội dung đó là sự kết hợp chủ nghĩa Mác - Lênin, phong trào công nhân, phong trào yêu nước.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48,72."
    },
    {
        "question": "Trong di chúc của mình, Hồ Chí Minh trước tiên nói về:",
        "options": {
            "A": "Thiếu niên, nhi đồng",
            "B": "Đảng",
            "C": "Thanh niên",
            "D": ""
        },
        "answer": "B",
        "explanation": "Di chúc đặt yêu cầu xây dựng, chỉnh đốn và đoàn kết trong Đảng ở vị trí đặc biệt quan trọng. Tuy nhiên, giáo trình dẫn các nội dung Di chúc trong từng chủ đề, chưa trình bày trọn văn bản theo thứ tự; đáp án về mục được viết trước tiên cần đối chiếu bản Di chúc đầy đủ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, việc học tập, nghiên cứu, tuyên truyền chủ nghĩa Mác - Lênin phải:",
        "options": {
            "A": "Luôn phù hợp với từng đối tượng.",
            "B": "Luôn phù hợp với từng hoàn cảnh.",
            "C": "Tất cả các phương án.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Học và tuyên truyền lý luận cần phù hợp trình độ, hoàn cảnh, nhu cầu của từng đối tượng để người học hiểu và vận dụng được. Giáo trình nhấn mạnh liên hệ lý luận với thực tiễn, chống học thuộc hình thức và áp dụng máy móc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, Trong xây dựng đường lối chính trị, phải học tập kinh nghiệm của các đảng cộng sản anh em, nhưng phải tính đến những điều kiện cụ thể của đất nước và của: (NHUNG HOÀNG)",
        "options": {
            "A": "Loài người.",
            "B": "Thời đại.",
            "C": "Dân tộc.",
            "D": ""
        },
        "answer": "B",
        "explanation": "Kinh nghiệm các đảng anh em phải được xem xét theo điều kiện đất nước và bối cảnh thời đại. Một đường lối phù hợp nơi này, lúc này không mặc nhiên đúng ở nơi khác, lúc khác, nên phải vận dụng sáng tạo.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 12,64.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong tác phẩm \"Đường cách mệnh\", theo Hồ Chí Minh cách mạng trước hết phải có:",
        "options": {
            "A": "Đảng cách mạng",
            "B": "Quần chúng cách mạng",
            "C": "Lực lượng cách mạng",
            "D": "Vũ trang cách mạng"
        },
        "answer": "A",
        "explanation": "Đường cách mệnh khẳng định cách mạng trước hết cần có Đảng để tổ chức, vận động quần chúng và liên hệ quốc tế. Đảng vững giúp cách mạng có phương hướng và tổ chức, được ví với người cầm lái của con thuyền.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 71."
    },
    {
        "question": "Trong các nội dung sau đâu là nội dung không đúng?",
        "options": {
            "A": "Phong trào yêu nước có vị trí, vai trò cực kỳ to lớn trong quá trình phát triển của dân tộc Việt Nam.",
            "B": "Phong trào công nhân kết hợp được với phong trào yêu nước bởi vì hai phong trào đó đều có mục tiêu chung.",
            "C": "Phong trào yêu nước của trí thức Việt Nam là nhân tố quan trọng thúc đẩy sự kết hợp các yếu tố cho sự ra đời của Đảng Cộng sản Việt Nam.",
            "D": "Phong trào nông dân không kết hợp được với phong trào công nhân."
        },
        "answer": "D",
        "explanation": "Khẳng định phong trào nông dân không kết hợp được với phong trào công nhân là sai. Ở Việt Nam, hai lực lượng có lợi ích giải phóng gắn bó, và liên minh công - nông là nền tảng tập hợp lực lượng cách mạng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 49,72."
    },
    {
        "question": "Theo Hồ Chí Minh, Là người lãnh đạo, nhưng Đảng phải sâu sát, gắn bó mật thiết với nhân dân, lắng nghe ý kiến của nhân dân, khiêm tốn học hỏi nhân dân và:",
        "options": {
            "A": "Phải không được kiểm soát nhân dân.",
            "B": "Phải kiểm soát được nhân dân.",
            "C": "Phải chịu sự kiểm soát của nhân dân.",
            "D": ""
        },
        "answer": "C",
        "explanation": "Đảng lãnh đạo phải gắn bó, lắng nghe, học hỏi và chịu sự giám sát của nhân dân. Kiểm soát từ nhân dân giúp ngăn lạm quyền, quan liêu và bảo đảm hoạt động của Đảng đúng mục tiêu phục vụ dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78,91.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh chỉ ra nguyên tắc quan hệ giữa Đảng với dân là:",
        "options": {
            "A": "Đảng viên, cán bộ vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của nhân dân",
            "B": "Đảng viên, cán bộ vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của người lao động.",
            "C": "Đảng viên, cán bộ vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của mọi người.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Quan hệ lãnh đạo và phục vụ là hai mặt thống nhất của Đảng cầm quyền. Đảng định hướng, tổ chức cách mạng nhưng phải trung thành với lợi ích nhân dân và phát huy quyền làm chủ của dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh đã dùng từ nào sau đây để chỉ tính nghiêm minh của pháp luật",
        "options": {
            "A": "Thần linh pháp quyền",
            "B": "Tinh thần pháp luật",
            "C": "Nhà nước pháp quyền",
            "D": "Nhà nước hợp hiến"
        },
        "answer": "A",
        "explanation": "Hình ảnh thần linh pháp quyền nhấn mạnh vai trò tối cao của pháp luật trong tổ chức, quản lý xã hội. Mọi quyền lực và hành động công vụ phải có nền tảng pháp lý, không phụ thuộc sự tùy tiện của người có chức vụ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 87-88."
    },
    {
        "question": "Theo Hồ Chí Minh, tính dân tộc của nền văn hoá là đặc tính dân tộc, cốt cách dân tộc, chiều sâu bản chất rất đặc trưng của văn hoá dân tộc, không nhầm lẫn với: (NHUNG HOÀNG)",
        "options": {
            "A": "Văn hoá của các dân tộc khác.",
            "B": "Tinh hoa của các dân tộc khác.",
            "C": "Văn minh của các dân tộc khác.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Tính dân tộc biểu hiện ở bản sắc, giá trị, ngôn ngữ và cách thể hiện riêng của văn hóa Việt Nam. Giữ bản sắc không có nghĩa khép kín; cần tiếp thu tinh hoa bên ngoài mà không sao chép, làm mất cốt cách dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 119-121,123.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh phải chú trọng \"đạo làm gương\". Đối với Người \"một tấm gương sống còn có giá trị hơn: (NHUNG HOÀNG)",
        "options": {
            "A": "một trăm bài diễn văn tuyên truyền\",",
            "B": "một trăm hòm vàng\",",
            "C": "một trăm tủ sách\",",
            "D": ""
        },
        "answer": "A",
        "explanation": "Gương sống chứng minh giá trị đạo đức bằng hành động có thể quan sát và làm theo. Vì vậy, sức giáo dục của người gương mẫu rất lớn, nhất là đối với cán bộ, đảng viên có trách nhiệm dẫn dắt nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 133,140.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Chiến lược trồng người được Hồ Chí Minh xác định ở vị trí nào trong sự phát triển kinh tế xã hội? (NHUNG HOÀNG)",
        "options": {
            "A": "Cơ bản",
            "B": "Trọng tâm",
            "C": "Quan trọng",
            "D": "Cần thiết"
        },
        "answer": "A",
        "explanation": "Trồng người có vị trí cơ bản, lâu dài vì con người là mục tiêu và động lực phát triển. Xây dựng kinh tế, xã hội cần đồng thời bồi dưỡng phẩm chất, tri thức và năng lực của các thế hệ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 138-139."
    },
    {
        "question": "Theo Hồ Chí Minh, tính đại chúng của nền văn hoá là phải phục vụ nhân dân và do: (NHUNG HOÀNG)",
        "options": {
            "A": "Nhà nước xây dựng nên.",
            "B": "Nhân dân xây dựng thêm.",
            "C": "Nhân dân xây dựng nên.",
            "D": "Nhà nước xây dựng thêm."
        },
        "answer": "C",
        "explanation": "Tính đại chúng yêu cầu văn hóa phục vụ đông đảo nhân dân và phát huy vai trò nhân dân sáng tạo văn hóa. Nhân dân không chỉ là người tiếp nhận mà còn là chủ thể xây dựng đời sống văn hóa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 123."
    },
    {
        "question": "Tính khoa học của văn hoá đòi hỏi phải đấu tranh chống lại chủ nghĩa duy tâm, thần bí, mê tín dị đoan, phải biết gạn đục, khơi trong, là sự kế thừa truyền thống tốt đẹp của dân tộc và tiếp thu:",
        "options": {
            "A": "Tinh hoa văn hoá nhân loại.",
            "B": "Bản sắc văn hoá nhân loại.",
            "C": "Truyền thống văn hoá nhân loại.",
            "D": "Tính dân tộc của văn hóa nhân loại."
        },
        "answer": "A",
        "explanation": "Văn hóa mới phải tiếp thu tri thức và giá trị tiến bộ, đồng thời loại bỏ mê tín, lạc hậu. Tính khoa học gắn với kế thừa truyền thống tốt và chọn lọc tinh hoa nhân loại, không phủ nhận toàn bộ quá khứ hoặc bắt chước bên ngoài.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 120-123."
    },
    {
        "question": "Khái niệm con người trong tư tưởng Hồ Chí Minh để chỉ:",
        "options": {
            "A": "Một con người cụ thể.",
            "B": "Một cộng đồng người.",
            "C": "Con người cụ thể gắn với hoàn cảnh lịch sử cụ thể.",
            "D": "Tất cả các phương án."
        },
        "answer": "C",
        "explanation": "Con người được hiểu trong những quan hệ gia đình, xã hội, dân tộc, giai cấp và hoàn cảnh lịch sử cụ thể. Vì thế, cần xem xét nhu cầu, điều kiện và khả năng thực tế, không chỉ bàn về một con người trừu tượng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 136-137."
    },
    {
        "question": "Hồ Chí Minh coi chủ nghĩa dân tộc là:",
        "options": {
            "A": "Mùa xuân của xã hội",
            "B": "Động lực lớn của đất nước",
            "C": "Nền tảng tư tưởng của Đảng",
            "D": ""
        },
        "answer": "B",
        "explanation": "Nội dung được chọn nên hiểu là sức mạnh yêu nước và ý thức dân tộc của nhân dân thuộc địa. Giáo trình nhấn mạnh nguồn lực ấy nhưng đồng thời chống chủ nghĩa dân tộc hẹp hòi; câu nhận định “động lực lớn” chưa được dẫn nguyên văn trong giáo trình này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 22,106-107,132.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong tác phẩm sửa đổi lối làm việc, tháng 10- 1947, Hồ Chí Minh viết: \"cũng giống như sông có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng thì phải có ...., không có... thì tài giỏi đến mấy cũng không lãnh đạo được nhân dân\".",
        "options": {
            "A": "trí tuệ",
            "B": "đạo đức",
            "C": "trình độ",
            "D": "chuyên môn"
        },
        "answer": "B",
        "explanation": "Chỗ trống là đạo đức vì Hồ Chí Minh dùng nguồn sông, gốc cây để giải thích nền tảng của người cách mạng. Tài năng không thay thế được phẩm chất đạo đức và trách nhiệm phục vụ nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 124."
    },
    {
        "question": "Lần đầu tiên Hồ Chí Minh đưa ra định nghĩa về văn hóa là vào thời gian nào?",
        "options": {
            "A": "Tháng 8-1943",
            "B": "Tháng 8-1945",
            "C": "Tháng 8-1946",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo trình ghi tháng 8-1943, khi còn trong nhà tù của Tưởng Giới Thạch, Hồ Chí Minh nêu quan niệm rộng về văn hóa. Định nghĩa bao quát các sáng tạo vật chất, tinh thần phục vụ sự tồn tại và cuộc sống con người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, CNXH là một xã hội phát triển cao về:",
        "options": {
            "A": "Văn hóa, giáo dục",
            "B": "Giáo dục, chính trị",
            "C": "Văn hóa, đạo đức",
            "D": "Chính trị, đạo đức"
        },
        "answer": "C",
        "explanation": "Chủ nghĩa xã hội không chỉ có kinh tế phát triển mà còn có đời sống văn hóa, đạo đức cao và quan hệ xã hội công bằng. Nâng cao con người về tinh thần là một bộ phận của mục tiêu phát triển xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 56-57."
    },
    {
        "question": "Hồ Chí Minh quan niệm mục tiêu cao nhất của chủ nghĩa xã hội là:",
        "options": {
            "A": "Nâng cao đời sống nhân dân.",
            "B": "Nâng cao đời sống tinh thần cho nhân dân.",
            "C": "Nâng cao đời sống vật chất cho nhân dân.",
            "D": ""
        },
        "answer": "A",
        "explanation": "Mục tiêu phát triển là làm cho nhân dân ngày càng có đời sống vật chất và tinh thần tốt hơn. Các mục tiêu chính trị, kinh tế, văn hóa phải cùng phục vụ con người, không lấy tăng trưởng tự thân làm mục đích cuối cùng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53,57-59.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"CNXH là một chế độ xã hội có nền kinh tế phát triển cao, dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về các tư liệu sản xuất chủ yếu, nhằm không ngừng nâng cao đời sống vật chất và tinh thần cho nhân dân, trước hết là cho (........)\"",
        "options": {
            "A": "Con người",
            "B": "Dân tộc",
            "C": "Giai cấp công nhân",
            "D": "Nhân dân lao động"
        },
        "answer": "D",
        "explanation": "Nhân dân lao động là chủ thể của xã hội mới và là đối tượng trước hết được hưởng thành quả phát triển. Tuy nhiên, giáo trình trình bày các nội dung của câu theo nhiều đoạn, chưa xác nhận toàn bộ câu ghép là một trích dẫn nguyên văn; chỗ điền D giữ theo bộ câu hỏi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 53,56-57."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Kẻ thù muốn đè bẹp ta về kinh tế thay bằng (...........), vì vậy ta phải phát triển kinh tế\". (NHUNG HOÀNG)",
        "options": {
            "A": "Chính trị",
            "B": "Quân sự",
            "C": "Ngoại giao",
            "D": "Văn hóa"
        },
        "answer": "B",
        "explanation": "Ý nghĩa của câu là độc lập cần nền kinh tế đủ mạnh để tránh bị lệ thuộc, không chỉ khả năng bảo vệ bằng quân sự. Giáo trình hỗ trợ mối quan hệ kinh tế, chủ nghĩa xã hội và độc lập, nhưng không dẫn nguyên văn câu này; từ điền B chưa được xác nhận trực tiếp trong giáo trình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 63,65-66."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Chỉ có chủ nghĩa cộng sản mới cứu (........), đem lại cho mọi người không phân biệt chủng tộc và nguồn gốc sự tự do, bình đẳng, bác ái, đoàn kết, ấm no trên quả đất, việc làm cho mọi người và vì mọi người, niềm vui, hòa bình, hạnh phúc...\"(NHUNG HOÀNG)",
        "options": {
            "A": "Con người",
            "B": "Loài người",
            "C": "Nhân dân",
            "D": "Nhân loại"
        },
        "answer": "D",
        "explanation": "Nhân loại thể hiện phạm vi giải phóng mọi người, không phân biệt chủng tộc hay xuất thân. Giáo trình giải thích tầm nhân văn, quốc tế của tư tưởng Hồ Chí Minh, nhưng chưa dẫn nguyên văn đầy đủ câu này; vì vậy D giữ theo tài liệu câu hỏi, không xem các trang liên quan là chứng cứ cho từng chữ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 37-39,137-138."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"CNXH là một xã hội (..........) làm nhiều hưởng nhiều, làm ít hưởng ít, không làm thì không được hưởng các dân tộc đều bình đẳng, miền núi được giúp đỡ để tiến kịp miền xuôi\".",
        "options": {
            "A": "Công bằng, dân chủ",
            "B": "Công bằng, bình đẳng",
            "C": "Công bằng, hợp lý",
            "D": "Công bằng, đạo đức"
        },
        "answer": "C",
        "explanation": "Công bằng, hợp lý gắn với phân phối theo lao động và bình đẳng giữa các dân tộc, hỗ trợ vùng còn khó khăn. Giáo trình cũng nêu ngoại lệ chăm lo người không có khả năng lao động; không thể hiểu không làm không hưởng theo cách bỏ mặc mọi người yếu thế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 57."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Động lực văn hoá, khoa học, giáo dục là động lực (......) không thể thiếu của chủ nghĩa xã hội\".",
        "options": {
            "A": "Quyết định",
            "B": "Vật chất",
            "C": "Tinh thần",
            "D": "Vật chất và tinh thần"
        },
        "answer": "C",
        "explanation": "Văn hóa, khoa học, giáo dục bồi dưỡng tri thức, đạo đức, ý chí và năng lực sáng tạo nên thuộc động lực tinh thần. Nó phối hợp với động lực vật chất và chính trị, không thay thế nhu cầu cải thiện đời sống thực tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 59-61,121-122."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Trong sự nghiệp xây dựng CNXH, chúng ta chưa có kinh nghiệm, nhất là về lĩnh vực (...........). Nó là công việc hết sức mới mẻ nên ta phải vừa làm, vừa học và có thể có vấp váp, thiếu sót\".",
        "options": {
            "A": "Chính trị",
            "B": "Quân sự",
            "C": "Kinh tế",
            "D": "Văn hóa"
        },
        "answer": "C",
        "explanation": "Việt Nam phải xây dựng nền kinh tế hiện đại từ điểm xuất phát thấp, nên cần vừa thực hiện, vừa học tập, tổng kết kinh nghiệm. Giáo trình xác nhận tính mới mẻ, khó khăn và yêu cầu sáng tạo, nhưng chưa dẫn nguyên văn câu có chỗ trống; đáp án C giữ theo tài liệu câu hỏi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-64."
    },
    {
        "question": "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Dân là chủ thì Chính phủ phải là (............ ). Nếu Chính phủ làm hại dân thì dân có quyền đuổi Chính phủ\".",
        "options": {
            "A": "Tôi tớ",
            "B": "Đầy tớ",
            "C": "Người lãnh đạo",
            "D": "Người hầu"
        },
        "answer": "B",
        "explanation": "Chính phủ nhận quyền lực do dân trao và phải phục vụ dân, nên được gọi là đầy tớ hoặc công bộc của dân. Nhân dân có quyền giám sát, thay đổi người được ủy quyền nếu họ không làm đúng trách nhiệm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 84,86."
    },
    {
        "question": "Hồ Chí Minh khẳng định: \"Nếu không có nhân dân thì Chính phủ không đủ lực lượng. Nếu không có Chính phủ, thì nhân dân không ai:",
        "options": {
            "A": "Đầy tớ",
            "B": "Ủng hộ",
            "C": "Dẫn đường",
            "D": "Phục vụ"
        },
        "answer": "C",
        "explanation": "Quan hệ giữa Chính phủ và nhân dân là quan hệ phối hợp trách nhiệm: dân tạo lực lượng, Chính phủ tổ chức và hướng dẫn công việc chung. Giáo trình giải thích mối quan hệ này, nhưng chưa dẫn nguyên văn câu có chỗ trống; từ “dẫn đường” giữ theo bộ câu hỏi gốc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 85-86."
    },
    {
        "question": "Theo Hồ Chí Minh, dân làm chủ, nghĩa là đề cập đến:",
        "options": {
            "A": "Vị thế của dân",
            "B": "Năng lực và trách nhiệm của dân",
            "C": "Cả a và b",
            "D": ""
        },
        "answer": "B",
        "explanation": "Dân làm chủ là thực hiện địa vị người chủ bằng năng lực tham gia và trách nhiệm với công việc xã hội. Người dân vừa có quyền, vừa cần được bồi dưỡng tri thức và phải thực hiện nghĩa vụ của mình.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 85.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Theo Hồ Chí Minh, có bảo đảm và phát huy ......... ở trong Đảng thì mới bảo đảm được dân chủ của toàn xã hội.",
        "options": {
            "A": "Dân chủ",
            "B": "Bình đẳng",
            "C": "Tự do",
            "D": "Bác ái"
        },
        "answer": "A",
        "explanation": "Đảng lãnh đạo Nhà nước và xã hội, nên thực hành dân chủ trong Đảng tạo cơ sở để phát huy dân chủ ngoài xã hội. Từ cần điền là dân chủ; việc này phải gắn với tổ chức, kỷ luật và bảo đảm quyền làm chủ thực tế của nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 75,83-85."
    },
    {
        "question": "Hồ Chí Minh cho rằng: Muốn khẳng định là một nước dân chủ thì phải có cấu tạo quyền lực xã hội mà ở đó người dân, cả trực tiếp, cả gián tiếp qua dân chủ đại diện, một hệ thống chính trị do:",
        "options": {
            "A": "\"Đảng cử ra\" và \"do Đảng tổ chức nên\"\"",
            "B": "\"Nhà nước cử ra\" và \"do Nhà nước tổ chức nên\"\"",
            "C": "\"Mặt trận Tổ quốc cử ra\" và \"do Mặt trận Tổ quốc tổ chức nên\"\"",
            "D": "\"dân cử ra"
        },
        "answer": "D",
        "explanation": "Một chế độ dân chủ cần bộ máy quyền lực có nguồn gốc từ sự lựa chọn của nhân dân. Người dân thực hiện quyền trực tiếp và thông qua đại diện do mình bầu, đồng thời có quyền giám sát những đại diện ấy.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 83-85."
    },
    {
        "question": "Theo Hồ Chí Minh, dân chủ thể hiện trên lĩnh vực nào là quan trọng nhất, nổi bật nhất ?",
        "options": {
            "A": "Chính trị",
            "B": "Kinh tế",
            "C": "Văn Hóa",
            "D": "Xã hội"
        },
        "answer": "A",
        "explanation": "Dân chủ chính trị thể hiện tập trung ở quyền lực thuộc về dân và quyền tham gia quyết định, quản lý, giám sát Nhà nước. Giáo trình cũng bàn dân chủ trong kinh tế và xã hội; việc chọn chính trị không có nghĩa các lĩnh vực khác không quan trọng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 55,83-85."
    },
    {
        "question": "Theo Hồ Chí Minh, Nhà nước do dân tạo ra và nhân dân tham gia quản lý là ở chỗ: toàn bộ công dân bầu ra .........., cơ quan quyền lực cao nhất của Nhà nước, cơ quan duy nhất có quyền lập pháp.",
        "options": {
            "A": "Đảng",
            "B": "Nhà nước",
            "C": "Quốc hội",
            "D": "Chủ tịch nước"
        },
        "answer": "C",
        "explanation": "Quốc hội là cơ quan đại diện do nhân dân bầu qua tổng tuyển cử. Giáo trình trình bày sự hình thành cơ quan này và nền tảng hợp hiến, hợp pháp của Nhà nước; quyền bầu đại diện là một cách nhân dân thực hiện quyền làm chủ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 84,87."
    },
    {
        "question": "Trong luận điểm về cách mạng giải phóng dân tộc, chỉ ra luận điểm sai về con đường, biện pháp , lực lượng và phương pháp cách mạng của Hồ Chí Minh ?(NHUNG HOÀNG)",
        "options": {
            "A": "Cách mạng giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản",
            "B": "Cách mạng giải phóng dân tộc, trong điều kiện của Việt Nam, muốn thắng lợi phải do Đảng Cộng sản lãnh đạo",
            "C": "Cách mạng giải phóng dân tộc phải dựa trên lực lượng đại đoàn kết dân tộc, lấy liên minh công - nông- trí làm nền tảng",
            "D": "Cách mạng giải phóng dân tộc cần chủ động, sáng tạo, có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc"
        },
        "answer": "B",
        "explanation": "Đáp án B của bộ câu hỏi không khớp giáo trình: Đảng Cộng sản lãnh đạo là luận điểm đúng, được nêu thành một mục riêng. A và D cũng đúng; C phù hợp tinh thần đoàn kết toàn dân, dù cần phân biệt cách diễn đạt nền tảng công - nông trong mục giải phóng dân tộc với công - nông - trí thức ở mục đại đoàn kết. Câu hỏi hiện tại chưa có phương án sai rõ ràng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-51."
    },
    {
        "question": "Khái niệm \"Đảng cầm quyền\" được Hồ Chí Minh sử dụng trong tác phẩm nào?(NHUNG HOÀNG)",
        "options": {
            "A": "Chánh cương vắn tắt của Đảng",
            "B": "Tuyên ngôn Độc lập",
            "C": "Sữa đổi lối làm việc",
            "D": "Di chúc"
        },
        "answer": "D",
        "explanation": "Giáo trình dẫn quan niệm trong Di chúc về Đảng cầm quyền và yêu cầu mỗi cán bộ, đảng viên giữ đạo đức, phục vụ nhân dân. Khái niệm gắn với điều kiện Đảng đã giành chính quyền và tiếp tục lãnh đạo Nhà nước, xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78."
    },
    {
        "question": "Theo Hồ Chí Minh:",
        "options": {
            "A": "Đại đoàn kết dẫn tộc là truyền thống quý báu của dân tộc ta",
            "B": "Đoàn kết dẫn tộc là cốt lỗi của truyền thống dẫn tộc",
            "C": "Đại đoàn toàn dân là cốt lỡi của chủ nghĩa yêu nước",
            "D": ""
        },
        "answer": "A",
        "explanation": "Đoàn kết là truyền thống tốt đẹp hình thành trong lịch sử dựng nước, giữ nước của dân tộc. Hồ Chí Minh kế thừa và phát triển truyền thống ấy thành chiến lược tập hợp sức mạnh nhân dân cho cách mạng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 22,77,98.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hoàn thành luận điểm sau: Hồ Chí Minh luôn đứng trên lập trưởng của... để giải quyết vẫn đề dân tộc.(NHUNG HOÀNG)",
        "options": {
            "A": "Đảng cộng sản",
            "B": "Giai cấp",
            "C": "Liên minh giai cấp",
            "D": "Người yêu nước"
        },
        "answer": "B",
        "explanation": "Hồ Chí Minh giải quyết vấn đề dân tộc từ lập trường giai cấp công nhân, gắn độc lập với chủ nghĩa xã hội. Tuy nhiên, ở thuộc địa phải đặt giải phóng dân tộc trước hết; lập trường giai cấp không có nghĩa bỏ qua lợi ích chung của dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-47,65-67."
    },
    {
        "question": "Luật cải cách ruộng đất quy định nội dung nào? (NHUNG HOÀNG)",
        "options": {
            "A": "Nghiêm cấm việc tiến hành bắt giữ và giết hại nhân dân, nghiêm cấm đánh đập, tra tấn hoặc dùng mọi thứ nhục hình khác",
            "B": "Nghiêm cấm việc tiến hành bắt giữ và giết hại trái phép, nghiêm cấm đánh đập, tra tẫn hoặc dùng mọi thứ nhục hình khác",
            "C": "Phân chia ruộng đất cho dẫn cày, dân nghèo, không can thiệp vào sản xuất",
            "D": "Từ hình toàn bộ bọn Việt gian, phần động, cường hào gian ác và những kẻ chống lại hoặc phá hoại cải cách ruộng đất"
        },
        "answer": "B",
        "explanation": "Nội dung nghiêm cấm bắt, giết trái phép, đánh đập và nhục hình phù hợp yêu cầu bảo vệ quyền con người, pháp luật nhân nghĩa. Tuy nhiên, giáo trình không trích Luật cải cách ruộng đất để xác nhận điều khoản trong B; cần đối chiếu văn bản luật gốc nếu muốn kiểm chứng chính xác nội dung pháp lý này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 89-90."
    },
    {
        "question": "Trong nghiên cứu tư tưởng Hồ Chí Minh, cần quán triệt quan điểm nào dưới đây?(NHUNG HOÀNG)",
        "options": {
            "A": "Quan điểm bộ phận",
            "B": "Quan điểm chinh thể",
            "C": "Quan điểm toàn diện",
            "D": "Quan điểm toàn cục"
        },
        "answer": "C",
        "explanation": "Quan điểm toàn diện yêu cầu xem đầy đủ các mặt và mối liên hệ giữa chúng trong hệ thống tư tưởng. Nó giúp tránh tách một vấn đề hoặc một câu nói ra khỏi mục tiêu, bối cảnh và toàn bộ quan điểm của Hồ Chí Minh.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 12-13."
    },
    {
        "question": "Để bảo đảm thực hiện thắng lợi chủ nghĩa xã hội ở Việt Nam trong thời kỳ quá độ, theo Hồ Chí Minh phải:",
        "options": {
            "A": "Giữ vững và tăng cường vai trò lãnh đạo của Đảng; nâng cao vai trò quản lý của nhà nước.",
            "B": "Phát huy tính tích cực, chủ động của các tổ chức chính trị-xã hội; xây dựng đội ngũ cán bộ đủ đức và tài.",
            "C": "Phát huy tính tích cực, chủ động của đội ngũ cán bộ, quản lý, kế cà các cá nhân đang định cư ở nước ngoài",
            "D": "Phát huy vai trò làm chủ của Đảng, nâng cao vai trò quản lý của nhà nước"
        },
        "answer": "A",
        "explanation": "Đảng phải lãnh đạo đúng, trong sạch và vững mạnh; Nhà nước phải quản lý hiệu quả, phát huy dân chủ và quyền làm chủ của nhân dân. Hai yêu cầu phối hợp để tổ chức, huy động nguồn lực và bảo đảm đường lối xây dựng chủ nghĩa xã hội được thực hiện.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 67-69,94-96."
    },
    {
        "question": "Theo Hồ Chí Minh, đầu là lực lương lãnh đạo Mặt trân dân tộc thống nhất?(NHUNG HOÀNG)",
        "options": {
            "A": "Nhà nước",
            "B": "Đảng Cộng sản",
            "C": "Chính phù",
            "D": "Quốc hội"
        },
        "answer": "B",
        "explanation": "Đảng Cộng sản vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận. Vai trò lãnh đạo phải dựa trên chính sách đúng, uy tín và sự thừa nhận của nhân dân, các thành viên, không phải sự tự phong.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 103."
    },
    {
        "question": "Nội dung lớn trong nguyên tắc xây dựng các mối quan hệ quốc tế đó của Hồ Chí Minh đó là",
        "options": {
            "A": "Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai",
            "B": "Xây dựng mối quan hệ hòa bình, hữu nghị, hợp tác với nhân dân lao động các nước trên",
            "C": "Hợp tác quốc tế trên cơ sở giữ vững toàn vẹn lãnh thổ",
            "D": "Liên kết phong trào đấu tranh của nhân dân Việt Nam với phong trào đấu tranh của nhân toàn thế giới"
        },
        "answer": "A",
        "explanation": "Làm bạn và không gây thù oán thể hiện chính sách đối ngoại hòa bình, thiện chí, mở rộng hợp tác. Nguyên tắc này gắn với tôn trọng độc lập, chủ quyền và quyền bình đẳng của mỗi nước, đồng thời giữ độc lập, tự chủ của Việt Nam.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 111-112."
    },
    {
        "question": "Quan điểm nào dưới đây thuộc về bản chất của chủ nghĩa xã hội trong tư tưởng Hồ Chí Minh như thế nào?",
        "options": {
            "A": "Có nền kinh tế, văn hóa, xã hội, đạo đức phát triến",
            "B": "Có nền kinh tế, văn hóa, và con người phát triển",
            "C": "Có nền kinh tế, văn hóa phát triển",
            "D": "Có nền kinh tế và đạo đức phát triển"
        },
        "answer": "A",
        "explanation": "Chủ nghĩa xã hội có các đặc trưng gắn bó: chính trị dân chủ, kinh tế phát triển, văn hóa và đạo đức cao, quan hệ xã hội công bằng. Phương án A phản ánh nhiều mặt của xã hội mới, thay vì chỉ thu hẹp bản chất vào kinh tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 55-57."
    },
    {
        "question": "Theo hồ chí minh, để kiểm soát quyền lực nhà nước trước tiên cần phải làm gì?",
        "options": {
            "A": "Phát huy vai trò giám sát của dân chúng",
            "B": "Phát huy vai trò, trách nhiệm của Đảng Cộng Sản",
            "C": "Tăng cường vai trò giám sát của hội động nhân dân",
            "D": "Tăng cường trách nhiệm của mặt trận tổ quốc"
        },
        "answer": "A",
        "explanation": "Đáp án A chưa khớp từ “trước tiên” trong câu hỏi. Giáo trình nêu trước hết phải phát huy vai trò, trách nhiệm của Đảng Cộng sản Việt Nam, tương ứng B; sau đó trình bày các hình thức kiểm soát và vai trò của nhân dân. Giám sát của dân rất quan trọng, nhưng không phải ý được sách đặt trước hết trong đoạn này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 90-91."
    },
    {
        "question": "Hồ Chí Minh công tác tại Viện nghiên cứu các vấn đề dân tộc và thuộc địa (ở số nhà 25 đại lộ Tvéckaia, Liên Xô) vào thời gian:",
        "options": {
            "A": "1923",
            "B": "1932",
            "C": "1934",
            "D": "1936"
        },
        "answer": "D",
        "explanation": "Giáo trình khái quát hoạt động của Hồ Chí Minh trong các giai đoạn phát triển tư tưởng, nhưng không ghi mốc làm việc tại viện nghiên cứu ở địa chỉ nêu trong câu hỏi. Năm 1936 ở D được giữ theo bộ câu hỏi gốc và chưa có căn cứ trực tiếp từ giáo trình này.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 30-33."
    },
    {
        "question": "Hồ Chí Minh cho rằng",
        "options": {
            "A": "Văn hoá vừa là mục tiêu, vừa là động lực của cách mạng => chăm lo đời sống vật chất và tinh thần của nhân dân",
            "B": "Văn hoá vừa là cơ sở, vừa là động lực của cách mạng => chăm lo đời sống vật chất và tinh thần của nhân dân",
            "C": "Văn hoá vừa là mục tiêu, vừa là nhân tố quyết định của cách mạng => chăm lo đời sống vật chất và tinh thần của nhân dân",
            "D": ""
        },
        "answer": "A",
        "explanation": "Văn hóa là mục tiêu vì cách mạng phải nâng cao đời sống tinh thần; là động lực vì văn hóa bồi dưỡng tri thức, đạo đức và ý chí hành động. Chăm lo đời sống nhân dân phải bao gồm cả vật chất và tinh thần.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 121-123.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Hồ Chí Minh xác định huy hiệu của thanh niên là:",
        "options": {
            "A": "Tay cầm cờ đỏ sao vàng tiến lên",
            "B": "Tây cầm súng tiến lên",
            "C": "Tay cầm khẩu hiệu tiến lên",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo trình bàn trách nhiệm giáo dục, xây dựng thế hệ mới nhưng không mô tả huy hiệu thanh niên như câu hỏi. Đáp án A được giữ theo tài liệu câu hỏi; nội dung hoặc lời nhận xét về huy hiệu cần nguồn trực tiếp khác để xác nhận.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 138-140.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Trong xã hội hiện nay, vận dụng tư tưởng HCM về đạo đức cán bộ có còn phù hợp không? (NHUNG HOÀNG)",
        "options": {
            "A": "Có. Vì tư tưởng của Người vẫn mang tính thời sự",
            "B": "Không. Vì tư tưởng của Người đã không còn phù hợp",
            "C": "Có. Vì tư tưởng của Người luôn mang tính thời sự vì vậy phải áp dụng phù hợp với từng nước.",
            "D": "Không. Vì cán bộ hiện nay đều được rèn luyện đạo đức cách mạng trước khi thực hiện đặc biệt và thấm nhuần chủ nghĩa Mác-Lênin"
        },
        "answer": "C",
        "explanation": "Các yêu cầu về trung thực, trách nhiệm, cần kiệm, liêm chính và phục vụ dân vẫn có ý nghĩa với cán bộ hiện nay. Việc vận dụng cần phù hợp hoàn cảnh cụ thể và thể hiện bằng hành vi, kết quả công việc, không chỉ bằng học thuộc khẩu hiệu.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 145-148,79-81."
    },
    {
        "question": "Theo Hồ Chí Minh, nhiệm vụ lịch sử của thời kỳ quá độ ở nước ta là phải:(NHUNG HOÀNG)",
        "options": {
            "A": "Xóa bỏ những tàn tích của chế độ xã hội cũ, xây dựng các giá trị mới phù hợp trên tất cà các lĩnh vực đời sống xã hội",
            "B": "Củng cố và phát triển các giá trị của xã hội cũ vẫn còn phù hợp để xây dựng chủ nghĩa xã hội",
            "C": "Đấu tranh cải tạo, xóa bỏ tàn tích của chế độ xã hội cũ, xây dựng các yếu tố mỗi phù hợp với quy luật tiến lên chủ nghĩa xã hội trên tất cả các lĩnh vực đời sống",
            "D": "Cải cách xã hội, kiên quyết đấu tranh bải trữ các giá trị của xã hội cũ để xây dựng chủ nghĩa xã hội trên tất cả các lĩnh vực đời sống"
        },
        "answer": "C",
        "explanation": "Thời kỳ quá độ vừa cải tạo quan hệ, thể chế và thói quen xã hội cũ, vừa xây dựng yếu tố mới trên các lĩnh vực chính trị, kinh tế, văn hóa, xã hội. Đây là quá trình toàn diện, lâu dài, trong đó xây dựng nền tảng mới có vai trò chủ chốt.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 62-63."
    },
    {
        "question": "Điền vào chỗ trống: Theo Nguyễn Ái Quốc \"Công nông là gốc cách mạng, còn học trò, địa chủ nhỏ, nhà buôn nhỏ là... của cách mạng\"?",
        "options": {
            "A": "Liên minh",
            "B": "Bầu bạn",
            "C": "Đồng minh",
            "D": "Bạn bè"
        },
        "answer": "B",
        "explanation": "Công nhân, nông dân là lực lượng gốc, còn các tầng lớp như học trò, địa chủ nhỏ, nhà buôn nhỏ có thể được tập hợp làm bầu bạn cách mạng. Cách xác định này nhằm mở rộng lực lượng yêu nước, không đánh đồng mọi tầng lớp ngoài công - nông với kẻ thù.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 49."
    },
    {
        "question": "Hồ Chí Minh khẳng định: \"Văn hoá phải soi đường cho quốc dân đi\" là nói đến vấn đề gì?",
        "options": {
            "A": "Văn hoá là tiêu chỉ để đánh giá trình độ dân tộc",
            "B": "Văn hoá chính trị là một trong những động lực cho sự phát triển",
            "C": "Văn hoá là bản sắc dân tộc",
            "D": "Văn hoá là niềm tin của quần chúng"
        },
        "answer": "B",
        "explanation": "Văn hóa có chức năng định hướng nhận thức, lý tưởng và hành động xã hội, nên có thể soi đường cho sự phát triển. Giáo trình xem văn hóa chính trị là một động lực quan trọng; tuy nhiên, không nên thu hẹp toàn bộ chức năng soi đường của văn hóa chỉ vào chính trị.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 121-122."
    },
    {
        "question": "Khi bàn về vấn đề đại đoàn kết toàn dân tộc, Hồ Chí Minh đi đến kết luận có tính tổng kết: \"Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công\". Ý nghĩa của tổng kết này là gì?",
        "options": {
            "A": "Nói về mục tiêu của đại đoàn kết toàn dân tộc",
            "B": "Nói về hình thức của đại đoàn kết toàn dân tộc",
            "C": "Nói về bản chất của đại đoàn kết toàn dân tộc",
            "D": "Nói về vai trò của đai đoàn kết toàn dân tôc"
        },
        "answer": "D",
        "explanation": "Lời tổng kết nhấn mạnh quy mô, mức độ đoàn kết gắn với khả năng thành công của cách mạng. Ý chính là vai trò chiến lược của đại đoàn kết toàn dân tộc, chứ không chỉ mô tả hình thức một tổ chức.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 98-99."
    },
    {
        "question": "Theo Hồ Chí Minh, đoàn kết phải căn cứ vào điều gì? (NHUNG HOÀNG)",
        "options": {
            "A": "Tự do",
            "B": "Phê bình",
            "C": "Đầu tranh",
            "D": "Lợi ích chung"
        },
        "answer": "D",
        "explanation": "Lợi ích chung của dân tộc và nhân dân là điểm quy tụ các lực lượng khác nhau. Trên cơ sở ấy, cần tôn trọng lợi ích riêng chính đáng và tránh biến đoàn kết thành việc phục vụ quyền lợi của một nhóm.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 101,103."
    },
    {
        "question": "Theo quan điểm của Hồ Chí Minh, nội dung xây dựng con người cần quan tâm xây dựng con người toàn diện như thế nào?",
        "options": {
            "A": "Vừa \"hồng\" vừa \"chuyên\"",
            "B": "Vừa \"cần\" vừa \"kiệm\"",
            "C": "Vừa \"kiệm\" vừa \"liêm\"",
            "D": "Vừa \"chuyên\" vửa \"cần\""
        },
        "answer": "A",
        "explanation": "Hồng thể hiện lý tưởng, đạo đức, bản lĩnh; chuyên thể hiện tri thức, kỹ năng và năng lực làm việc. Xây dựng con người toàn diện đòi hỏi hai mặt cùng phát triển và được thể hiện trong thực tiễn.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 139."
    },
    {
        "question": "Hồ Chí Minh vạch ra lực lượng cách mạng giải phóng dân tộc:",
        "options": {
            "A": "Cách mạng là sự nghiệp của quần chúng bị áp bức",
            "B": "Cách mạng là sự nghiệp của công nông",
            "C": "Cách mạng là sự nghiệp của mọi người dân",
            "D": ""
        },
        "answer": "A",
        "explanation": "Quần chúng bị áp bức là lực lượng trực tiếp thực hiện sự nghiệp giải phóng. Cần tập hợp toàn dân yêu nước, với công nhân, nông dân làm gốc, dưới sự lãnh đạo của Đảng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48-49.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Luận điểm \"Không có sự đồng tình ủng hộ của đại đa số nhân dân lao động đối với đội tiền phong của mình tức là đối với giai cấp vô sản, thì cách mạng vô sản không thể thực hiện được\" là của ai?",
        "options": {
            "A": "C. Mác",
            "B": "Ph. Ångghen",
            "C": "VI Lênin",
            "D": "Hồ Chí Minh"
        },
        "answer": "C",
        "explanation": "Giáo trình ghi rõ câu này là của V.I. Lênin và dùng nó để giải thích vai trò quần chúng đối với cách mạng. Hồ Chí Minh kế thừa tư tưởng ấy để khẳng định cách mạng là công việc chung của dân chúng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 48."
    },
    {
        "question": "Đâu không phải là điểm giống nhau giữa chủ nghĩa xã hội và chủ nghĩa cộng sản theo Hồ Chí Minh?",
        "options": {
            "A": "Sức sản xuất phát triển dựa trên chế độ tư hữu",
            "B": "Tư liệu sản xuất là của chung",
            "C": "Không còn giai cấp áp bức bóc lột",
            "D": "Năng suất lao động phát triển"
        },
        "answer": "A",
        "explanation": "Chế độ tư hữu về tư liệu sản xuất chủ yếu không phải đặc trưng chung được nêu cho chủ nghĩa xã hội và chủ nghĩa cộng sản. Giáo trình xác định kinh tế xã hội chủ nghĩa dựa trên lực lượng sản xuất hiện đại và công hữu về tư liệu sản xuất chủ yếu.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 54,56."
    },
    {
        "question": "Việt Nam Độc lập Đồng minh được thành lập vào thời gian nào?",
        "options": {
            "A": "19/5/1941",
            "B": "19/5/1930",
            "C": "26/3/1941",
            "D": "3/9/1945"
        },
        "answer": "A",
        "explanation": "Giáo trình ghi ngày 19-5-1941, Hồ Chí Minh sáng lập Mặt trận Việt Minh, tức Việt Nam Độc lập Đồng minh. Tổ chức này tập hợp lực lượng yêu nước nhằm thực hiện nhiệm vụ giải phóng dân tộc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 34."
    },
    {
        "question": "Theo Hồ Chí Minh, đường lối của nhà yêu nước nào còn \"nặng cốt cách phong kiến\"?(NHUNG HOÀNG)",
        "options": {
            "A": "Phan Châu Trinh",
            "B": "Phan Bội Châu",
            "C": "Hoàng Hoa Thám",
            "D": "Nguyễn Thái Học"
        },
        "answer": "C",
        "explanation": "Giáo trình nêu hạn chế và sự thất bại của các phong trào yêu nước trước khi có con đường mới. Tuy nhiên, nhận xét nguyên văn “nặng cốt cách phong kiến” đối với Hoàng Hoa Thám chưa được trích trực tiếp; đáp án C giữ theo bộ câu hỏi, cần văn bản gốc để xác nhận cách đánh giá.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 19-20,28."
    },
    {
        "question": "Hồ Chí Minh cho rằng công tác cán bộ cần chú ý.(NHUNG HOÀNG)",
        "options": {
            "A": "Hiểu và đánh giá đúng đảng viên",
            "B": "Hiểu và đánh giá đúng cán bộ",
            "C": "Hiểu và đánh giá đúng quần chúng",
            "D": ""
        },
        "answer": "B",
        "explanation": "Đánh giá đúng cán bộ là cơ sở để đào tạo, bố trí, sử dụng và giúp họ phát huy sở trường. Đánh giá chủ quan, chỉ nhìn một mặt hoặc vì quan hệ riêng có thể dẫn đến dùng người sai và làm hỏng công việc.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 81.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Nội dung cốt lõi của tư tưởng Hồ Chí Minh về mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội là gì?(NHUNG HOÀNG)",
        "options": {
            "A": "Độc lập dân tộc là cơ sở, tiền đề để tiến lên chủ nghĩa xã hội, chủ nghĩa xã hội là điều kiện để bảo đảm nền độc lập dân tộc vững chắc",
            "B": "Hồ Chí Minh đã chỉ ra độc lập dân tộc là bao gồm cả nội dung dân tộc và dân chủ",
            "C": "Độc lập dân tộc mà dân vẫn không có cơm ăn, áo mặc, không được học hành thì độc lập đó không có ý nghĩa gì",
            "D": "Cuộc cách mạng giải phóng dân tộc ở Việt Nam ngay từ đầu đã được Hồ Chí Minh xác định đi theo con đường cách mạng vô sản"
        },
        "answer": "A",
        "explanation": "Độc lập tạo điều kiện để dân tộc tự lựa chọn, thực hiện con đường xây dựng xã hội mới. Chủ nghĩa xã hội đem lại cơ sở kinh tế, chính trị và đời sống nhân dân để củng cố độc lập bền vững; hai mục tiêu gắn bó, không tách rời.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 65-67."
    },
    {
        "question": "Điều kiện thực hiện khối đại đoàn kết tư tưởng Hồ Chí Minh về khối đại đoàn kết dân tộc? (NHUNG HOÀNG)",
        "options": {
            "A": "Truyền thống yêu thiên nhiên",
            "B": "Truyền thống yêu con người",
            "C": "Truyền thống yêu nước, nhân ái, tinh thần cố kết cộng đồng",
            "D": "Truyền thống yêu hoà bình"
        },
        "answer": "C",
        "explanation": "Truyền thống yêu nước, nhân nghĩa và tinh thần cố kết cộng đồng là cơ sở tinh thần để quy tụ các lực lượng. Muốn đoàn kết thực tế còn cần lợi ích chung, sự khoan dung và niềm tin vào nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 101-102."
    },
    {
        "question": "Con người xã hội chủ nghĩa theo Hồ Chí Minh đó là",
        "options": {
            "A": "\"Có tư tưởng và tác phong xã hội chủ nghĩa\"",
            "B": "\"Những người nằm trong xã hội chủ nghĩa\"",
            "C": "\"Có ý thức xây dựng đất nước\"",
            "D": "\"Chăm lao động\""
        },
        "answer": "B",
        "explanation": "Đáp án B không phù hợp với tiêu chí trong giáo trình: chỉ sống trong một xã hội chưa đủ để trở thành con người xã hội chủ nghĩa. Giáo trình yêu cầu có lý tưởng, đạo đức, lối sống, tư tưởng và tác phong xã hội chủ nghĩa, nên lựa chọn A sát hơn; năng lực làm chủ và trách nhiệm với cộng đồng cũng rất quan trọng.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 139."
    },
    {
        "question": "Điểm khác biệt giữa tinh thần nhân ái của Hồ Chí Minh và Khổng Từ ở chỗ",
        "options": {
            "A": "Không chỉ tình thương cho dân tộc mình, mà còn cho các dân tộc khác",
            "B": "Không chỉ tình thương cho con người, mà còn cho cả giai cấp",
            "C": "Không chỉ tình thương cho đồng bào, mà còn cho cả nhân loại",
            "D": "Không chỉ thình thương giai cấp minh, mà còn cho các giai cấp khác"
        },
        "answer": "C",
        "explanation": "Tình yêu thương của Hồ Chí Minh hướng tới người bị áp bức, lao động và nhân loại tiến bộ, vượt giới hạn quốc gia, chủng tộc. Giáo trình xác nhận phạm vi nhân ái rộng ấy, nhưng chưa đưa so sánh trực tiếp đầy đủ với Khổng Tử; không nên từ đây kết luận đơn giản về toàn bộ học thuyết của Khổng Tử.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 130-132."
    },
    {
        "question": "Nhận định nào sau đây đúng với khải niệm con người trong tư tưởng Hồ Chí Minh?(NHUNG HOÀNG)",
        "options": {
            "A": "Dùng để chỉ con người chung chung",
            "B": "Dùng đẽ chỉ một cộng đông người",
            "C": "Dùng để chỉ con người cụ thế gắn với hoàn cảnh lịch sử cụ thế",
            "D": "Dùng để chỉ con người trừu tượng"
        },
        "answer": "C",
        "explanation": "Con người được xem trong hoàn cảnh lịch sử, xã hội và những quan hệ cụ thể, không phải khái niệm trừu tượng bất biến. Cách nhìn này giúp xác định đúng nhu cầu, điều kiện và phương pháp xây dựng, phát triển con người.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 136-137."
    },
    {
        "question": "Hồ Chí Minh cho rằng thầy giáo, cô giáo trong chế độ ta cần phải góp phần vào:(NHUNG HOÀNG)",
        "options": {
            "A": "Công cuộc xây dựng CNXH",
            "B": "Công cuộc kháng chiến chống Mỹ cứu nước",
            "C": "Công cuộc xây dựng xã hội mới",
            "D": ""
        },
        "answer": "A",
        "explanation": "Giáo dục bồi dưỡng phẩm chất và năng lực của con người, tạo lực lượng cho xây dựng chủ nghĩa xã hội. Vì vậy, nhà giáo có trách nhiệm vừa truyền tri thức, vừa nêu gương, giáo dục đạo đức và ý thức làm chủ.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 139-140.\nTài liệu không có lựa chọn D."
    },
    {
        "question": "Đâu là quan điểm của Hồ Chí Minh về văn hóa? (NHUNG HOÀNG)",
        "options": {
            "A": "Theo Hồ Chí Minh, văn hóa không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hóa tạo điều kiện thúc đẩy phát triển kinh tế",
            "B": "Theo Hồ Chí Minh, văn hóa không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hóa tạo điều kiện thúc đẩy phát triển xã hội",
            "C": "Theo Hồ Chí Minh, văn hóa không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hóá tạo điều kiện thúc đẩy phát triển chính trị",
            "D": "Theo Hồ Chí Minh, văn hóa không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hóá tạo điều kiện thúc đẩy phát triển thiết chế pháp luật"
        },
        "answer": "A",
        "explanation": "Kinh tế tạo điều kiện vật chất cho văn hóa, nhưng văn hóa cũng tác động trở lại kinh tế bằng tri thức, kỹ năng, đạo đức và động lực hành động. Do đó, phải chủ động phát triển văn hóa cùng kinh tế, không chỉ chờ kinh tế phát triển xong.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 119,121-122."
    },
    {
        "question": "Đề cập đến vấn đề dân tộc thuộc địa, khác với Mác và Lênin, Hồ Chí Minh bàn nhiều về cuộc đấu tranh nào:(NHUNG HOÀNG)",
        "options": {
            "A": "Chống chủ nghĩa phát xít, giải phóng giai cấp",
            "B": "Chống địa chủ phong kiến, giải phóng cho nông dân",
            "C": "Chống chủ nghĩa thực dân, đầu tranh giải phóng dân tộc ở thuộc địa",
            "D": "Chống chủ nghĩa tư bản, giải phóng cho giai cấp"
        },
        "answer": "C",
        "explanation": "Hồ Chí Minh tập trung giải quyết thực tiễn các dân tộc bị thực dân thống trị và khẳng định khả năng chủ động của cách mạng thuộc địa. Cách diễn đạt “khác với Mác và Lênin” cần hiểu là trọng tâm vận dụng trong hoàn cảnh cụ thể, không có nghĩa Mác, Lênin không quan tâm vấn đề dân tộc, thuộc địa.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 46-51."
    },
    {
        "question": "Người cho rằng: \"Trước mặt quần chúng, không phải ta cứ viết lên trán chữ \"cộng sản\" mà ta được họ yêu mến. Quần chúng chi quý mến những người có...\". Từ nào còn thiếu trong câu trên?",
        "options": {
            "A": "tư cách, đạo đức",
            "B": "tư cách, học thức",
            "C": "đạo đức, học thức",
            "D": "uy quyền, đạo đức"
        },
        "answer": "A",
        "explanation": "Nhân dân quý trọng người có tư cách, đạo đức thể hiện trong hành động phục vụ, không chỉ người mang danh cộng sản. Vì thế, uy tín phải được xây dựng bằng phẩm chất và việc làm thực tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 125."
    },
    {
        "question": "Để có thể biến sức mạnh tinh thần đoàn kết thành sức mạnh vật chất, theo Hồ Chí Minh cần xây dựng tổ chúc nào?",
        "options": {
            "A": "Đàng Cộng sản",
            "B": "Quân đội",
            "C": "Nhà nước",
            "D": "Mặt trận dân tộc thống nhất"
        },
        "answer": "D",
        "explanation": "Mặt trận dân tộc thống nhất tập hợp các lực lượng yêu nước thành tổ chức có mục tiêu, nguyên tắc và hoạt động chung. Nhờ tổ chức ấy, tình cảm và ý chí đoàn kết trở thành sức mạnh hành động thực tế.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 102-105."
    },
    {
        "question": "\"Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hàng ngày mà phát triển và củng cố. Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong\". Luận điểm trên đây diễn đạt nội dung nào trong tư tưởng Hồ Chí Minh về đạo đức?",
        "options": {
            "A": "Vai trò của đạo đức cách mạng",
            "B": "Nguyên tắc xây dựng đạo đức mới",
            "C": "Nội dung của đạo đức cách mạng",
            "D": "Tất cả các phương án"
        },
        "answer": "B",
        "explanation": "Đoạn nói nhấn mạnh đạo đức phải được rèn luyện bền bỉ, thường xuyên qua đấu tranh và thực tiễn. Nó thể hiện nguyên tắc tu dưỡng đạo đức suốt đời, không xem đạo đức là phẩm chất tự nhiên có sẵn hoặc không thay đổi.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 135-136."
    },
    {
        "question": "Chủ tịch Hồ Chí Minh là hiện thân cho tinh thần dân tộc ta, Người đã nói rằng: Cái mà tôi cần nhất trên đời là đồng bào tôi được tự do, \"...\". Chọn đáp án đúng nhất điền vào dấu \"...\" là?",
        "options": {
            "A": "Tổ quốc tôi được độc lập.",
            "B": "Đất nước tôi được thống nhất.",
            "C": "Tổ quốc tôi được bình đẳng.",
            "D": "Đất nước tôi được phát triển"
        },
        "answer": "A",
        "explanation": "Chỗ trống là Tổ quốc được độc lập, gắn với tự do của đồng bào. Hai mục tiêu thể hiện động cơ xuyên suốt của Hồ Chí Minh: độc lập của đất nước phải đi cùng quyền và đời sống của nhân dân.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 42."
    },
    {
        "question": "Theo Hồ Chí Minh, văn hoá phải sữa đổi được những thói xấu nào?",
        "options": {
            "A": "Tham nhũng",
            "B": "Lưới biếng",
            "C": "Phù hoa, xa xi",
            "D": "Tâm lý tiểu nông"
        },
        "answer": "ABC",
        "explanation": "Giáo trình nêu văn hóa phải sửa đổi tham nhũng, lười biếng, phù hoa và xa xỉ. Vì cả A, B, C đều là những thói xấu được liệt kê, câu này giữ đáp án nhiều lựa chọn ABC; ý nghĩa là văn hóa phải cải tạo hành vi và đời sống xã hội.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 118."
    },
    {
        "question": "Trong tư tưởng Hồ Chí Minh, quan điểm nào về mối quan hệ giữa Đảng Cộng sản và nhân dẫn được thế hiện rõ nhất?(NHUNG HOÀNG)",
        "options": {
            "A": "Nhân dân là nguồn gốc và động lực của Đảng",
            "B": "Đảng phải lãnh đạo nhân dân trong mọi lĩnh vực",
            "C": "Đảng phụ thuộc hoàn toàn vào ý kiến nhân dân",
            "D": "Nhân dân chỉ là đối tượng phục vụ của Đảng"
        },
        "answer": "A",
        "explanation": "Đảng xuất phát từ phong trào của nhân dân và phải gắn bó với dân để có lực lượng, trí tuệ và sự ủng hộ. Vì vậy, dân là nền tảng sức mạnh của Đảng; quan hệ với dân phải thể hiện qua lắng nghe, phục vụ và chịu giám sát.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 77-78."
    },
    {
        "question": "Hồ Chí Minh bắt đầu quan tâm đến khẩu hiệu \"Tự do - Bình đẳng - Bác ái\" của Đại Cách mạng Pháp từ khi nào?",
        "options": {
            "A": "Học sinh tiểu học",
            "B": "Học sinh trường Quốc học Huế",
            "C": "Thầy giáo dạy học ở trường Dục Thanh",
            "D": "Khi đặt chân đến nước Pháp"
        },
        "answer": "A",
        "explanation": "Giáo trình ghi Hồ Chí Minh quan tâm khẩu hiệu này từ khi học Trường tiểu học Pháp - bản xứ ở Vinh năm 1905. Việc tìm hiểu giá trị tự do, bình đẳng, bác ái sau đó trở thành một phần trong quá trình tiếp thu tinh hoa văn hóa phương Tây.\nĐối chiếu: Giáo trình Tư tưởng Hồ Chí Minh 2021, trang PDF 24."
    }
];
