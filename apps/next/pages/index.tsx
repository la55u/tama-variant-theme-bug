import { Button, Paragraph, Theme, YStack, styled } from '@my/ui'

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
        {/* this button should have tomato background and white text but it doesn't */}
        <MyButton variant="solid">Test</MyButton>
      </YStack>
    </Theme>
  )
}
