const Navbar = () => {
    return (
        <div className="w-full max-w-[1240px] p-4 flex flex-row justify-between items-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="30" viewBox="0 0 86 30" fill="none">
                <path d="M2.55688 15V0.94004H5.27688V15H2.55688ZM4.55688 9.24004V6.82004H11.6369V9.24004H4.55688ZM4.55688 3.34004V0.94004H11.9769V3.34004H4.55688Z" fill="#444444"/>
                <path d="M13.8394 15V0.540039H16.4594V15H13.8394Z" fill="#444444"/>
                <path d="M22.8208 15.2C21.9408 15.2 21.1474 14.98 20.4408 14.54C19.7341 14.1 19.1808 13.5 18.7808 12.74C18.3808 11.98 18.1808 11.1267 18.1808 10.18C18.1808 9.22004 18.3808 8.36004 18.7808 7.60004C19.1808 6.84004 19.7341 6.24004 20.4408 5.80004C21.1474 5.36004 21.9408 5.14004 22.8208 5.14004C23.5141 5.14004 24.1341 5.28004 24.6808 5.56004C25.2274 5.84004 25.6608 6.23337 25.9808 6.74004C26.3141 7.23337 26.4941 7.79337 26.5208 8.42004V11.9C26.4941 12.54 26.3141 13.1067 25.9808 13.6C25.6608 14.0934 25.2274 14.4867 24.6808 14.78C24.1341 15.06 23.5141 15.2 22.8208 15.2ZM23.3008 12.78C24.0341 12.78 24.6274 12.54 25.0808 12.06C25.5341 11.5667 25.7608 10.9334 25.7608 10.16C25.7608 9.65337 25.6541 9.20671 25.4408 8.82004C25.2408 8.42004 24.9541 8.11337 24.5808 7.90004C24.2208 7.67337 23.7941 7.56004 23.3008 7.56004C22.8208 7.56004 22.3941 7.67337 22.0208 7.90004C21.6608 8.11337 21.3741 8.42004 21.1608 8.82004C20.9608 9.20671 20.8608 9.65337 20.8608 10.16C20.8608 10.68 20.9608 11.14 21.1608 11.54C21.3741 11.9267 21.6608 12.2334 22.0208 12.46C22.3941 12.6734 22.8208 12.78 23.3008 12.78ZM25.6208 15V12.4L26.0408 10.04L25.6208 7.72004V5.34004H28.2208V15H25.6208Z" fill="#444444"/>
                <path d="M30.5386 15V5.34004H33.1586V15H30.5386ZM36.8386 15V9.30004C36.8386 8.74004 36.6586 8.30671 36.2986 8.00004C35.9519 7.68004 35.5186 7.52004 34.9986 7.52004C34.6519 7.52004 34.3386 7.59337 34.0586 7.74004C33.7786 7.87337 33.5586 8.07337 33.3986 8.34004C33.2386 8.60671 33.1586 8.92671 33.1586 9.30004L32.1386 8.80004C32.1386 8.05337 32.2986 7.40671 32.6186 6.86004C32.9519 6.31337 33.3986 5.89337 33.9586 5.60004C34.5186 5.29337 35.1519 5.14004 35.8586 5.14004C36.5253 5.14004 37.1319 5.29337 37.6786 5.60004C38.2253 5.89337 38.6586 6.31337 38.9786 6.86004C39.2986 7.39337 39.4586 8.04004 39.4586 8.80004V15H36.8386ZM43.1386 15V9.30004C43.1386 8.74004 42.9586 8.30671 42.5986 8.00004C42.2519 7.68004 41.8186 7.52004 41.2986 7.52004C40.9653 7.52004 40.6519 7.59337 40.3586 7.74004C40.0786 7.87337 39.8586 8.07337 39.6986 8.34004C39.5386 8.60671 39.4586 8.92671 39.4586 9.30004L37.9586 8.94004C38.0119 8.16671 38.2186 7.50004 38.5786 6.94004C38.9386 6.36671 39.4119 5.92671 39.9986 5.62004C40.5853 5.30004 41.2386 5.14004 41.9586 5.14004C42.6786 5.14004 43.3253 5.29337 43.8986 5.60004C44.4719 5.89337 44.9253 6.32004 45.2586 6.88004C45.5919 7.44004 45.7586 8.10671 45.7586 8.88004V15H43.1386Z" fill="#444444"/>
                <path d="M47.8823 15V5.34004H50.5223V15H47.8823ZM49.2023 3.78004C48.7757 3.78004 48.4223 3.64004 48.1423 3.36004C47.8623 3.06671 47.7223 2.70671 47.7223 2.28004C47.7223 1.86671 47.8623 1.51337 48.1423 1.22004C48.4223 0.926706 48.7757 0.78004 49.2023 0.78004C49.6423 0.78004 49.9957 0.926706 50.2623 1.22004C50.5423 1.51337 50.6823 1.86671 50.6823 2.28004C50.6823 2.70671 50.5423 3.06671 50.2623 3.36004C49.9957 3.64004 49.6423 3.78004 49.2023 3.78004Z" fill="#444444"/>
                <path d="M59.3433 15V9.46004C59.3433 8.88671 59.1633 8.42004 58.8033 8.06004C58.4433 7.70004 57.9766 7.52004 57.4033 7.52004C57.0299 7.52004 56.6966 7.60004 56.4033 7.76004C56.1099 7.92004 55.8766 8.14671 55.7033 8.44004C55.5433 8.73337 55.4633 9.07337 55.4633 9.46004L54.4433 8.94004C54.4433 8.18004 54.6033 7.52004 54.9233 6.96004C55.2566 6.38671 55.7099 5.94004 56.2833 5.62004C56.8699 5.30004 57.5299 5.14004 58.2633 5.14004C58.9699 5.14004 59.6033 5.32004 60.1633 5.68004C60.7233 6.02671 61.1633 6.48671 61.4833 7.06004C61.8033 7.62004 61.9633 8.22671 61.9633 8.88004V15H59.3433ZM52.8433 15V5.34004H55.4633V15H52.8433Z" fill="#444444"/>
                <path d="M68.1137 19.28C67.0871 19.28 66.1804 19.0934 65.3938 18.72C64.6071 18.36 63.9804 17.8467 63.5137 17.18L65.1738 15.52C65.5471 15.96 65.9604 16.2934 66.4137 16.52C66.8804 16.76 67.4404 16.88 68.0938 16.88C68.9071 16.88 69.5471 16.6734 70.0137 16.26C70.4937 15.8467 70.7337 15.2734 70.7337 14.54V12.12L71.1738 10L70.7538 7.88004V5.34004H73.3538V14.5C73.3538 15.46 73.1271 16.2934 72.6738 17C72.2338 17.72 71.6204 18.28 70.8337 18.68C70.0471 19.08 69.1404 19.28 68.1137 19.28ZM67.9938 14.74C67.1271 14.74 66.3471 14.5334 65.6537 14.12C64.9604 13.6934 64.4137 13.1134 64.0137 12.38C63.6271 11.6467 63.4338 10.8267 63.4338 9.92004C63.4338 9.01337 63.6271 8.20004 64.0137 7.48004C64.4137 6.76004 64.9604 6.19337 65.6537 5.78004C66.3471 5.35337 67.1271 5.14004 67.9938 5.14004C68.7138 5.14004 69.3471 5.28004 69.8938 5.56004C70.4538 5.84004 70.8938 6.22671 71.2138 6.72004C71.5338 7.20004 71.7071 7.76671 71.7337 8.42004V11.46C71.7071 12.1 71.5271 12.6734 71.1937 13.18C70.8737 13.6734 70.4337 14.06 69.8737 14.34C69.3271 14.6067 68.7004 14.74 67.9938 14.74ZM68.5137 12.36C68.9937 12.36 69.4071 12.26 69.7538 12.06C70.1138 11.8467 70.3938 11.56 70.5938 11.2C70.7938 10.8267 70.8938 10.4067 70.8938 9.94004C70.8938 9.46004 70.7938 9.04004 70.5938 8.68004C70.3938 8.32004 70.1138 8.04004 69.7538 7.84004C69.4071 7.62671 68.9937 7.52004 68.5137 7.52004C68.0337 7.52004 67.6138 7.62671 67.2538 7.84004C66.8938 8.04004 66.6137 8.32671 66.4137 8.70004C66.2137 9.06004 66.1137 9.47337 66.1137 9.94004C66.1137 10.3934 66.2137 10.8067 66.4137 11.18C66.6137 11.54 66.8938 11.8267 67.2538 12.04C67.6138 12.2534 68.0337 12.36 68.5137 12.36Z" fill="#444444"/>
                <path d="M80.1958 15.2C79.2225 15.2 78.3424 14.98 77.5558 14.54C76.7824 14.0867 76.1624 13.48 75.6958 12.72C75.2424 11.9467 75.0158 11.0867 75.0158 10.14C75.0158 9.19337 75.2424 8.34671 75.6958 7.60004C76.1491 6.84004 76.7691 6.24004 77.5558 5.80004C78.3424 5.34671 79.2158 5.12004 80.1758 5.12004C81.1624 5.12004 82.0424 5.34671 82.8158 5.80004C83.6024 6.24004 84.2224 6.84004 84.6758 7.60004C85.1291 8.34671 85.3558 9.19337 85.3558 10.14C85.3558 11.0867 85.1291 11.9467 84.6758 12.72C84.2224 13.48 83.6024 14.0867 82.8158 14.54C82.0424 14.98 81.1691 15.2 80.1958 15.2ZM80.1758 12.76C80.6691 12.76 81.1025 12.6534 81.4758 12.44C81.8625 12.2134 82.1558 11.9067 82.3558 11.52C82.5691 11.12 82.6758 10.6667 82.6758 10.16C82.6758 9.65337 82.5691 9.20671 82.3558 8.82004C82.1424 8.43337 81.8491 8.13337 81.4758 7.92004C81.1025 7.69337 80.6691 7.58004 80.1758 7.58004C79.6958 7.58004 79.2691 7.69337 78.8958 7.92004C78.5224 8.13337 78.2291 8.43337 78.0158 8.82004C77.8025 9.20671 77.6958 9.65337 77.6958 10.16C77.6958 10.6667 77.8025 11.12 78.0158 11.52C78.2291 11.9067 78.5224 12.2134 78.8958 12.44C79.2691 12.6534 79.6958 12.76 80.1758 12.76Z" fill="#444444"/>
                <path d="M0.995117 29L5.22512 18.68H6.05012L10.2351 29H9.05012L5.40512 19.88H5.84012L2.16512 29H0.995117ZM2.93012 26.315V25.34H8.33012V26.315H2.93012Z" fill="#444444"/>
                <path d="M11.8616 29V21.95H12.9116V29H11.8616ZM12.9116 24.89L12.4766 24.695C12.4766 23.805 12.6916 23.1 13.1216 22.58C13.5616 22.06 14.1616 21.8 14.9216 21.8C15.2716 21.8 15.5916 21.865 15.8816 21.995C16.1716 22.115 16.4416 22.31 16.6916 22.58L16.0016 23.315C15.8316 23.125 15.6416 22.99 15.4316 22.91C15.2316 22.83 15.0016 22.79 14.7416 22.79C14.2016 22.79 13.7616 22.97 13.4216 23.33C13.0816 23.68 12.9116 24.2 12.9116 24.89Z" fill="#444444"/>
                <path d="M20.7698 29.15C20.0798 29.15 19.4548 28.99 18.8948 28.67C18.3448 28.34 17.9048 27.895 17.5748 27.335C17.2548 26.775 17.0948 26.15 17.0948 25.46C17.0948 24.77 17.2548 24.15 17.5748 23.6C17.9048 23.04 18.3448 22.6 18.8948 22.28C19.4548 21.96 20.0798 21.8 20.7698 21.8C21.2998 21.8 21.7948 21.9 22.2548 22.1C22.7148 22.3 23.1048 22.58 23.4248 22.94L22.7348 23.645C22.4948 23.375 22.2048 23.17 21.8648 23.03C21.5248 22.88 21.1598 22.805 20.7698 22.805C20.2698 22.805 19.8248 22.92 19.4348 23.15C19.0448 23.38 18.7398 23.695 18.5198 24.095C18.2998 24.485 18.1898 24.94 18.1898 25.46C18.1898 25.97 18.2998 26.43 18.5198 26.84C18.7398 27.24 19.0448 27.555 19.4348 27.785C19.8248 28.015 20.2698 28.13 20.7698 28.13C21.1698 28.13 21.5398 28.06 21.8798 27.92C22.2198 27.77 22.5098 27.56 22.7498 27.29L23.4548 27.995C23.1248 28.365 22.7248 28.65 22.2548 28.85C21.7948 29.05 21.2998 29.15 20.7698 29.15Z" fill="#444444"/>
                <path d="M30.058 29V24.86C30.058 24.24 29.873 23.74 29.503 23.36C29.143 22.97 28.663 22.775 28.063 22.775C27.653 22.775 27.293 22.865 26.983 23.045C26.673 23.225 26.428 23.47 26.248 23.78C26.068 24.09 25.978 24.445 25.978 24.845L25.498 24.575C25.498 24.045 25.623 23.57 25.873 23.15C26.123 22.73 26.458 22.4 26.878 22.16C27.308 21.92 27.798 21.8 28.348 21.8C28.888 21.8 29.368 21.925 29.788 22.175C30.208 22.415 30.533 22.75 30.763 23.18C31.003 23.61 31.123 24.11 31.123 24.68V29H30.058ZM24.928 29V18.38H25.978V29H24.928Z" fill="#444444"/>
                <path d="M33.0871 29V21.95H34.1521V29H33.0871ZM33.6121 20.42C33.4121 20.42 33.2421 20.35 33.1021 20.21C32.9621 20.06 32.8921 19.885 32.8921 19.685C32.8921 19.475 32.9621 19.3 33.1021 19.16C33.2421 19.02 33.4121 18.95 33.6121 18.95C33.8321 18.95 34.0071 19.02 34.1371 19.16C34.2771 19.3 34.3471 19.475 34.3471 19.685C34.3471 19.885 34.2771 20.06 34.1371 20.21C34.0071 20.35 33.8321 20.42 33.6121 20.42Z" fill="#444444"/>
                <path d="M37.3755 29V18.98H38.4255V29H37.3755ZM35.5905 22.895V21.95H40.1955V22.895H35.5905Z" fill="#444444"/>
                <path d="M44.6478 29.15C43.9378 29.15 43.3028 28.99 42.7428 28.67C42.1828 28.35 41.7378 27.91 41.4078 27.35C41.0878 26.79 40.9278 26.16 40.9278 25.46C40.9278 24.77 41.0878 24.15 41.4078 23.6C41.7278 23.04 42.1628 22.6 42.7128 22.28C43.2628 21.96 43.8778 21.8 44.5578 21.8C45.1978 21.8 45.7628 21.945 46.2528 22.235C46.7528 22.525 47.1428 22.93 47.4228 23.45C47.7128 23.96 47.8578 24.55 47.8578 25.22C47.8578 25.3 47.8528 25.395 47.8428 25.505C47.8328 25.605 47.8128 25.725 47.7828 25.865H41.6778V24.965H47.2128L46.8378 25.295C46.8478 24.775 46.7578 24.33 46.5678 23.96C46.3878 23.58 46.1228 23.29 45.7728 23.09C45.4328 22.88 45.0178 22.775 44.5278 22.775C44.0178 22.775 43.5728 22.885 43.1928 23.105C42.8128 23.325 42.5128 23.635 42.2928 24.035C42.0828 24.425 41.9778 24.89 41.9778 25.43C41.9778 25.97 42.0878 26.445 42.3078 26.855C42.5378 27.265 42.8528 27.585 43.2528 27.815C43.6628 28.045 44.1328 28.16 44.6628 28.16C45.0928 28.16 45.4878 28.085 45.8478 27.935C46.2078 27.775 46.5128 27.54 46.7628 27.23L47.4378 27.92C47.1078 28.31 46.6978 28.615 46.2078 28.835C45.7278 29.045 45.2078 29.15 44.6478 29.15Z" fill="#444444"/>
                <path d="M52.6741 29.15C51.9841 29.15 51.3591 28.99 50.7991 28.67C50.2491 28.34 49.8091 27.895 49.4791 27.335C49.1591 26.775 48.9991 26.15 48.9991 25.46C48.9991 24.77 49.1591 24.15 49.4791 23.6C49.8091 23.04 50.2491 22.6 50.7991 22.28C51.3591 21.96 51.9841 21.8 52.6741 21.8C53.2041 21.8 53.6991 21.9 54.1591 22.1C54.6191 22.3 55.0091 22.58 55.3291 22.94L54.6391 23.645C54.3991 23.375 54.1091 23.17 53.7691 23.03C53.4291 22.88 53.0641 22.805 52.6741 22.805C52.1741 22.805 51.7291 22.92 51.3391 23.15C50.9491 23.38 50.6441 23.695 50.4241 24.095C50.2041 24.485 50.0941 24.94 50.0941 25.46C50.0941 25.97 50.2041 26.43 50.4241 26.84C50.6441 27.24 50.9491 27.555 51.3391 27.785C51.7291 28.015 52.1741 28.13 52.6741 28.13C53.0741 28.13 53.4441 28.06 53.7841 27.92C54.1241 27.77 54.4141 27.56 54.6541 27.29L55.3591 27.995C55.0291 28.365 54.6291 28.65 54.1591 28.85C53.6991 29.05 53.2041 29.15 52.6741 29.15Z" fill="#444444"/>
                <path d="M57.8687 29V18.98H58.9187V29H57.8687ZM56.0837 22.895V21.95H60.6887V22.895H56.0837Z" fill="#444444"/>
                <path d="M64.925 29.15C64.355 29.15 63.845 29.02 63.395 28.76C62.945 28.49 62.59 28.125 62.33 27.665C62.08 27.205 61.955 26.665 61.955 26.045V21.95H63.02V26C63.02 26.43 63.095 26.805 63.245 27.125C63.405 27.445 63.63 27.695 63.92 27.875C64.21 28.055 64.545 28.145 64.925 28.145C65.515 28.145 65.98 27.95 66.32 27.56C66.67 27.17 66.845 26.65 66.845 26V21.95H67.895V26.045C67.895 26.655 67.77 27.195 67.52 27.665C67.27 28.135 66.92 28.5 66.47 28.76C66.02 29.02 65.505 29.15 64.925 29.15Z" fill="#444444"/>
                <path d="M69.8547 29V21.95H70.9047V29H69.8547ZM70.9047 24.89L70.4697 24.695C70.4697 23.805 70.6847 23.1 71.1147 22.58C71.5547 22.06 72.1547 21.8 72.9147 21.8C73.2647 21.8 73.5847 21.865 73.8747 21.995C74.1647 22.115 74.4347 22.31 74.6847 22.58L73.9947 23.315C73.8247 23.125 73.6347 22.99 73.4247 22.91C73.2247 22.83 72.9947 22.79 72.7347 22.79C72.1947 22.79 71.7547 22.97 71.4147 23.33C71.0747 23.68 70.9047 24.2 70.9047 24.89Z" fill="#444444"/>
                <path d="M78.808 29.15C78.098 29.15 77.463 28.99 76.903 28.67C76.343 28.35 75.898 27.91 75.568 27.35C75.248 26.79 75.088 26.16 75.088 25.46C75.088 24.77 75.248 24.15 75.568 23.6C75.888 23.04 76.323 22.6 76.873 22.28C77.423 21.96 78.038 21.8 78.718 21.8C79.358 21.8 79.923 21.945 80.413 22.235C80.913 22.525 81.303 22.93 81.583 23.45C81.873 23.96 82.018 24.55 82.018 25.22C82.018 25.3 82.013 25.395 82.003 25.505C81.993 25.605 81.973 25.725 81.943 25.865H75.838V24.965H81.373L80.998 25.295C81.008 24.775 80.918 24.33 80.728 23.96C80.548 23.58 80.283 23.29 79.933 23.09C79.593 22.88 79.178 22.775 78.688 22.775C78.178 22.775 77.733 22.885 77.353 23.105C76.973 23.325 76.673 23.635 76.453 24.035C76.243 24.425 76.138 24.89 76.138 25.43C76.138 25.97 76.248 26.445 76.468 26.855C76.698 27.265 77.013 27.585 77.413 27.815C77.823 28.045 78.293 28.16 78.823 28.16C79.253 28.16 79.648 28.085 80.008 27.935C80.368 27.775 80.673 27.54 80.923 27.23L81.598 27.92C81.268 28.31 80.858 28.615 80.368 28.835C79.888 29.045 79.368 29.15 78.808 29.15Z" fill="#444444"/>
            </svg>
            <div className="flex flex-row items-center w-full max-w-[434px] justify-end gap-10">
                <ul className="hidden md:flex flex-row text-body-sm font-medium font-Outfit gap-10">
                    <li>About</li>
                    <li>Services</li>
                    <li>Our Work</li>
                </ul>
                <div className="bg-primary p-3 flex flex-row justify-center items-center">
                    <p className="text-white font-semibold text-body-xs font-Outfit">CONTACT US</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_2665_563)">
                        <path d="M14.1663 5.83301L5.83301 14.1663" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.66699 5.83301H14.167V13.333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2665_563">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Navbar;