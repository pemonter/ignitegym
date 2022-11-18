import { Button as ButtonNativeBase, IButtonProps } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={variant === "outline" ? "green.500" : "none"}
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500"
      }}
      _text={{
        color: variant === "outline" ? "green.500" : "white",
        fontFamily: "heading",
        fontSize: "sm"
      }}
      {...rest}
    >

      {title}

    </ButtonNativeBase>
  );
}