import { Button, FlexLayout, Text } from "@/ui/components";

export const Footer: React.FC = () => {
  return (
    <FlexLayout
      as="footer"
      className="w-full bg-dark-background-background-black gap-2xs px-stretch-grid-margin-width py-s items-center justify-between"
    >
      <FlexLayout className="gap-2xs">
        <Button
          variant="secondary"
          label="Contact us"
          as="a"
          href="https://arasdigital.co/contact"
          target="_blank"
          rel="noopener"
        />
        <Button
          variant="secondary"
          label="Privacy Policy"
          as="a"
          href="https://arasdigital.co/"
          target="_blank"
          rel="noopener"
        />
        <Button
          variant="secondary"
          label="Terms of use"
          as="a"
          href="https://arasdigital.co/"
          target="_blank"
          rel="noopener"
        />
        <Button
          variant="secondary"
          label="DMCA Policy"
          as="a"
          href="https://arasdigital.co/"
          target="_blank"
          rel="noopener"
        />
      </FlexLayout>
      <Text
        color="text-dark-content-content-secondary"
        variant="label-s-regular"
      >
        © Aras Digital Products 2024
      </Text>
    </FlexLayout>
  );
};
