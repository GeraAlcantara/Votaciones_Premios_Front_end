import React from 'react'

interface SorryStickerProps {
  className?: string
}

export default function SorrySticker({ className = '' }: SorryStickerProps) {
  return (
    <svg
      className={className}
      fill="none"
      height="143"
      viewBox="0 0 171 143"
      width="171"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_238_13573)">
        <path
          d="M119.899 135.749C119.704 135.667 119.5 135.575 119.29 135.477C109.555 130.916 102.885 124.002 97.7182 113.088C93.6997 112.831 89.6678 112.37 85.7221 111.718C75.5772 110.041 60.5967 106.826 46.8303 101.035C35.6686 96.3395 27.1775 90.7165 21.5903 84.32C14.7614 76.5013 12.2312 67.4845 14.0671 57.515C16.3325 45.2192 23.8643 30.6864 38.2099 26.774C44.87 24.9558 51.6712 25.0741 59.6165 27.1414C60.4667 27.3625 63.0607 28.218 66.649 29.4018C76.7001 32.7179 95.4096 38.8916 104.012 40.3698C109.611 41.3321 115.355 41.8991 120.908 42.4479C125.557 42.9084 130.366 43.3829 135.08 44.0879C138.343 44.5764 141.444 45.4307 144.293 46.6296C156.942 51.9507 163.028 63.0033 160.572 76.1934C156.084 100.307 137.167 108.883 121.832 111.808C122.049 116.883 122.893 122.273 124.545 129.174C125.225 132.02 125.718 134.675 124.295 135.882C123.387 136.655 121.944 136.609 119.891 135.746L119.899 135.749Z"
          fill="#1D1B1B"
        />
        <path
          d="M144.021 47.2907C155.283 52.0284 162.455 62.2036 159.875 76.0645C155.841 97.7345 139.755 107.821 121.102 111.219C121.303 117.298 122.404 123.265 123.857 129.341C124.727 132.98 125.597 137.367 120.177 135.087C119.99 135.008 119.797 134.921 119.594 134.826C109.042 129.885 102.777 122.244 98.1854 112.397C93.9799 112.142 89.8292 111.668 85.838 111.007C75.2901 109.263 60.5068 106.007 47.1069 100.37C27.5119 92.1261 10.8733 78.7875 14.7722 57.6378C17.1452 44.7543 24.8788 31.1504 38.4009 27.4624C45.8205 25.4393 52.7149 26.0809 59.4398 27.8334C62.6477 28.6678 92.2308 39.0715 103.895 41.0745C114.212 42.8454 124.653 43.2507 134.98 44.7966C138.188 45.2773 141.232 46.1173 144.024 47.2918M144.578 45.9737C141.673 44.7515 138.515 43.8792 135.193 43.3843C130.461 42.6753 125.641 42.199 120.983 41.7378C115.442 41.1908 109.713 40.624 104.138 39.6653C95.5869 38.1966 76.91 32.0336 66.8774 28.7252C63.1397 27.4909 60.6714 26.676 59.8016 26.4497C51.731 24.3483 44.8109 24.2327 38.0274 26.0859C23.3568 30.085 15.6675 44.8742 13.3611 57.3855C11.4835 67.5794 14.068 76.799 21.0479 84.7898C26.7059 91.2689 35.2845 96.9567 46.5464 101.694C60.376 107.512 75.4164 110.74 85.5988 112.424C89.4306 113.058 93.3453 113.51 97.2464 113.774C99.6685 118.814 102.406 122.957 105.595 126.424C109.333 130.485 113.71 133.657 118.98 136.125C119.195 136.225 119.409 136.322 119.615 136.408C120.469 136.767 123.071 137.862 124.759 136.431C126.636 134.838 125.831 131.471 125.243 129.011C123.669 122.435 122.834 117.244 122.577 112.395C144.315 108.074 157.685 95.6244 161.276 76.3278C162.56 69.4246 161.552 62.9254 158.365 57.5291C155.409 52.5188 150.639 48.5233 144.576 45.9726L144.578 45.9737Z"
          fill="white"
        />
        <path
          d="M121.102 111.219C139.758 107.82 155.842 97.7318 159.875 76.0645C163.093 58.7676 151.127 47.2083 134.977 44.7955C124.653 43.2507 114.209 42.8442 103.893 41.0733C92.2281 39.0704 62.645 28.6667 59.4372 27.8322C52.7138 26.0835 45.8178 25.4382 38.3982 27.4612C24.8788 31.1504 17.1452 44.7543 14.77 57.6431C8.20666 93.2539 59.8599 106.718 85.8369 111.01C89.828 111.671 93.9787 112.145 98.1843 112.4C102.776 122.247 109.042 129.885 119.593 134.829C125.655 137.671 124.757 133.108 123.857 129.341C122.404 123.265 121.303 117.298 121.102 111.219Z"
          fill="#A998F8"
        />
        <path
          d="M37.8574 72.3513L35.9817 71.3078C32.466 69.354 30.7612 66.5176 30.8701 62.7998C31.1219 62.0462 31.3722 61.4441 31.6219 60.9906L31.7168 60.8165C32.8635 59.1455 34.1083 58.6794 35.4517 59.4246C36.8924 60.2261 37.1383 61.8468 36.1895 64.2867C36.5814 65.1621 37.0069 65.729 37.4724 65.9869L38.031 66.2963C40.4148 67.6219 41.9589 67.654 42.6617 66.389C44.0926 63.8137 42.4774 60.2114 37.8182 55.5767C36.3862 53.1467 36.1615 51.0478 37.143 49.2826L37.9709 47.794C40.2386 43.7091 44.4139 42.2512 50.4932 43.4217C51.4288 43.7718 52.1545 44.0896 52.6695 44.3776L54.7366 45.5264C57.2893 46.9447 58.2685 48.8801 57.6821 51.336L57.3612 51.9146C56.7088 53.0891 55.5431 53.2565 53.8634 52.4258C52.5276 50.8585 51.5749 49.9148 51.0084 49.602C46.6595 47.9617 43.9156 48.1633 42.7734 50.2146L42.4639 50.7733C42.0079 51.5991 43.1332 52.9661 45.8491 54.8813C49.8313 60.4319 50.7201 65.1931 48.514 69.1612L47.9993 70.0896C46.0812 73.5428 42.7018 74.2961 37.8638 72.3508L37.8574 72.3513ZM53.5893 64.9295C55.3185 60.3325 58.3008 55.906 62.5396 51.6419C65.241 50.0293 67.426 49.5336 69.0965 50.165L70.7301 50.7809C73.8776 51.9654 76.0378 55.8653 77.2151 62.4854C77.2193 63.6848 77.0658 64.7062 76.7492 65.5473L76.5156 66.1689C75.0201 70.1442 70.6157 74.0346 63.3035 77.8528C59.9447 79.1547 57.4822 79.5429 55.9187 79.0186L54.0946 78.3319C51.5582 77.3766 50.9277 74.1327 52.2082 68.5961L53.5871 64.9347L53.5893 64.9295ZM59.0943 66.3145L58.4862 67.9297C57.6567 70.1374 57.6147 71.668 58.3662 72.5147L58.5725 72.5922C61.2916 73.6151 65.0522 71.6383 69.8567 66.6565C70.3184 66.2302 70.7291 65.5342 71.0941 64.5707C71.7948 62.706 70.86 60.2742 68.287 57.2742L67.4813 56.9694C65.2588 56.1306 62.4638 59.2491 59.0954 66.3119L59.0943 66.3145ZM95.0302 86.0524L94.7079 87.0617C94.2129 88.622 92.7316 89.2741 90.2599 89.0131L89.6498 88.8185C88.3827 88.4158 85.5645 83.631 81.1928 74.4631L81.0043 74.4024L78.6753 81.7381C78.2888 82.9593 77.3558 83.7831 75.8726 84.211L75.0518 83.9494C73.7154 83.5268 72.8927 82.5912 72.5789 81.1467L73.2218 79.1243C79.7195 63.3839 83.4358 55.6638 84.3771 55.9635C85.8406 55.6856 86.9062 55.653 87.5659 55.8623L87.9689 55.9884C88.1105 56.0355 88.1583 56.1208 88.1179 56.2465C89.4282 55.9197 90.6887 55.9473 91.8957 56.3309L92.7165 56.5925C97.6082 58.1446 99.147 61.7737 97.3366 67.4783C96.2976 70.7521 93.036 73.0103 87.552 74.2528C91.1272 81.0657 93.5044 84.6565 94.6865 85.0328L95.035 86.0482L95.0302 86.0524ZM92.0231 65.122L92.2177 64.5119C92.4681 63.0907 92.0054 62.1917 90.8222 61.818L90.2121 61.6235C88.3297 61.0239 86.8518 61.9039 85.7829 64.2529L83.7491 67.8777C83.99 67.9543 84.5128 68.4224 85.3241 69.2819C89.1416 68.5639 91.3732 67.1756 92.0257 65.1231L92.0231 65.122ZM120.663 87.0247C120.66 88.6617 119.444 89.7296 117.01 90.2262L116.371 90.2271C115.044 90.2243 110.916 86.5111 103.983 79.0863L103.785 79.0865L103.771 86.7819C103.769 88.0625 103.124 89.1315 101.843 89.9858L100.981 89.9833C99.5802 89.9802 98.5127 89.3388 97.7775 88.0552L97.7806 85.9311C99.2363 68.9663 100.456 60.4844 101.445 60.4849C102.757 59.7799 103.759 59.4258 104.452 59.4291L104.874 59.4296C105.02 59.429 105.094 59.4973 105.094 59.6306C106.246 58.927 107.456 58.5734 108.721 58.5751L109.583 58.5776C114.714 58.5862 117.273 61.5832 117.269 67.5668C117.261 71.0012 114.83 74.1393 109.978 76.9759C115.437 82.3939 118.787 85.1032 120.027 85.1066L120.665 85.9709L120.663 87.0311L120.663 87.0247ZM111.495 66.9094L111.497 66.271C111.308 64.8388 110.592 64.1218 109.354 64.1222L108.712 64.122C106.737 64.1168 105.595 65.4016 105.28 67.9653L104.432 72.0302C104.686 72.0315 105.322 72.3206 106.355 72.895C109.778 71.0583 111.492 69.0617 111.495 66.9094ZM142.72 66.4118C142.451 65.3245 141.909 64.6961 141.083 64.5348L140.238 64.3685C138.848 64.0942 136.394 67.5889 132.881 74.842C129.157 67.048 126.419 62.9796 124.668 62.6342L124.041 62.5099C122.898 62.2836 122.05 62.8544 121.498 64.2172L121.415 64.629C121.27 65.3653 121.353 66.052 121.665 66.6827C125.011 72.2109 127.281 76.7804 128.478 80.396L128.189 81.8723C124.49 87.1392 122.611 89.9387 122.544 90.2738C122.37 91.1529 122.833 92.198 123.934 93.4089L124.997 93.62C126.24 93.8641 128.383 91.5601 131.428 86.7038C138.487 75.5654 142.198 69.0839 142.555 67.2608L142.721 66.4155L142.72 66.4118ZM82.5605 99.8731C64.1701 96.6137 47.8489 91.3269 31.4389 82.512C31.3205 82.4467 31.1771 82.6253 31.2709 82.7268C43.1471 95.3124 65.9056 100.174 82.4821 100.458C82.8544 100.465 82.938 99.9419 82.5567 99.8746L82.5605 99.8731ZM136.213 49.2496C136.05 49.2616 136.047 49.4809 136.173 49.5432C139.028 50.9891 142.031 51.8306 144.781 53.5397C147.281 55.0909 149.194 57.4317 151.791 58.7727C152.077 58.9206 152.372 58.5795 152.26 58.3088C150.076 52.944 141.82 48.8348 136.21 49.2485L136.213 49.2496ZM153.501 60.0847C153.21 59.9871 152.821 60.2639 152.987 60.5913C153.254 61.1161 153.715 61.6857 154.079 62.149C154.251 62.3671 154.591 62.7396 154.904 62.5025C155.774 61.8507 154.101 60.2902 153.499 60.0836L153.501 60.0847ZM88.7205 100.085C88.6564 99.8902 88.4593 99.7762 88.2698 99.7399C87.7219 99.6335 87.2003 99.8113 86.6551 99.8829C86.1163 99.9541 85.6975 99.9982 85.1993 100.238C85.0428 100.315 85.0274 100.492 85.1454 100.61C85.9393 101.4 87.6433 101.369 88.5318 100.747C88.69 100.637 88.7869 100.414 88.7525 100.222C88.7443 100.175 88.7298 100.129 88.7152 100.082L88.7205 100.085Z"
          fill="#1D1B1B"
        />
      </g>
      <defs>
        <clipPath id="clip0_238_13573">
          <rect
            fill="white"
            height="93.0357"
            transform="translate(36.0767 0.328125) rotate(22.816)"
            width="146"
          />
        </clipPath>
      </defs>
    </svg>
  )
}