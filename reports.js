function getImages(path, count, ext = 'png') {
    let imgs = '';
    for (let i = 1; i <= count; i++) {
        imgs += `<img src="${path}/image${i}.${ext}" alt="Minh chứng" style="width: 100%; max-width: 400px; object-fit: contain; border: 1px solid var(--border); border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onerror="this.style.display='none'">`;
    }
    return imgs;
}

const reportData = [
    {
        week: 1,
        title: "TÌM HIỂU THAO TÁC CƠ BẢN VÀ QUẢN LÝ TẬP TIN",
        summary: "Báo cáo tìm hiểu tổng quan về chuyển đổi số và các khái niệm cơ bản về Trí tuệ nhân tạo trong thời đại mới.",
        content: `
            <div class="t6-part">
                <h3 class="t6-part-title">Quy trình thao tác</h3>
                <ul class="t6-col-list">
                    <li>1. Mở File Explorer: Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.</li>
                    <li>2. Truy cập ổ đĩa/thư mục: Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống.</li>
                    <li>3. Tạo thư mục mới: Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_NguyenVanA. Nhấn Enter.</li>
                    <li>4. Vào thư mục vừa tạo: Nhấp đúp vào thư mục ThucHanh_NguyenVanA.</li>
                    <li>5. Tạo tệp tin văn bản: Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là GhiChu.txt. Nhấn Enter.</li>
                    <li>6. Đổi tên tệp tin: Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter.</li>
                    <li>7. Tạo thư mục con: Trong thư mục ThucHanh_NguyenVanA, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu.</li>
                    <li>8. Sao chép tệp tin (Copy & Paste): Nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Copy. Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống bên trong -> chọn Paste.</li>
                    <li>9. Di chuyển tệp tin (Cut & Paste): Quay lại thư mục ThucHanh_NguyenVanA. Tạo một tệp mới tên là DiChuyen.txt. Nhấp chuột phải vào tệp DiChuyen.txt -> chọn Cut. Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống -> chọn Paste.</li>
                    <li>10. Xóa tệp tin: Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).</li>
                    <li>11. Xóa vĩnh viễn: Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.</li>
                    <li>12. Khôi phục từ Thùng rác: Tìm biểu tượng Recycle Bin trên màn hình nền, nhấp đúp để mở. Tìm tệp GhiChuQuanTrong.txt đã xóa, nhấp chuột phải vào nó và chọn Restore.</li>
                </ul>
                <div class="t6-images" style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; justify-content: center;">
                    ${getImages('assets/reports/tuan1', 20)}
                </div>
            </div>
        `
    },
    {
        week: 2,
        title: "TÌM KIẾM VÀ ĐÁNH GIÁ THÔNG TIN HỌC THUẬT",
        summary: "Ứng dụng học sâu trong phát hiện mã độc",
        content: `
            <div class="t6-part">
                <h4 class="t6-h4">1. Mục tiêu và phạm vi tìm kiếm</h4>
                <p class="t6-p">Tìm kiếm, lựa chọn và đánh giá các nguồn học thuật đáng tin cậy để hiểu cách deep learning được dùng trong phân tích tệp thực thi, ứng dụng Android và dữ liệu hành vi liên quan đến mã độc. Tập trung vào giai đoạn 2011-2025.</p>
                <h4 class="t6-h4">2. Chiến lược tìm kiếm</h4>
                <p class="t6-p">Cơ sở dữ liệu học thuật: Google Scholar, arXiv, IEEE Xplore, ACM Digital Library. Tạp chí khoa học chuyên ngành: ưu tiên IEEE Transactions on Information Forensics and Security.</p>
                <h4 class="t6-h4">3. Bảng đánh giá nguồn tham khảo</h4>
                <div class="t6-table-wrap">
                    <table class="t6-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Nguồn</th>
                                <th>Đánh giá độ tin cậy</th>
                                <th>Điểm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Saxe and Berlin (2015)</td>
                                <td>Tác giả thuộc Invincea Labs; bài có ảnh hưởng sớm trong hướng deep learning cho malware.</td>
                                <td>4/5 (Cao)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Raff et al. (2018)</td>
                                <td>Phương pháp MalConv học trực tiếp từ byte của file PE; được trích dẫn rộng.</td>
                                <td>5/5 (Rất cao)</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Anderson and Roth (2018)</td>
                                <td>Đóng góp bộ dữ liệu EMBER và baseline rõ ràng; rất hữu ích cho tái lập.</td>
                                <td>5/5 (Rất cao)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    {
        week: 3,
        title: "THỬ NGHIỆM VÀ PHÂN TÍCH PROMPT ENGINEERING",
        summary: "Machine Learning và Deep Learning - Phân tích cách thiết kế prompt tối ưu",
        content: `
            <div class="t6-part">
                <h4 class="t6-h4">1. Tác vụ 1: Tóm tắt tài liệu học thuật</h4>
                <div class="t6-prompt">
                    <div class="t6-prompt-label">Prompt nâng cao</div>
                    <div class="t6-prompt-body">Bạn là một chuyên gia khoa học dữ liệu. Hãy tóm tắt Chương 4 về Học máy và Học sâu cho sinh viên CNTT. Sử dụng cấu trúc: 1. Tổng quan; 2. Quy trình; 3. Phân loại kỹ thuật. Trình bày dạng bullet points.</div>
                </div>
                <h4 class="t6-h4">2. Tác vụ 2: Giải thích khái niệm Mạng LSTM</h4>
                <div class="t6-prompt">
                    <div class="t6-prompt-label">Prompt nâng cao (Chain-of-Thought + Analogy)</div>
                    <div class="t6-prompt-body">Giải thích cơ chế của LSTM dựa trên phần 4.6.4. Dùng phép ẩn dụ 'băng chuyền' để mô tả Cell State, phân tích từng bước logic của các cổng (forget gate, input gate, output gate) và kết luận tại sao nó giữ thông tin lâu hơn RNN.</div>
                </div>
                <h4 class="t6-h4">3. So sánh và Phân tích</h4>
                <p class="t6-p"><strong>Prompt Nâng cao</strong> đem lại độ chính xác rất cao, cấu trúc chuyên nghiệp và tính ứng dụng tốt (dùng để giảng dạy hoặc nghiên cứu sâu). Thành công nhờ áp dụng: Context (vai trò chuyên gia), Constraint (yêu cầu nội dung cụ thể), Structure (định dạng đầu ra rõ ràng).</p>
                
                <div class="t6-images" style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; justify-content: center;">
                    ${getImages('assets/reports/tuan 3', 3)}
                </div>
            </div>
        `
    },
    {
        week: 4,
        title: "THÀNH THẠO CÔNG CỤ HỢP TÁC TRỰC TUYẾN",
        summary: "Sử dụng Notion, GG Docs, GG Drive, GG Meet và Zalo để quản lý dự án 'AI in the Enterprise'",
        content: `
            <div class="t6-part">
                <h4 class="t6-h4">Quá trình làm việc</h4>
                <ul class="t6-col-list">
                    <li><strong>Ngày 1:</strong> Lên kế hoạch trên Notion, phân chia nhiệm vụ và timeline cho nhóm. Họp khởi động qua GG Meet.</li>
                    <li><strong>Ngày 2-3:</strong> Nghiên cứu nội dung thô. Mỗi cá nhân soạn thảo qua GG Docs và lưu trữ chung trên GG Drive. Đánh dấu trạng thái 'DONE' trên Notion.</li>
                    <li><strong>Ngày 4:</strong> Họp Meet duyệt nội dung, lên kế hoạch thiết kế slide.</li>
                    <li><strong>Ngày 5:</strong> Làm slide, cập nhật tiến độ liên tục trên Notion.</li>
                    <li><strong>Ngày 6:</strong> Tổng duyệt toàn bộ dự án qua GG Meet và trao đổi nhanh qua Zalo.</li>
                </ul>
                <h4 class="t6-h4">Phân tích hiệu quả công cụ</h4>
                <p class="t6-p"><strong>Notion:</strong> Rất hiệu quả trong việc theo dõi tiến độ từng người.<br><strong>GG Drive & Docs:</strong> Không gian lưu trữ và soạn thảo tuyệt vời, dễ dàng đồng bộ.<br><strong>GG Meet & Zalo:</strong> Đảm bảo thông tin xuyên suốt và họp trực tuyến ổn định.</p>
                
                <div class="t6-images" style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; justify-content: center;">
                    ${getImages('assets/reports/tmpowajq1_bai-tap-bao-cao-tuan-4', 17)}
                </div>
            </div>
        `
    },
    {
        week: 5,
        title: "SỬ DỤNG AI TẠO SINH TRONG SÁNG TẠO NỘI DUNG",
        summary: "Dự án Infographic: Hành Trình Phát Triển Trí Tuệ Nhân Tạo (1950–2025)",
        content: `
            <div class="t6-part">
                <h4 class="t6-h4">Công cụ AI sử dụng</h4>
                <div class="t6-compare">
                    <div class="t6-compare-col t6-positive">
                        <div class="t6-col-label">Claude (Anthropic)</div>
                        <p class="t6-p">AI tạo văn bản. Nghiên cứu, viết nội dung, biên tập các mô tả sự kiện. Tỷ lệ AI 60% / Cá nhân 40%.</p>
                    </div>
                    <div class="t6-compare-col t6-positive">
                        <div class="t6-col-label">DALL-E 3 (OpenAI)</div>
                        <p class="t6-p">AI tạo hình ảnh. Minh họa cho từng cột mốc. Tỷ lệ AI 80% / Cá nhân 20%.</p>
                    </div>
                </div>
                <h4 class="t6-h4">Quá trình thực hiện</h4>
                <p class="t6-p">Tạo một <strong>Master Prompt Template</strong> cho DALL-E 3: <em>[NỘI DUNG], flat vector illustration, minimalist style, navy blue and amber color palette, white background...</em> để giữ tính đồng nhất về phong cách. Claude được dùng để trích xuất 8 cột mốc quan trọng (như Bài kiểm tra Turing, Deep Blue, ChatGPT).</p>
                <h4 class="t6-h4">Đánh giá chung</h4>
                <p class="t6-p">Tỷ lệ đóng góp: <strong>AI ~47%, Cá nhân ~53%</strong>. AI là trợ lý mạnh mẽ trong khi con người đưa ra quyết định sáng tạo cuối cùng (bố cục bằng Canva, chỉnh sửa màu sắc, v.v.).</p>
                
                <div class="t6-images" style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; justify-content: center;">
                    ${getImages('assets/reports/tuan 5', 8)}
                </div>
            </div>
        `
    },
    {
        week: 6,
        title: "AI CÓ TRÁCH NHIỆM VÀ ĐẠO ĐỨC TRONG HỌC TẬP",
        summary: "Phân tích tác động và chính sách sử dụng AI trong môi trường Đại học",
        content: `
            <div class="t6-part">
                <h4 class="t6-h4">Quan điểm chung về việc sử dụng AI</h4>
                <p class="t6-p">Trí tuệ nhân tạo (AI) là công cụ hỗ trợ mạnh mẽ giúp sinh viên tìm kiếm thông tin, tóm tắt tài liệu và gợi ý ý tưởng. Tuy nhiên, <strong>không được dùng AI để sao chép nguyên văn</strong> hoặc làm hộ bài tập toàn bộ. Sinh viên vẫn phải tự chịu trách nhiệm về nội dung học thuật, đánh giá và trích dẫn rõ ràng.</p>
                <div class="t6-callout">
                    AI được xem như <strong>công cụ hỗ trợ học tập (brainstorming, sửa lỗi ngữ pháp)</strong>, chứ không phải người làm thay. Sinh viên vẫn là người quyết định cuối cùng.
                </div>
                <h4 class="t6-h4">Ví dụ Prompt tạo dàn ý thuyết trình</h4>
                <div class="t6-prompt">
                    <div class="t6-prompt-label">Prompt</div>
                    <div class="t6-prompt-body">Hãy giúp tôi lập dàn ý cho bài thuyết trình 5 phút về tác động của AI trong giáo dục đại học.</div>
                </div>
                <div class="t6-images" style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; justify-content: center;">
                    ${getImages('assets/reports/tuan 6', 1)}
                </div>
            </div>
        `
    },
    {
        week: 7,
        title: "SỬ DỤNG ELICIT/CONSENSUS TỔNG QUAN TÀI LIỆU KHOA HỌC",
        summary: "Nghiên cứu ứng dụng của Graphene trong pin Lithium-ion bằng công cụ AI phân tích tài liệu",
        content: `
            <div class="t6-part">
                <h4 class="t6-h4">Công cụ và Phương pháp</h4>
                <p class="t6-p">Sử dụng <strong>Elicit</strong> và <strong>Consensus</strong> để tìm kiếm và tổng hợp tài liệu khoa học nhanh chóng. Câu hỏi nghiên cứu: <em>"Graphene được ứng dụng như thế nào để cải thiện hiệu suất của pin Lithium-ion?"</em></p>
                <h4 class="t6-h4">Kết quả trích xuất bởi AI</h4>
                <ul class="t6-col-list">
                    <li>Graphene giúp tăng khả năng dẫn điện và dung lượng pin Lithium-ion.</li>
                    <li>Giảm đáng kể thời gian sạc và tăng tuổi thọ chu kỳ của pin.</li>
                    <li>Cải thiện độ ổn định nhiệt cho vật liệu Composite Graphene-kim loại.</li>
                </ul>
                <h4 class="t6-h4">Nhận xét</h4>
                <p class="t6-p">Elicit và Consensus tiết kiệm thời gian lớn khi phải đọc tổng quan các bài báo (Literature Review). Tuy nhiên, vẫn cần đọc lại bài báo gốc để kiểm tra tính chính xác của dữ liệu AI trích xuất (đặc biệt là các số liệu và biểu đồ).</p>
                
                <div class="t6-images" style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; justify-content: center;">
                    ${getImages('assets/reports/tuan 7', 1)}
                    <img src="assets/reports/tuan 7/image2.svg" alt="Minh chứng" style="width: 100%; max-width: 400px; object-fit: contain; border: 1px solid var(--border); border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onerror="this.style.display='none'">
                </div>
            </div>
        `
    }
];

function renderReports() {
    const container = document.querySelector('#reports-container');
    if (!container) return;

    let html = '<div class="task-grid" style="display: flex; flex-direction: column; gap: 2rem; width: 100%;">';

    reportData.forEach(task => {
        html += `
            <div class="task-card task-card--full" style="display: flex; flex-direction: column; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.2); border-radius: 12px; overflow: hidden; background: var(--bg-secondary);">
                <div class="task-header" style="background: rgba(99, 102, 241, 0.05); padding: 1.5rem 2rem; border-bottom: 1px solid var(--border-color);">
                    <div class="task-number" style="font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--accent-primary); letter-spacing: 1px;">
                        BÁO CÁO TUẦN ${task.week}
                    </div>
                    <h3 class="task-title" style="font-size: 1.4rem; color: var(--text-primary); font-weight: 700;">${task.title}</h3>
                    <p class="task-desc" style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.8rem; display: flex; align-items: flex-start; gap: 0.8rem; line-height: 1.5;">
                        <i data-lucide="arrow-right" style="width: 20px; height: 20px; flex-shrink: 0; color: var(--accent-primary); margin-top: 2px;"></i>
                        <span>${task.summary}</span>
                    </p>
                </div>
                <div class="task-body t6-meta" style="padding: 0 2rem 2rem;">
                    ${task.content}
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
    
    // Re-initialize icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', renderReports);
