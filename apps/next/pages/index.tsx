import { Button, Theme, YStack, styled } from '@my/ui'

const MyButton = styled(Button, {
  name: 'Button',
  variants: {
    variant: {
      solid: {
        color: '$mycolor',
        backgroundColor: '$mybg',
      },
    },
  },
})

export default function Page() {
  return (
    <Theme name="light">
      <YStack theme="primary" m="$6" flex={1}>
        <MyButton variant="solid">Test</MyButton>
      </YStack>
    </Theme>
  )
}
