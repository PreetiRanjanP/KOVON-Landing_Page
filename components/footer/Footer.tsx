"use client";
import { Box, Container, Grid, Typography, IconButton, Stack } from "@mui/material";
import { COMPANY_INFO, FOOTER_LINKS, SOCIAL_LINKS } from "@/constants/content";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#060A16", pt: 10, pb: 4, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>{COMPANY_INFO.name}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>{COMPANY_INFO.description}</Typography>
            <Stack direction="row" spacing={1}>
              {SOCIAL_LINKS.map((s, i) => (
                <IconButton key={i} href={s.href} sx={{ color: "text.secondary" }}><s.icon /></IconButton>
              ))}
            </Stack>
          </Grid>
          
          {FOOTER_LINKS.map((group) => (
            <Grid item xs={6} md={2} key={group.title}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>{group.title}</Typography>
              <Stack spacing={1}>
                {group.links.map((l) => (
                  <Box component="a" key={l.label} href={l.href} sx={{ color: "text.secondary", textDecoration: "none", fontSize: "0.875rem", "&:hover": { color: "primary.main" } }}>
                    {l.label}
                  </Box>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 8, pt: 4, borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>{COMPANY_INFO.copyright}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
