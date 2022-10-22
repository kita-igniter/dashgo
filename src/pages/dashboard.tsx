import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Dashboard() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xasis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        new Date("01 Sep 2022").getTime(),
        new Date("02 Sep 2022").getTime(),
        new Date("03 Sep 2022").getTime(),
        new Date("04 Sep 2022").getTime(),
        new Date("05 Sep 2022").getTime(),
        new Date("06 Sep 2022").getTime(),
        new Date("07 Sep 2022").getTime(),
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };
  const series = [{ name: "series1", data: [0, 120, 25, 32, 75, 12, 200] }];

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box
            p={["6","8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart
              type="area"
              series={series}
              options={options}
              height={160}
            ></Chart>
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart
              type="area"
              series={series}
              options={options}
              height={160}
            ></Chart>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
