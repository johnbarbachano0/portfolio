import React from "react";
import CustomCard from "./CustomCard";
import Label from "../Label";
import useCommon from "../useCommon";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Link,
  Typography,
} from "@mui/material";
import { getMonthYear } from "../misc";
import { styles } from "./Styles";
// animation

//icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LabelIcon from "../LabelIcon";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import BusinessIcon from "@mui/icons-material/Business";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import WebIcon from "@mui/icons-material/Web";
//animation
import animate from "../Animate";

const ExperienceCard2 = ({ data, expand, onExpand }) => {
  const { projects } = data;
  const { stakeholders, responsibilities } = data?.jobDesc;
  const { isDark, isLarge, isMobile } = useCommon();

  return (
    <Card
      sx={{
        backgroundColor: isDark ? "#525E75" : "#DDDDDD",
        width: isLarge ? "100%" : "80%",
        mb: 4,
        mt: 0,
        zIndex: 100,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          py: 1.5,
          animation: `${animate} 5s ease-in-out infinite alternate both`,
        }}
      >
        <img
          src={data.logo}
          alt="Company Logo"
          style={{ width: data?.imgWidth, paddingRight: 5 }}
        />
        <Typography
          color="white"
          variant="body2"
          align="center"
          components="span"
        >
          <Link href={data.website} target="_blank" rel="noreferrer">
            {data?.company}
          </Link>
        </Typography>
      </CardContent>
      <CardContent sx={{ maxHeight: "100%", py: 0.5 }}>
        <LabelIcon
          icon={<CalendarMonthIcon />}
          data={`${getMonthYear(data?.startDate)} - ${getMonthYear(
            data?.endDate
          )}`}
        />
        <LabelIcon
          icon={<HourglassTopRoundedIcon />}
          data={`${data?.duration} years`}
        />
        <LabelIcon icon={<LocationOnRoundedIcon />} data={data?.location} />
        <Label
          icon={<BusinessIcon />}
          label="Company Description"
          data={data?.companyDesc}
        />
        <Label
          icon={<PersonRoundedIcon />}
          label="Role"
          data={data?.jobDesc?.jobTitle}
        />
        <Label
          icon={<SummarizeRoundedIcon />}
          label="Job Summary"
          data={data?.jobDesc?.summary}
        />
        {expand && (
          <Box sx={{ flex: 1 }}>
            <Label icon={<GroupsRoundedIcon />} label="Stakeholders" />
            <Box sx={styles.container}>
              {stakeholders.map((holder, i) => (
                <CustomCard
                  key={i}
                  label={holder?.role}
                  icon={
                    <PersonIcon
                      sx={{
                        m: 0,
                        color: isDark ? "#004e92" : "#00aeff",
                      }}
                    />
                  }
                >
                  {holder?.task?.map((item, i) => (
                    <Typography
                      key={i}
                      sx={{ fontSize: 12, py: 0.25 }}
                      align="justify"
                    >
                      {<ArrowForwardIosIcon sx={{ fontSize: 8 }} />}
                      {item}
                    </Typography>
                  ))}
                </CustomCard>
              ))}
            </Box>
            <Label
              icon={<FormatListBulletedRoundedIcon />}
              label="Responsibilities"
            />
            <Box sx={styles.container}>
              {responsibilities.map((item, i) => (
                <CustomCard
                  key={i}
                  label={item?.state}
                  icon={
                    <SettingsIcon
                      sx={{
                        m: 0,
                        color: isDark ? "#004e92" : "#00aeff",
                      }}
                    />
                  }
                >
                  {item?.value?.map((item, i) => (
                    <Typography
                      key={i}
                      sx={{ fontSize: 12, py: 0.25 }}
                      align="justify"
                    >
                      {<ArrowForwardIosIcon sx={{ fontSize: 8 }} />}
                      {item}
                    </Typography>
                  ))}
                </CustomCard>
              ))}
            </Box>
            <Label icon={<AssignmentRoundedIcon />} label="Projects" />
            <Box sx={styles.container}>
              {projects.map((item, i) => (
                <CustomCard
                  key={i}
                  label={item?.name}
                  icon={
                    <WebIcon
                      sx={{
                        m: 0,
                        color: isDark ? "#004e92" : "#00aeff",
                      }}
                    />
                  }
                >
                  <Typography sx={{ fontSize: 12, py: 0.25 }} align="justify">
                    <LocationOnIcon
                      sx={{ fontSize: 12, position: "relative", top: 1 }}
                    />

                    {item?.location}
                  </Typography>
                  <Typography sx={{ fontSize: 12, py: 0.25 }} align="justify">
                    <BusinessIcon
                      sx={{ fontSize: 12, position: "relative", top: 1 }}
                    />
                    {item?.industry}
                  </Typography>
                </CustomCard>
              ))}
            </Box>
          </Box>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          onClick={onExpand}
          sx={isMobile ? { flex: 1 } : null}
        >
          {expand ? "Minimize" : "Expand"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ExperienceCard2;
