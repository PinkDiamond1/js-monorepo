import { IconProps, Icon } from '@chakra-ui/react';

interface StakeIconProps extends IconProps {
  fromColor?: string;
  toColor?: string;
}

export const StakeIcon = ({
  width = '32px',
  height = '32px',
  fromColor = '#34EDB3',
  toColor = '#00D1FF',
  ...props
}: StakeIconProps) => (
  <Icon width={width} height={height} viewBox="0 0 32 32" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.793.688a2.256 2.256 0 0 0-2.256 2.256v4.744H2.49A2.256 2.256 0 0 0 .235 9.944v5.113a2.256 2.256 0 0 0 2.256 2.256h3.612v4.377a2.256 2.256 0 0 0-2.17 2.254v5.113a2.256 2.256 0 0 0 2.256 2.256h21.15a2.256 2.256 0 0 0 2.257-2.256v-4.746a2.256 2.256 0 0 0 2.17-2.254v-5.113a2.256 2.256 0 0 0-2.256-2.256h-3.613v-4.375h3.047a2.256 2.256 0 0 0 2.255-2.256V2.944A2.256 2.256 0 0 0 28.943.688H7.794Zm.369 7V3.313h20.412v4.375H8.162ZM2.86 10.313v4.375h20.413v-4.375H2.86Zm5.868 11.375v-4.375H29.14v4.375H8.728Zm-2.17 7v-4.375H26.97v4.375H6.558Z"
      fill="url(#StakeIconLinearGradient)"
    />
    <defs>
      <linearGradient
        id="StakeIconLinearGradient"
        x1="6.095"
        y1="36.313"
        x2="42.686"
        y2="25.224"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={fromColor} />
        <stop offset="1" stopColor={toColor} />
      </linearGradient>
    </defs>
  </Icon>
);
