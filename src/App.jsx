import { useEffect, useState } from 'react';
import BookmarkletLink from './components/BookmarkletLink';
import './App.css';
import { Footer, Header } from './components/HeaderAndFooter.jsx';
import { CompanionNameInput, InputText, KanaInputs, NameInputs } from './components/InputText.jsx';

function App() {
  const [formData, setFormData] = useState({
    last_name: '',
    first_name: '',
    last_name_kana: '',
    first_name_kana: '',
    email: '',
    postal_code: '',
    prefecture: '',
    city: '',
    address1: '',
    address2: '',
    phone: '',
    birthday: '',
    gender: '',
    companion: 'なし', // Default value for companion
    companion_last_name: '',
    companion_first_name: '',
    companion_phone: '',
    companion_address: '',
    companion_email: '',
  });
  const [bookmarkletHref, setBookmarkletHref] = useState('#');
  const [bookmarkletCode, setBookmarkletCode] = useState('');
  const [copyStatus, setCopyStatus] = useState('コードをコピー');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const getButtonCss = (_disabled = false) => {
    const text = 'mt-4 bg-gray-600 text-white px-4 py-2 rounded opacity-50 cursor-not-allowed';
    return text;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const generateBookmarkletSourceCode = (hasCompanion) => {
      // Create an if branch based on the companion field
      if (hasCompanion) {
        // Add any specific logic for when companion is 'あり'
        return `(
      function(){
          document.getElementById('last_name').value = '${formData.last_name}';
          document.getElementById('first_name').value = '${formData.first_name}';
          document.getElementById('last_name_kana').value = '${formData.last_name_kana}';
          document.getElementById('first_name_kana').value = '${formData.first_name_kana}';
          document.getElementById('email_1').value = '${formData.email}';
          document.getElementById('email_1_confirm').value = '${formData.email}';
          document.getElementById('zip').value = '${formData.postal_code}';
          document.getElementById('prefecture').value = '${formData.prefecture}';
          document.getElementById('city').value = '${formData.city}';
          document.getElementById('address_1').value = '${formData.address1}';
          document.getElementById('address_2').value = '${formData.address2}';
          document.getElementById('tel_1').value = '${formData.phone}';
          document.getElementById('sex-0').value = '${formData.gender}';
          // Split the birthday into year, month, and day if needed
          const birthdayParts = formData.birthday.split('-');
          if (birthdayParts.length === 3) {
            document.getElementById("birthday.year").value = birthdayParts[0];
            document.getElementById("birthday.month").value = birthdayParts[1];
            document.getElementById("birthday.day").value = birthdayParts[2];
          }
          // For Rakuten Ticket specific fields
          let inputNodes = document.querySelectorAll("#wishForm > div:nth-child(4) > div > div input");
          inputNodes.forEach((e) => {
            const idValue = e.getAttribute("id");
            switch (idValue) {
              case "申込時の注意事項等.0":
              case "最終確認.0":
                e.checked = true;
                break;
              case "同行者・姓":
                e.value = "${formData.companion_last_name}";
                break;
              case "同行者名・名":
                e.value =  "${formData.companion_first_name}";
                break;
              case "同行者電話番号(半角・ハイフン不要)":
                e.value = "${formData.companion_phone}";
                break;
              case "同行者住所":
                e.value = "${formData.companion_address}";
                break;
              case "同行者メールアドレス":
                e.value = "${formData.companion_email}";
                break;
              case "申込者名・姓(来場代表者苗字)":
                e.value = "${formData.last_name}";
                break;
              case "申込者名・名":
                e.value = "${formData.first_name}";
                break;
              case "申込者電話番号(半角・ハイフン不要)":
                e.value = "${formData.phone}";
                break;
              default:
                console.log("Unexpected id: " + idValue);
            }
          });
      })();`;
      } else {
        // Add any specific logic for when companion is 'なし'
        return `(
      function(){
          document.getElementById('last_name').value = '${formData.last_name}';
          document.getElementById('first_name').value = '${formData.first_name}';
          document.getElementById('last_name_kana').value = '${formData.last_name_kana}';
          document.getElementById('first_name_kana').value = '${formData.first_name_kana}';
          document.getElementById('email_1').value = '${formData.email}';
          document.getElementById('email_1_confirm').value = '${formData.email}';
          document.getElementById('zip').value = '${formData.postal_code}';
          document.getElementById('prefecture').value = '${formData.prefecture}';
          document.getElementById('city').value = '${formData.city}';
          document.getElementById('address_1').value = '${formData.address1}';
          document.getElementById('address_2').value = '${formData.address2}';
          document.getElementById('tel_1').value = '${formData.phone}';
          document.getElementById('sex-0').value = '${formData.gender}';
          // Split the birthday into year, month, and day if needed
          const birthdayParts = formData.birthday.split('-');
          if (birthdayParts.length === 3) {
            document.getElementById("birthday.year").value = birthdayParts[0];
            document.getElementById("birthday.month").value = birthdayParts[1];
            document.getElementById("birthday.day").value = birthdayParts[2];
          }

          // For Rakuten Ticket specific fields
          let inputNodes = document.querySelectorAll("#wishForm > div:nth-child(4) > div > div input");
          inputNodes.forEach((e) => {
            const idValue = e.getAttribute("id");
            switch (idValue) {
              case "申込時の注意事項等.0":
              case "最終確認.0":
                e.checked = true;
                break;
              case "同行者・姓":
              case "同行者名・名":
                e.value = "なし";
                break;
              case "同行者電話番号(半角・ハイフン不要)":
              case "同行者住所":
              case "同行者メールアドレス":
                e.value = "1";
                break;
              case "申込者名・姓(来場代表者苗字)":
                e.value = "${formData.last_name}";
                break;
              case "申込者名・名":
                e.value = "${formData.first_name}";
                break;
              case "申込者電話番号(半角・ハイフン不要)":
                e.value = "${formData.phone}";
                break;
              default:
                console.log("Unexpected id: " + idValue);
            }
          });
      }
  )();`;
      }
    };

    const script = generateBookmarkletSourceCode(formData.companion === 'あり');
    console.log(script);
    setBookmarkletHref(`javascript:${encodeURIComponent(script)}`);
    setBookmarkletCode(script);

    // Disable button if protocol is HTTP
    const currentProtocol = window.location.protocol;
    setIsButtonDisabled(currentProtocol === 'http:');
  }, [formData]);

  const handleCopy = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(bookmarkletCode)
        .then(() => {
          setCopyStatus('コピーしました！');
          setTimeout(() => setCopyStatus('コードをコピー'), 2000);
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
          setCopyStatus('コピー失敗');
          setTimeout(() => setCopyStatus('コードをコピー'), 2000);
        });
    } else {
      setCopyStatus('コピー機能はサポートされていません');
      setTimeout(() => setCopyStatus('コードをコピー'), 3000);
    }
  };

  return (
    <>
      <Header />
      <main className={'flex flex-col items-center'}>
        <form id="auto-filler-form" className={'w-full max-w-[600px] mb-8 bg-white'}>
          <table>
            <tbody>
              <tr>
                <td>姓名</td>
                <td>
                  <NameInputs formData={formData} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>姓名(カナ)</td>
                <td>
                  <KanaInputs formData={formData} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>メールアドレス</td>
                <td>
                  <InputText
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>郵便番号</td>
                <td>
                  <InputText
                    type="text"
                    id="postal_code"
                    name="postal_code"
                    placeholder="例: 1030001"
                    value={formData.postal_code}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>都道府県</td>
                <td>
                  <select id="prefecture" name="prefecture" value={formData.prefecture} onChange={handleChange}>
                    <option value="">-- 選択してください --</option>
                    <option value="北海道">北海道</option>
                    <option value="青森県">青森県</option>
                    <option value="岩手県">岩手県</option>
                    <option value="宮城県">宮城県</option>
                    <option value="秋田県">秋田県</option>
                    <option value="山形県">山形県</option>
                    <option value="福島県">福島県</option>
                    <option value="茨城県">茨城県</option>
                    <option value="栃木県">栃木県</option>
                    <option value="群馬県">群馬県</option>
                    <option value="埼玉県">埼玉県</option>
                    <option value="千葉県">千葉県</option>
                    <option value="東京都">東京都</option>
                    <option value="神奈川県">神奈川県</option>
                    <option value="新潟県">新潟県</option>
                    <option value="富山県">富山県</option>
                    <option value="石川県">石川県</option>
                    <option value="福井県">福井県</option>
                    <option value="山梨県">山梨県</option>
                    <option value="長野県">長野県</option>
                    <option value="岐阜県">岐阜県</option>
                    <option value="静岡県">静岡県</option>
                    <option value="愛知県">愛知県</option>
                    <option value="三重県">三重県</option>
                    <option value="滋賀県">滋賀県</option>
                    <option value="京都府">京都府</option>
                    <option value="大阪府">大阪府</option>
                    <option value="兵庫県">兵庫県</option>
                    <option value="奈良県">奈良県</option>
                    <option value="和歌山県">和歌山県</option>
                    <option value="鳥取県">鳥取県</option>
                    <option value="島根県">島根県</option>
                    <option value="岡山県">岡山県</option>
                    <option value="広島県">広島県</option>
                    <option value="山口県">山口県</option>
                    <option value="徳島県">徳島県</option>
                    <option value="香川県">香川県</option>
                    <option value="愛媛県">愛媛県</option>
                    <option value="高知県">高知県</option>
                    <option value="福岡県">福岡県</option>
                    <option value="佐賀県">佐賀県</option>
                    <option value="長崎県">長崎県</option>
                    <option value="熊本県">熊本県</option>
                    <option value="大分県">大分県</option>
                    <option value="宮崎県">宮崎県</option>
                    <option value="鹿児島県">鹿児島県</option>
                    <option value="沖縄県">沖縄県</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>市区町村</td>
                <td>
                  <InputText
                    type="text"
                    id="city"
                    name="city"
                    placeholder="例: 中央区"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>町名番地</td>
                <td>
                  <InputText
                    type="text"
                    id="address1"
                    name="address1"
                    placeholder="例: 日本橋x-xx-xx"
                    value={formData.address1}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>建物名等</td>
                <td>
                  <InputText
                    type="text"
                    id="address2"
                    name="address2"
                    placeholder="例: yyビルz階"
                    value={formData.address2}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>電話番号</td>
                <td>
                  <InputText
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="例: 080xxxxyyyy"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>生年月日</td>
                <td>
                  {/*
                    TODO: Consider using a date picker for better UX
                    <input type="text" name="bday-year" placeholder="YYYY" autocomplete="bday-year">
                    <input type="text" name="bday-month" placeholder="MM" autocomplete="bday-month">
                    <input type="text" name="bday-day" placeholder="DD" autocomplete="bday-day">
                  */}
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    value={formData.birthday}
                    autoComplete={'bday'}
                    onChange={(e) => handleChange({ target: { name: 'birthday', value: e.target.value } })}
                  />
                </td>
              </tr>
              <tr>
                <td>性別</td>
                <td>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="1"
                      checked={formData.gender === '1'}
                      onChange={handleChange}
                    />
                    男
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="2"
                      checked={formData.gender === '2'}
                      onChange={handleChange}
                    />
                    女
                  </label>
                </td>
              </tr>
              <tr>
                <td>同行者</td>
                <td>
                  <label>
                    あり
                    <input
                      type="radio"
                      name="companion"
                      value="あり"
                      checked={formData.companion === 'あり'}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    なし
                    <input
                      type="radio"
                      name="companion"
                      value="なし"
                      checked={formData.companion === 'なし'}
                      onChange={handleChange}
                    />
                  </label>
                </td>
              </tr>
              {formData.companion === 'あり' && (
                <>
                  <tr>
                    <td>同行者・姓名</td>
                    <td>
                      <CompanionNameInput formData={formData} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      同行者電話番号
                      <br />
                      (半角・ハイフン不要)
                    </td>
                    <td>
                      <InputText
                        type="tel"
                        id="companion_phone"
                        name="companion_phone"
                        value={formData.companion_phone}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>同行者住所</td>
                    <td>
                      <InputText
                        type="text"
                        id="companion_address"
                        name="companion_address"
                        value={formData.companion_address}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>同行者メールアドレス</td>
                    <td>
                      <InputText
                        type="email"
                        id="companion_email"
                        name="companion_email"
                        value={formData.companion_email}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </form>
        以下のリンクをブックマークバーにドラッグ＆ドロップしてください。
        <BookmarkletLink href={bookmarkletHref} text="楽天チケット 自動入力 ブックマークレット" />
        <input
          id="generated-bookmarklet"
          type="text"
          className={
            'border border-gray-300 rounded px-4 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          }
          size="80"
          value={bookmarkletHref}
          readOnly
        />
        <button
          id={'copy-code'}
          type={'button'}
          className={getButtonCss(isButtonDisabled)}
          onClick={handleCopy}
          disabled={isButtonDisabled}
        >
          {copyStatus}
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
